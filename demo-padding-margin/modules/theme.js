const themeModule = {
    init: () => {
        const checkbox = document.getElementById('dark-mode');

        let selectedTheme = localStorage.getItem('theme');
        if (selectedTheme && selectedTheme === 'dark') {
            document.body.classList.add(selectedTheme);
            checkbox.checked = true;
        }

        checkbox.addEventListener('change', themeModule.toggleTheme);
    },

    toggleTheme: () => {
        const checkbox = document.getElementById('dark-mode');

        let selectedTheme = localStorage.getItem('theme');
        if (selectedTheme && selectedTheme === 'dark') {
            document.body.classList.remove('dark');
            localStorage.setItem('theme', 'light');
            checkbox.checked = false;
        } else {
            document.body.classList.add('dark');
            localStorage.setItem('theme', 'dark');
            checkbox.checked = true;
        }
    }
};