function toggleNightMode() {
    var body = document.body;
    var button = document.querySelector('.toggle-button');
    
    body.classList.toggle('night-mode');
    button.classList.toggle('night-mode');

    // Save night mode preference in localStorage
    if (body.classList.contains('night-mode')) {
        localStorage.setItem('night-mode', 'enabled');
    } else {
        localStorage.removeItem('night-mode');
    }
}

// Check for night mode preference on page load
window.onload = function() {
    if (localStorage.getItem('night-mode') === 'enabled') {
        document.body.classList.add('night-mode');
        document.querySelector('.toggle-button').classList.add('night-mode');
    }
}