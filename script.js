// GET VARS HERE
const shadowdarkCharacterCreatorHeader = document.getElementById('shadowdarkCharacterCreatorHeader');
const clickMeButton = document.getElementById('clickMeButton');
const langCheckbox = document.getElementById('langCheckbox');
const statsInputBoxes = document.getElementsByClassName('stat');

// do init here
langCheckbox.checked = false;
let lang = 'en';
for (let i = 0; i < statsInputBoxes.length; i++) {
    statsInputBoxes[i].value = 0;
}

function randomStat() {
    let value = 0;
    for (let i = 0; i < 3; i++) {
        let a = Math.floor(
            Math.random() * 6
        );
        a++;
        value += a;
    }

    return value;
}

function parseJson(jsonPath) {
    fetch(jsonPath)
        .then(response => response.json())
        .then((json) => {
            parse(json);
        });
}

function parse(json) {
    shadowdarkCharacterCreatorHeader.innerText = json.shadowdarkCharacterCreatorHeader;
    clickMeButton.innerText = json.clickMeButton;
}

function refreshLanguage() {
    if (lang === 'en') {
        parseJson('./en.json', parse);
    }
    else if (lang === 'jp') {
        parseJson('./jp.json', parse);
    }    
}

// callbacks here
langCheckbox.onchange = () => {
    if (langCheckbox.checked === true) {
        lang = 'jp';
    } else {
        lang = 'en';
    }

    refreshLanguage();
};

clickMeButton.onclick = () => {
    for (let i = 0; i < statsInputBoxes.length; i++) {
        statsInputBoxes[i].value = randomStat();
    }
};
