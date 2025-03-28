const phonologyVersion = document.getElementById('phonologyVersion');
const indexVersion = document.getElementById('indexVersion');

const versions = {
    phonology: '0.1.0.0-alpha',
    index: '0.1.0.0-alpha',
};

if (phonologyVersion === null) {
    indexVersion.innerHTML += `Version: ${versions.index}`;
}
else {
    phonologyVersion.innerHTML += `Version: ${versions.phonology}`;
}


//indexVersion.innerHTML += `Version: ${versions.index}`;
