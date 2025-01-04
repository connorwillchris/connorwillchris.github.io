// GET VARS HERE
const langButton = document.getElementById('langButton');
const shadowdarkCharacterCreatorHeader = document.getElementById('shadowdarkCharacterCreatorHeader');
const homeNavBar = document.getElementById('homeNavBar');
const aboutNavBar = document.getElementById('aboutNavBar');
const clickMeButton = document.getElementById('clickMeButton');

let lang = 'en';    // defaults to english

//console.log(randomStat());
randomStat();

function randomStat() {
    let value = 0;
    for (let i = 0; i < 3; i++) {
        let a = Math.floor((Math.random() * 5) + 1);
        value += a;

        console.log(a);
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
    langButton.innerText = json.langButton;
    homeNavBar.innerText = json.homeNavBar;
    aboutNavBar.innerText = json.aboutNavBar;
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

langButton.onclick = () => {
    if (lang === 'en') {
        lang = 'jp';
    }
    else if (lang === 'jp') {
        lang = 'en';
    }

    refreshLanguage();
};
