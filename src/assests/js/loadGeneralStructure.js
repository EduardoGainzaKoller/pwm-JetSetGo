async function loadGeneralStructure(elements) {
    for (const { id, templatePath, repeat } of elements) {
        let element = document.getElementById(id);
        if (element) {
            if (repeat) {
                for (let i = 0; i < repeat; i++) {
                    let item = await loadTemplate(templatePath);
                    element.appendChild(item);
                }
            } else {
                element.appendChild(await loadTemplate(templatePath));
            }
        }
    }
}
