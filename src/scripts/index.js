function systemTheme() {
	window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function darkMode() {
	document.body.classList.replace('light', 'dark');
}

function lightMode() {
	document.body.classList.replace('dark', 'light');
}

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

// ---

class Params {
	constructor() {
		this.params = new Map();
	}

	get(key) {
		const values = this.params.get(key);
		return values ? values[0] : null;
	}

	set(key, value) {
		this.params.set(key, [value]);
	}

	delete(key) {
		this.params.delete(key);
	}

	toString() {
		const parts = [];
		for (const [key, values] of this.params) {
			for (const value of values) {
				parts.push(`${key}=${value}`);
			}
		}
		if (parts.length > 0) {
			return '?' + parts.join('&');
		} else {
			return '';
		}
	}
}

// ---

const recipientInput = document.querySelector('input#recipient');
const ccInput = document.querySelector('input#cc');
const bccInput = document.querySelector('input#bcc');
const subjectInput = document.querySelector('input#subject');
const bodyInput = document.querySelector('textarea#body');

const mailToText = document.querySelector('.mailto-text');
const mailToContainer = document.querySelector('.mailto-link-container');

function updateResult() {
	const params = new Params();

	for (const { name, element } of [
		{ name: 'cc', element: ccInput },
		{ name: 'bcc', element: bccInput },
		{ name: 'subject', element: subjectInput },
		{ name: 'body', element: bodyInput },
	]) {
		let value = (element?.value || '').trim();

		// Replace spaces and line breaks in subject/body inputs
		if (['subject', 'body'].includes(name)) {
			value = encodeURIComponent(value).replace(/%0A/g, '%0D%0A');
		}

		// If email field and comma, then remove space after it
		if (['recipient', 'cc', 'bcc'].includes(name)) {
			if (/,/.test(value)) {
				value = value.replace(/\s+/g, '');
			}
		}

		if (value !== '') params.set(name, value);
	}

	mailToText.textContent = `mailto:${
		(recipientInput?.value || '').trim() + params.toString()
	}`;
}

function updateMailToContainer() {
	const addressEls = [recipientInput, ccInput, bccInput];
	if (
		addressEls.some((e) => !e.checkValidity()) ||
		addressEls.every((e) => e.value === '')
	) {
		mailToContainer.classList.remove('active');
		return;
	}

	updateResult();
	mailToContainer.classList.add('active');
}

updateMailToContainer();

for (const input of [
	recipientInput,
	ccInput,
	bccInput,
	subjectInput,
	bodyInput,
]) {
	input.addEventListener('input', (e) => {
		updateMailToContainer();
	});
}

const ccBtn = document.querySelector('#cc-button');
const bccBtn = document.querySelector('#bcc-button');

const ccSection = document.querySelector('.ccSection');
const bccSection = document.querySelector('.bccSection');

ccBtn.addEventListener('click', function (e) {
	if (ccSection.classList.contains('dn')) {
		ccSection.classList.remove('dn');
		document.querySelector('#cc').focus();
	} else {
		ccSection.classList.add('dn');
	}
});

bccBtn.addEventListener('click', function (e) {
	if (bccSection.classList.contains('dn')) {
		bccSection.classList.remove('dn');
		document.querySelector('#bcc').focus();
	} else {
		bccSection.classList.add('dn');
	}
});

const copyCode = document.querySelector('.copyCode');

copyCode.addEventListener('click', function (e) {
	window.navigator.clipboard.writeText(
		copyCode.previousElementSibling.textContent,
	);

	copyCode.textContent = 'Copied!';

	setTimeout(() => {
		copyCode.textContent = 'Copy';
	}, 1500);
});

copyCode.addEventListener('mouseover', function (e) {
	if ((copyCode.textContent = 'Copied!')) {
		copyCode.textContent = 'Copy';
	}
});
