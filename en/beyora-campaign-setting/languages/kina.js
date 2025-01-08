const lexiconTable = document.getElementById('lexiconTable');

fetch('./kina-dictionary.json')
    .then((response) => response.json())
    .then((json) => {
        for (let i = 0; i < json.length; i++) {
            lexiconTable.innerHTML += `
            <tr>
                <td>${json[i].word}</td>
                <td>${json[i].pos}</td>
                <td>${json[i].meaning}</td>
            </tr>
            `;
        }
    })
    ;