// Dark Mode Toggle
const darkModeBtn = document.getElementById('darkModeBtn');
const modeIcon = document.querySelector('.mode-icon');

// Load dark mode preference from localStorage
const isDarkMode = localStorage.getItem('darkMode') === 'true';
if (isDarkMode) {
    document.body.classList.add('dark-mode');
    if (modeIcon) modeIcon.textContent = '☀️';
}

if (darkModeBtn) {
    darkModeBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const isDark = document.body.classList.contains('dark-mode');
        
        // Update icon
        if (modeIcon) {
            modeIcon.textContent = isDark ? '☀️' : '🌙';
        }
        
        // Save preference
        localStorage.setItem('darkMode', isDark);
    });
}

// Login and App Shell
const loginForm = document.getElementById('loginForm');
const loginOverlay = document.getElementById('loginOverlay');
const appShell = document.getElementById('appShell');
const welcomePopup = document.getElementById('welcomePopup');

if (loginForm && loginOverlay && appShell) {
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value.trim();

        if (username && password) {
            if (welcomePopup) {
                welcomePopup.textContent = `Welcome, ${username}`;
            }
            loginOverlay.classList.add('hidden');
            appShell.classList.remove('d-none');
        } else {
            alert('Please enter both a username and password.');
        }
    });
}

const statementButton = document.getElementById('viewStatementBtn');
const statementBox = document.getElementById('statementBox');

if (statementButton && statementBox) {
    statementButton.addEventListener('click', () => {
        const isHidden = statementBox.classList.contains('d-none');
        statementBox.classList.toggle('d-none', !isHidden);
        statementButton.textContent = isHidden ? 'Hide Statement' : 'View Statement';
    });
}