document.addEventListener('DOMContentLoaded', function () {
	const scroller = document.querySelector('.scroller');
	let active = false;

	scroller.addEventListener('mousedown', function () {
		active = true;
		scroller.classList.add('scrolling');
	});

	document.body.addEventListener('mouseup', function () {
		active = false;
		scroller.classList.remove('scrolling');
	});

	document.body.addEventListener('mouseleave', function () {
		active = false;
		scroller.classList.remove('scrolling');
	});

	document.body.addEventListener('mousemove', function (e) {
		if (!active) return;
		let x = e.pageX;
		x -= document.querySelector('.afterBefore').getBoundingClientRect().left;
		scrollIt(x);
	});

	function scrollIt(x) {
		let transform = Math.max(0, (Math.min(x, document.querySelector('.afterBefore').offsetWidth)));
		document.querySelector('.after').style.width = transform + "px";
		scroller.style.left = transform - 25 + "px";
	}

	scrollIt(150);

	scroller.addEventListener('touchstart', function () {
		active = true;
		scroller.classList.add('scrolling');
	});

	document.body.addEventListener('touchend', function () {
		active = false;
		scroller.classList.remove('scrolling');
	});

	document.body.addEventListener('touchcancel', function () {
		active = false;
		scroller.classList.remove('scrolling');
	});

	document.body.addEventListener('touchmove', function (e) {
		if (!active) return;
		let evt = (typeof e.originalEvent === 'undefined') ? e : e.originalEvent;
		var touch = evt.touches[0] || evt.changedTouches[0];
		let x = touch.pageX;
		x -= document.querySelector('.afterBefore').getBoundingClientRect().left;
		scrollIt(x);
	});
});