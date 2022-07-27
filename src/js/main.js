!(function (e) {
	'function' != typeof e.matches &&
		(e.matches =
			e.msMatchesSelector ||
			e.mozMatchesSelector ||
			e.webkitMatchesSelector ||
			function (e) {
				for (var t = this, o = (t.document || t.ownerDocument).querySelectorAll(e), n = 0; o[n] && o[n] !== t; )
					++n;
				return Boolean(o[n]);
			}),
		'function' != typeof e.closest &&
			(e.closest = function (e) {
				for (var t = this; t && 1 === t.nodeType; ) {
					if (t.matches(e)) return t;
					t = t.parentNode;
				}
				return null;
			});
})(window.Element.prototype);

// Modal

document.addEventListener('DOMContentLoaded', function () {
	const modalButtons = document.querySelectorAll('.js-open-modal'),
		overlay = document.querySelector('.js-overlay-modal'),
		body = document.body,
		closeButtons = document.querySelectorAll('.js-modal-close');
	const fixBlocks = document.querySelectorAll('.fix-block');
	const link = document.querySelector('.registration-form-link.js-open-modal');
	const modalCardBtn = document.querySelector('.modal-card-btn');
	const modalCardConfirmBtn = document.querySelector('.modal-card-confirm-btn');
	const modalCardAcceptBtn = document.querySelector('.modal-card-accept-btn');

	function disableScroll() {
		let paddingOffset = window.innerWidth - document.body.offsetWidth + 'px';
		let pagePosition = window.scrollY;
		fixBlocks.forEach((el) => {
			el.style.paddingRight = paddingOffset;
		});
		body.style.paddingRight = paddingOffset;
		body.classList.add('disable-scroll');
		body.dataset.position = pagePosition;
		body.style.top = -pagePosition + 'px';
	}

	function enableScroll() {
		let pagePosition = parseInt(body.dataset.position, 10);
		body.style.top = 'auto';
		body.classList.remove('disable-scroll');
		fixBlocks.forEach((el) => {
			el.style.paddingRight = '0px';
		});
		body.style.paddingRight = '0px';
		window.scroll({ top: pagePosition, left: 0 });
		body.removeAttribute('data-position');
	}

	link &&
		link.addEventListener('click', function () {
			document.querySelector('.modal.active[data-modal="1"]').classList.remove('active');
			enableScroll();
		});

	modalCardBtn &&
		modalCardBtn.addEventListener('click', function () {
			document.querySelector('.modal.active[data-modal="3"]').classList.remove('active');
			enableScroll();
			overlay.classList.remove('active');
		});

	modalCardAcceptBtn &&
		modalCardAcceptBtn.addEventListener('click', function () {
			document.querySelector('.modal.active[data-modal="5"]').classList.remove('active');
			enableScroll();
			overlay.classList.remove('active');
		});

	modalCardConfirmBtn &&
		modalCardConfirmBtn.addEventListener('click', function () {
			document.querySelector('.modal.active[data-modal="4"]').classList.remove('active');
			enableScroll();
		});

	modalButtons.forEach((item) => {
		item.addEventListener('click', function (e) {
			e.preventDefault();

			const modalId = this.getAttribute('data-modal'),
				modalElem = document.querySelector('.modal[data-modal="' + modalId + '"]');

			modalElem.classList.add('active');
			overlay.classList.add('active');
			disableScroll();
		});
	});

	closeButtons.forEach((item) => {
		item.addEventListener('click', function (e) {
			let parentModal = this.closest('.modal');

			enableScroll();
			parentModal.classList.remove('active');
			overlay.classList.remove('active');
		});
	});

	document.body.addEventListener(
		'keyup',
		function (e) {
			let key = e.keyCode;

			if (key == 27) {
				document.querySelector('.modal.active').classList.remove('active');
				document.querySelector('.overlay').classList.remove('active');
				enableScroll();
			}
		},
		false
	);

	overlay &&
		overlay.addEventListener('click', function () {
			document.querySelector('.modal.active').classList.remove('active');
			this.classList.remove('active');
			enableScroll();
		});
});

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
