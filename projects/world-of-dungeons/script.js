//const translateButton = document.getElementById('translateButton');
const worldOfDungeonsTitle = document.getElementById('worldOfDungeonsTitle');
const rulesSummaryHeader = document.getElementById('rulesSummaryHeader');
const characterCreationHeader = document.getElementById('characterCreationHeader');
const attributesParagraph = document.getElementById('attributesParagraph');
const hitDiceParagraph = document.getElementById('hitDiceParagraph');
const fighterClassParagraph = document.getElementById('fighterClassParagraph');
const thievesClassParagraph = document.getElementById('thievesClassParagraph');

// hack to use English by default
let lang = 'tok';

const englishJson = {
    translateButton: 'toki pona',
    worldOfDungeonsTitle: 'World of Dungeons',
    rulesSummaryHeader: 'Rules Summary',
    characterCreationHeader: 'Character Creation',
    attributesParagraph: '<b>Attributes:</b> Roll 2d6 for each. On a 6-, the value is +0. On a 7-9, the value is +1. On a 10-11, the value is +2. On a 12, the value is +3.',
    hitDiceParagraph: '<b>You have 1 Hit Die (d6) + extra hit dice equal to your CON.</b> Roll all your hit dice and keep a number equal to your level to determine your HP. When you rest and consume a ration/waterskin/wineskin, you may re-roll your HP. If you are attended by a healer, roll an extra hit dice.',
    fighterClassParagraph: '<b>FIGHTERS</b> get Athletics. Choose two special abilities: <b>Skirmish</b> (+1 damage and worn armor counts as one type lighter), <b>Tough</b> (+1 armor), <b>Slay</b> (+2 melee damage), <b>Hardy</b> (+6 HP).',
    thievesClassParagraph: '<b>THIEVES</b> get Stealth. Choose two abilities: <b>Backstab</b> (attack from concealment to do +3 damage), <b>Lucky</b> (once per day, turn a miss into a partial success), <b>Reflexes</b> (you always go first and can react when suddenly surprised), <b>Tinker</b> (you can attempt to quickly pick a lock, pick pocket, or disarm a trap).',
};

const click = function() {
    if (lang === 'en') {
        lang = 'tok';

        //translateButton.innerHTML = tokJson.translateButton;
        worldOfDungeonsTitle.innerHTML = tokJson.worldOfDungeonsTitle;
        rulesSummaryHeader.innerHTML = tokJson.rulesSummaryHeader;
        characterCreationHeader.innerHTML = tokJson.characterCreationHeader;
        attributesParagraph.innerHTML = tokJson.attributesParagraph;
        hitDiceParagraph.innerHTML = tokJson.hitDiceParagraph;
        fighterClassParagraph.innerHTML = tokJson.fighterClassParagraph;
        thievesClassParagraph.innerHTML = tokJson.thievesClassParagraph;
    }
    else if (lang === 'tok') {
        lang = 'en';

        //translateButton.innerHTML = englishJson.translateButton;
        worldOfDungeonsTitle.innerHTML = englishJson.worldOfDungeonsTitle;
        rulesSummaryHeader.innerHTML = englishJson.rulesSummaryHeader;
        characterCreationHeader.innerHTML = englishJson.characterCreationHeader;
        attributesParagraph.innerHTML = englishJson.attributesParagraph;
        hitDiceParagraph.innerHTML = englishJson.hitDiceParagraph;
        fighterClassParagraph.innerHTML = englishJson.fighterClassParagraph;
        thievesClassParagraph.innerHTML = englishJson.thievesClassParagraph;
    }
};


click();
/*
translateButton.onclick = click;*/
