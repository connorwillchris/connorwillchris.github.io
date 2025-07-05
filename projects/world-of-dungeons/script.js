const translateButton = document.getElementById('translateButton');
const worldOfDungeonsTitle = document.getElementById('worldOfDungeonsTitle');
const rulesSummaryHeader = document.getElementById('rulesSummaryHeader');
const characterCreationHeader = document.getElementById('characterCreationHeader');
const attributesParagraph = document.getElementById('attributesParagraph');
const hitDiceParagraph = document.getElementById('hitDiceParagraph');

// hack to use English by default.
let lang = 'tok';

const englishJson = {
    translateButton: 'toki pona',
    worldOfDungeonsTitle: 'World of Dungeons',
    rulesSummaryHeader: 'Rules Summary',
    characterCreationHeader: 'Character Creation',

    // character creation
    attributesParagraph: '<b>Attributes:</b> Roll 2d6 for each. On a 6-, the value is +0. On a 7-9, the value is +1. On a 10-11, the value is +2. On a 12, the value is +3.',
    hitDiceParagraph: '<b>You have 1 Hit Die (d6) + extra hit dice equal to your CON.</b> Roll all your hit dice and keep a number equal to your level to determine your HP. When you rest and consume a ration/waterskin/wineskin, you may re-roll your HP. If you are attended by a healer, roll an extra hit dice.',
};

const tokJson = {
    translateButton: 'English',
    worldOfDungeonsTitle: 'ma pi tomo anpa',
    rulesSummaryHeader: 'nasin ali',
    characterCreationHeader: 'o pali e jan musi',

    // character creation
    attributesParagraph: '<b>nanpa musi:</b> o kepeken e 2k6 tawa nanpa musi ali. sina jo e nanpa pi suli 6 anu lili la, nanpa musi li +0. sina jo e nanpa pi suli 7 anu nanpa pi 10 lili la, nanpa musi li +1.',
    hitDiceParagraph: '<b>sina jo e leko sijelo wan la, sijelo sina li pana e leko sijelo sin.</b> o kepeken e leko nanpa ali.',
};

const click = function() {
    if (lang === 'en') {
        lang = 'tok';

        translateButton.innerHTML = tokJson.translateButton;
        worldOfDungeonsTitle.innerHTML = tokJson.worldOfDungeonsTitle;
        rulesSummaryHeader.innerHTML = tokJson.rulesSummaryHeader;
        characterCreationHeader.innerHTML = tokJson.characterCreationHeader;
        attributesParagraph.innerHTML = tokJson.attributesParagraph;
        hitDiceParagraph.innerHTML = tokJson.hitDiceParagraph;
    }
    else if (lang === 'tok') {
        lang = 'en';

        translateButton.innerHTML = englishJson.translateButton;
        worldOfDungeonsTitle.innerHTML = englishJson.worldOfDungeonsTitle;
        rulesSummaryHeader.innerHTML = englishJson.rulesSummaryHeader;
        characterCreationHeader.innerHTML = englishJson.characterCreationHeader;
        attributesParagraph.innerHTML = englishJson.attributesParagraph;
        hitDiceParagraph.innerHTML = englishJson.hitDiceParagraph;
    }
};

click();

translateButton.onclick = click;
