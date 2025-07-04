const translateButton = document.getElementById('translateButton');
const worldOfDungeonsTitle = document.getElementById('worldOfDungeonsTitle');
const rulesSummaryHeader = document.getElementById('rulesSummaryHeader');
const characterCreationHeader = document.getElementById('characterCreationHeader');
const attributesParagraph = document.getElementById('attributesParagraph');

// hack to use English by default.
let lang = 'tok';

const englishJson = {
    translateButton: 'toki pona',
    worldOfDungeonsTitle: 'World of Dungeons',
    rulesSummaryHeader: 'Rules Summary',
    characterCreationHeader: 'Character Creation',

    // character creation
    attributesParagraph: '<b>Attributes:</b> Roll 2d6 for each. On a 6-, the value is +0. On a 7-9, the value is +1. On a 10-11, the value is +2. On a 12, the value is +3.',
};

const tokJson = {
    translateButton: 'English',
    worldOfDungeonsTitle: 'ma pi tomo anpa',
    rulesSummaryHeader: 'nasin ali',
    characterCreationHeader: 'o pali e jan musi',

    // character creation
    attributesParagraph: '<b>nanpa musi:</b> o kepeken e 2k6 tawa nanpa musi ali. sina jo e nanpa pi suli 6 anu lili la, nanpa musi li +0. sina jo e nanpa pi suli 7 anu nanpa pi 10 lili la, nanpa musi li +1.',
};

const click = function() {
    /*if (firstTime) {
        firstTime = false;
        //return;

        translateButton.innerHTML = tokJson.translateButton;
        worldOfDungeonsTitle.innerHTML = tokJson.worldOfDungeonsTitle;
        rulesSummaryHeader.innerHTML = tokJson.rulesSummaryHeader;
        characterCreationHeader.innerHTML = tokJson.characterCreationHeader;
        attributesParagraph.innerHTML = tokJson.attributesParagraph;
    }*/

    if (lang === 'en') {
        lang = 'tok';

        translateButton.innerHTML = tokJson.translateButton;
        worldOfDungeonsTitle.innerHTML = tokJson.worldOfDungeonsTitle;
        rulesSummaryHeader.innerHTML = tokJson.rulesSummaryHeader;
        characterCreationHeader.innerHTML = tokJson.characterCreationHeader;
        attributesParagraph.innerHTML = tokJson.attributesParagraph;
    }
    else if (lang === 'tok') {
        lang = 'en';

        translateButton.innerHTML = englishJson.translateButton;
        worldOfDungeonsTitle.innerHTML = englishJson.worldOfDungeonsTitle;
        rulesSummaryHeader.innerHTML = englishJson.rulesSummaryHeader;
        characterCreationHeader.innerHTML = englishJson.characterCreationHeader;
        attributesParagraph.innerHTML = englishJson.attributesParagraph;
    }
};

click();

translateButton.onclick = click;
