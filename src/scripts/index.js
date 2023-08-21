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

document.getElementById('nav-light').addEventListener('click', () => {
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

const ccSection = document.querySelector('.ccSection'),
	bccSection = document.querySelector('.bccSection'),
	ccBtn = document.querySelector('.ccButton'),
	bccBtn = document.querySelector('.bccButton'),
	input = document.querySelectorAll('.input'),
	copyCode = document.querySelector('.copyCode');

for (const item of input) {
	item.addEventListener('keyup', (e) => {
		const value = e.target.value;
		const id = e.target.id;
		const output = document.querySelector(`.${id}Output`);
		const link = document.querySelector('.mailto-link-container');
		const label = document.getElementById(`${id}Label`);

		output.innerText = value;

		// If not recipient input then show adjoining label when value over 1 else hide
		if (id !== 'recipient') {
			if (value.length >= 1) {
				label.classList.add('dib');
			} else {
				label.classList.remove('dib');
			}
		}

		if (id === 'recipient' || id === 'cc' || id === 'bcc') {
			link.classList.add('active');

			// If email field and comma, then remove space after it in output
			if (/,/.test(value)) {
				output.innerHTML = output.innerHTML.replace(/\s+/g, '');
			} else {
				output.innerHTML = value;
			}
		}

		// Show email address when email field has 3 chars or more, hide if not.
		if (id === 'recipient') {
			if (value.length >= 3) {
				link.classList.add('active');
			} else {
				link.classList.remove('active');
			}
		}

		// If subject or body, replace spaces and line breaks
		if (id === 'subject' || id === 'body') {
			let str = output.innerText;
			let strBreak = '%0A';
			let newStr = encodeURIComponent(str).replace(/%0A/g, '%0D%0A');
			// str = str.replace(/\n/g, '%0d%0a')
			// str = str.replace(/\n/g, "%0A").replace(/ /g, "%20").replace(/&/g, "%26");
			output.innerText = newStr;
		}
	});
}

ccBtn.addEventListener('click', function (e) {
	if (ccSection.classList.contains('dn')) {
		ccSection.classList.remove('dn');
		document.getElementById('cc').focus();
	} else {
		ccSection.classList.add('dn');
	}
});

bccBtn.addEventListener('click', function (e) {
	if (bccSection.classList.contains('dn')) {
		bccSection.classList.remove('dn');
		document.getElementById('bcc').focus();
	} else {
		bccSection.classList.add('dn');
	}
});

copyCode.addEventListener('click', function (e) {
	const labelVisible = document.querySelectorAll('.label.dib'),
		labelFirst = labelVisible[0],
		label = document.querySelector('.label.dib'),
		labelCount = labelVisible.length;

	for (let item of labelVisible) {
		if (item.innerHTML.indexOf('&') === -1) {
			item.prepend('&');
		}
	}

	if (labelFirst) {
		let str = labelFirst.innerHTML;
		str = str.replace('&amp;', '');
		labelFirst.innerHTML = str;

		if (labelFirst.innerHTML.indexOf('?') === -1) {
			labelFirst.prepend('?');
		}
	}

	window.navigator.clipboard.writeText(
		copyCode.previousElementSibling.textContent,
	);

	copyCode.textContent = 'Copied!';

	setTimeout(() => {
		copyCode.textContent = 'Copy';
	}, 1500);

	// let mailtoText = document.querySelector('.mailto-text').innerText.replace("%0A", "%0D%0A");

	// mailtoText = mailtoText.replace("%0A", "%0D%0A");

	// console.log(`Spaces gone?:: ${mailtoText}`);
});

copyCode.addEventListener('mouseover', function (e) {
	if ((copyCode.textContent = 'Copied!')) {
		copyCode.textContent = 'Copy';
	}
});
