async function loadTransations() {
    const response = await fetch('translations.json');
    return await response.json();
}

document.getElementById('translateBtn').addEventListener('click', async() => {
    const translations = await loadTransations();
    const lang = 'ja';

    document.querySelectorAll('[data-translate]').forEach(el => {
        const key = el.getAttribute('data-translate');
        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    })
});