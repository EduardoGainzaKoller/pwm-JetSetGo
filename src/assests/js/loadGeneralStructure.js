async function loadGeneralStructure(elements) {
    for (const { id, templatePath } of elements) {
        let element = document.getElementById(id);
        if (element) {
            element.appendChild(await loadTemplate(templatePath));
        }
    }
}