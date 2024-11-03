const dateEdited = document.getElementById('dateEdited');

let date = new Date('11/2/24');
dateEdited.innerHTML += `Last updated: ${date.toLocaleDateString()}`;
