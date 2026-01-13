function toggleDetails(button) {
    const details = button.nextElementSibling;
    const isOpen = details.style.display === 'block';

    details.style.display = isOpen ? 'none' : 'block';
    button.textContent = isOpen ? 'Details' : 'Hide';
}

document.getElementById('year').textContent = new Date().getFullYear();