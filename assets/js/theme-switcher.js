document.addEventListener('DOMContentLoaded', function() {
    const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (prefersDarkMode) {
        document.getElementById('theme').setAttribute('href', 'assets/css/styles-dark.css');
    }
});