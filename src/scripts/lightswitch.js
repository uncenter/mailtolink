function systemTheme() {
	window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function darkMode() {
	document.body.classList.replace('light', 'dark');
}

function lightMode() {
	document.body.classList.replace('dark', 'light');
}

window.addEventListener('DOMContentLoaded', () => {
	let theme = systemTheme();

	if (localStorage.getItem('theme') === 'dark') {
		darkMode();
	} else if (localStorage.getItem('theme') === 'light') {
		lightMode();
	} else if (theme === 'dark') {
		darkMode();
	} else if (theme === 'light') {
		lightMode();
	}

	document.querySelector('#lightswitch').addEventListener('click', () => {
		if (document.body.classList.contains('light')) {
			darkMode();
			localStorage.setItem('theme', 'dark');
		} else {
			lightMode();
			localStorage.setItem('theme', 'light');
		}
	});

	window
		.matchMedia('(prefers-color-scheme: dark)')
		.addEventListener('change', () => {
			if (!localStorage.getItem('theme')) {
				theme = systemTheme();
				if (theme === 'light') {
					lightMode();
				} else if (theme === 'dark') {
					darkMode();
				}
				localStorage.setItem('theme', theme);
			}
		});
});
