async function loadJSON(jsonPath) {
    try {
        const response = await fetch(jsonPath);
        if (!response.ok) {
            throw new Error(`Error al cargar JSON: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error(`Error cargando JSON desde ${jsonPath}:`, error);
        return null;
    }
}

async function loadTemplatesWithData(elements) {
    for (const { id, templatePath, dataPath, repeat, dataMapping, dataTransform } of elements) {
        let container = document.getElementById(id);
        if (!container) continue;
        let data = null;
        if (dataPath) {
            data = await loadJSON(dataPath);
            if (!data) continue;

            if (!Array.isArray(data) && repeat) {
                const arrayProps = Object.keys(data).filter(key => Array.isArray(data[key]));
                if (arrayProps.length > 0) {
                    data = data[arrayProps[0]];
                }
            }
        }

        if (repeat && Array.isArray(data)) {
            for (const item of data) {
                let templateElement = await loadTemplate(templatePath);

                const transformedData = dataTransform ? dataTransform(item) : item;

                populateTemplate(templateElement, transformedData, dataMapping);
                container.appendChild(templateElement);
            }
        } else if (data) {
            let templateElement = await loadTemplate(templatePath);

            const transformedData = dataTransform ? dataTransform(data) : data;

            populateTemplate(templateElement, transformedData, dataMapping);
            container.appendChild(templateElement);
        } else {
            container.appendChild(await loadTemplate(templatePath));
        }
    }
}


function populateTemplate(templateElement, data, mapping) {
    if (!mapping) {
        for (const key in data) {
            const element = templateElement.querySelector(`#${key}, [data-field="${key}"]`);
            if (element) {
                if (element.tagName === 'IMG') {
                    element.src = data[key];
                } else {
                    element.textContent = data[key];
                }
            }
        }
    } else {
        for (const [dataKey, selector] of Object.entries(mapping)) {
            if (data[dataKey] !== undefined) {
                const elements = templateElement.querySelectorAll(selector);
                elements.forEach(element => {
                    if (element.tagName === 'IMG') {
                        element.src = data[dataKey];
                    } else if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                        element.value = data[dataKey];
                    } else if (element.tagName === 'A') {
                        element.href = data[dataKey];
                    } else {
                        element.textContent = data[dataKey];
                    }
                });
            }
        }
    }
}