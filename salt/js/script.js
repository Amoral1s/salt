document.addEventListener('DOMContentLoaded', () => { //start









	$('.moar').on('click', function() {
		if ($(this).prev().hasClass('open-text')) {
			$(this).text('читать полностью');
			$(this).prev().removeClass('open-text');
		} else {
			$(this).text('свернуть');
			$(this).prev().addClass('open-text');
		}
	})



	$('.call-popup').on('click', function() {
		$('.popup-price').fadeIn(300);
		$('.overlay').fadeIn(300);
	});
	$('.overlay').on('click', function() {
		$('.popup').fadeOut(300);
		$(this).fadeOut(300);
	});
	$('.close').on('click', function() {
		$('.popup').fadeOut(300);
		$('.overlay').fadeOut(300);
	});

	$('.slider').slick({
		dots: false,
		infinite: true,
		speed: 300,
		slidesToShow: 4,
		centerMode: true,
		centerPadding: '60px',
		slidesToScroll: 1,
		arrows: true,
		responsive: [
			{
				breakpoint: 1245,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					centerMode: false

				}
			},
			{
				breakpoint: 578,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					centerMode: true,
					centerPadding: '20px'

				}
			}
			// You can unslick at a given breakpoint now by adding:
			// settings: "unslick"
			// instead of a settings object
		]
	});
	$('.slider2').slick({
		dots: false,
		infinite: true,
		speed: 300,
		slidesToShow: 3,
		centerMode: true,
		centerPadding: '60px',
		slidesToScroll: 1,
		arrows: true,
		responsive: [
			{
				breakpoint: 1245,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					centerMode: false

				}
			},
			{
				breakpoint: 578,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					centerMode: true,
					centerPadding: '20px'

				}
			}
			// You can unslick at a given breakpoint now by adding:
			// settings: "unslick"
			// instead of a settings object
		]
	});

	

function testWebP(callback) {
	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
	if (support == true) {
		document.querySelector('html').classList.add('_webp');
	} else {
		document.querySelector('html').classList.add('_no-webp');
	}
}); // img >> webp html

$('.mob-header .burger').on('click', function() {
	$('.mob-menu').slideDown(200);
});
$('.mob-menu .closes').on('click', function() {
	$('.mob-menu').slideUp(200);
});

}); //end