!(function (e) {
	'function' != typeof e.matches &&
		(e.matches =
			e.msMatchesSelector ||
			e.mozMatchesSelector ||
			e.webkitMatchesSelector ||
			function (e) {
				for (var t = this, o = (t.document || t.ownerDocument).querySelectorAll(e), n = 0; o[n] && o[n] !== t;)
					++n;
				return Boolean(o[n]);
			}),
		'function' != typeof e.closest &&
		(e.closest = function (e) {
			for (var t = this; t && 1 === t.nodeType;) {
				if (t.matches(e)) return t;
				t = t.parentNode;
			}
			return null;
		});
})(window.Element.prototype);

// Dropdown main
document.addEventListener('DOMContentLoaded', () => {
	const dropBtn = document.querySelector('.dropdown');
	const dropContent = document.querySelector('.dropdown__content');

	dropBtn.addEventListener('click', (e) => {
		dropContent.classList.toggle('active');
		dropBtn.classList.toggle('active');
	});

	document.addEventListener('click', (e) => {
		if (!e.target.closest('.dropdown')) {
			dropContent.classList.remove('active');
			dropBtn.classList.remove('active');
		}
	});
});

// Hours cost
document.addEventListener('DOMContentLoaded', () => {
	const label = document.querySelectorAll('.hours_item_js');
	const result = document.querySelector('.order__form_subtitle .result');
	const hour1 = document.querySelector('#orderHour1');
	const hour2 = document.querySelector('#orderHour2');
	const hour3 = document.querySelector('#orderHour3');
	const hour4 = document.querySelector('#orderHour4');
	const hour5 = document.querySelector('#orderHour5');
	const leassyTools = document.querySelector('#leassy-tools');
	const yourTools = document.querySelector('#your-tools');


	if (result) result.innerHTML = `1 hours * ${costLeassyTools}`; // исходное значение при загрузке страницы


	label.forEach((item) => {
		item.addEventListener('click', function (event) {

			let el = event.target.innerHTML;

			if (leassyTools.checked) {
				result.innerHTML = `${el} hours * ${costLeassyTools}`;
			}

			if (yourTools.checked) {
				result.innerHTML = `${el} hours * ${costYourTools}`;
			}
		});
	});

	leassyTools?.addEventListener('click', function () {
		if (hour1.checked) result.innerHTML = `1 hours * ${costLeassyTools}`;
		if (hour2.checked) result.innerHTML = `2 hours * ${costLeassyTools}`;
		if (hour3.checked) result.innerHTML = `3 hours * ${costLeassyTools}`;
		if (hour4.checked) result.innerHTML = `4 hours * ${costLeassyTools}`;
		if (hour5.checked) result.innerHTML = `5 hours * ${costLeassyTools}`;
	})

	yourTools?.addEventListener('click', function () {
		if (hour1.checked) result.innerHTML = `1 hours * ${costYourTools}`;
		if (hour2.checked) result.innerHTML = `2 hours * ${costYourTools}`;
		if (hour3.checked) result.innerHTML = `3 hours * ${costYourTools}`;
		if (hour4.checked) result.innerHTML = `4 hours * ${costYourTools}`;
		if (hour5.checked) result.innerHTML = `5 hours * ${costYourTools}`;
	})
});