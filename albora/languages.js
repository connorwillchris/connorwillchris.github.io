const lexiconTable = document.getElementById('lexiconTable');

fetch('lexicon.json')
    .then(res => res.json())
    .then((res) => {

        res.forEach(element => {
            lexiconTable.innerHTML += `
            <tr>
                <td>
                    ${element.word}
                </td>
                <td>
                    ${element.pos}
                </td>
                <td>
                    ${element.definition}
                </td>
            <tr>
            `;
        });
    });
