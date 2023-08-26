const systemTheme = () =>
	window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

function setTheme(theme, permanent = false) {
	document.body.classList.replace(theme === 'dark' ? 'light' : 'dark', theme);
	if (permanent) localStorage.setItem('theme', theme);
}

window.addEventListener('DOMContentLoaded', () => {
	setTheme(localStorage.getItem('theme') || systemTheme());

	document.querySelector('#lightswitch').addEventListener('click', () => {
		setTheme(
			document.body.classList.contains('light') ? 'dark' : 'light',
			true,
		);
	});

	window
		.matchMedia('(prefers-color-scheme: dark)')
		.addEventListener('change', (e) => {
			if (!localStorage.getItem('theme')) {
				setTheme(e.matches ? 'dark' : 'light');
			}
		});
});
