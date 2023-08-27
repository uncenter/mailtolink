class Params {
	constructor() {
		this.params = new Map();
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

const inputEls = [recipientInput, ccInput, bccInput, subjectInput, bodyInput];

const mailToText = document.querySelector('#mailto-text');
const mailToContainer = document.querySelector('#mailto-link-container');

function updateResult() {
	const params = new Params();

	for (const { name, element } of [
		{ name: 'cc', element: ccInput },
		{ name: 'bcc', element: bccInput },
		{ name: 'subject', element: subjectInput },
		{ name: 'body', element: bodyInput },
	]) {
		let value = (element?.value || '').trim();

		// Replace spaces and line breaks in subject/body inputs according to RFC6068: https://datatracker.ietf.org/doc/html/rfc6068#section-5.
		if (['subject', 'body'].includes(name)) {
			value = encodeURIComponent(value).replace(/%0A/g, '%0D%0A');
		}

		if (value !== '') params.set(name, value);
	}

	mailToText.textContent = `mailto:${
		(recipientInput?.value || '').trim() + params.toString()
	}`;
}

function updateMailToContainer() {
	if (inputEls.every((e) => e.value === '')) {
		mailToContainer.classList.remove('active');
		return;
	}

	updateResult();
	mailToContainer.classList.add('active');
}

updateMailToContainer();

for (const input of inputEls) {
	input.addEventListener('input', (e) => {
		updateMailToContainer();
	});
}

const ccBtn = document.querySelector('#cc-button');
const bccBtn = document.querySelector('#bcc-button');

const ccSection = document.querySelector('#cc-section');
const bccSection = document.querySelector('#bcc-section');

ccBtn.addEventListener('click', function (e) {
	if (ccSection.classList.contains('hidden')) {
		ccSection.classList.remove('hidden');
		document.querySelector('#cc').focus();
	} else {
		ccSection.classList.add('hidden');
	}
});

bccBtn.addEventListener('click', function (e) {
	if (bccSection.classList.contains('hidden')) {
		bccSection.classList.remove('hidden');
		document.querySelector('#bcc').focus();
	} else {
		bccSection.classList.add('hidden');
	}
});

// ---

const copyCode = document.querySelector('#copy-code');

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
