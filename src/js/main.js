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


document.addEventListener('DOMContentLoaded', () => {
	const pulseBtn = document.querySelector(".pulse");
	const overlay = document.querySelector(".callOverlay");
	const modal = document.querySelector("#myModal");
	const newModal = document.querySelector("#newModal");
	const nope = document.querySelector("#nope");
	const closeMe = document.querySelector("#closeMe");
	const yep = document.querySelector("#yes");
	const close = document.querySelector(".close");

	pulseBtn.addEventListener('click', () => {
		modal.classList.add('active');
		overlay.classList.add('active');
	});

	nope.addEventListener('click', () => {
		modal.classList.remove('active');
		overlay.classList.remove('active');
	});

	closeMe.addEventListener('click', () => {
		newModal.classList.remove('active');
		overlay.classList.remove('active');
	});

	yep.addEventListener('click', () => {
		modal.classList.remove('active');
		newModal.classList.add('active');
	});

	close.addEventListener('click', () => {
		newModal.classList.remove('active');
		modal.classList.remove('active');
		overlay.classList.remove('active');
	});

	document.addEventListener("click", (e) => {
		if (!e.target.closest(".modal") && !e.target.closest('.pulse')) {
			newModal.classList.remove('active');
			modal.classList.remove('active');
			overlay.classList.remove('active');
		}
	});
});