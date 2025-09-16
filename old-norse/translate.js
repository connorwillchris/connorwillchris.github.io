let lang = 'en';

async function loadTransations() {
    const response = await fetch('translations.json');
    return await response.json();
}

document.getElementById('translateBtn').addEventListener('click', async() => {
    const translations = await loadTransations();

    if (lang === 'en') {
        document.body.classList.add('ja'); // add the japanese font
        lang = 'ja';
    }
    else {
        document.body.classList.remove('ja'); // remove the japanese font
        lang = 'en';
    }

    document.querySelectorAll('[data-translate]').forEach(el => {
        const key = el.getAttribute('data-translate');
        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });
});
//