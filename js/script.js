window.addEventListener('load', function () {
	let play = document.querySelector('.text__button')
	let window = document.querySelector('.window')
	let rules = document.querySelector('.bot__rules')
	let close = document.querySelector('.window__close')
	new SimpleBar(document.querySelector('.window__wrapper'),
		{
			autoHide: false,
			scrollbarMinSize: 60
		})

	play.addEventListener('click', function () {
		console.log('Button clicked')
	})

	rules.addEventListener('click', function () {
		document.body.style.overflow = "hidden"
		window.classList.add('active')
	})

	close.addEventListener('click', function () {
		window.classList.remove('active')
		document.body.style.overflow = "auto"
	})


})
