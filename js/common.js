


// узнаем ширину скроллбара
var clientWidth      = $(window).innerWidth(),
		winWidth         = $(window).outerWidth(),
		scrollBarWidth   = parseFloat( winWidth - clientWidth),
		toplineHeight    = $('.topline').height();
		// body.css('padding-right', scrollBarWidth).css('overflow', 'hidden');  // Пример 
// управление модальными окнами



$(function(){
	$('.preorder').parallax({imageSrc: '../img/preOrder/preOrder-bg.jpg'});
});
$(function(){
	var taxonomySlider = $('.taxonomy-slider');
	var factsSlider    = $('.facts-items-wrapper');

	if (taxonomySlider.length){
		taxonomySlider.slick({
			slidesToShow: 2,
			centerMode: true,
			centerPadding: '60px',
			focusOnSelect: true,
			initialSlide: 4,
			prevArrow: '.taxonomy-slider__arrow-left',
			nextArrow: '.taxonomy-slider__arrow-right',
			responsive: 
				[
			    {
			      breakpoint: 768,
			      settings: {
			        slidesToShow: 1,
			        slidesToScroll: 1,
			        infinite: true,
			        centerMode: false,
			        centerPadding: '0px',
			        focusOnSelect: false,
			        initialSlide: 1
			      }
			    }
			  ]
		});
	}

	if ( factsSlider.length && winWidth < 640){
		factsSlider.slick({
			infinite: true,
			dots: true,
			arrows: false,
			autoplay: true,
			speed: 1000
		});
	}



});


$(function(){
	var windowHeight = $(window).height();
	var scrollrange  = windowHeight / 10;


	// video controls variables start
	var video            = $('#videoSection-video');
	var videoScrollTop   = video.offset().top; 
	var startVideoRange  = windowHeight - (windowHeight / 5);
	// video controls variables end
	// topline scrolling variables start
	var topline      = $('.topline');
	// topline scrolling variables end

	function toplineStyleControl(top){
		if ( top > scrollrange && topline.hasClass('topline__scrolling') == false) 
		{
			topline.addClass('topline__scrolling');
		} 
		else if (top <= scrollrange && topline.hasClass('topline__scrolling') == true) 
		{
			topline.removeClass('topline__scrolling');
		}
	};

	function startVideo(){
		if (video.hasClass('playing') == false) 
		{
			video.addClass('playing');
			video.get(0).play();
		}
	}


	var player = document.getElementById('videoSection-video');

	player.onended = function(){
		player.load();
	}
	




	$(window).scroll( function(){
		alert(videoScrollTop);
		var fromTop   = $(window).scrollTop();
		
		toplineStyleControl(fromTop);
		alert(videoScrollTop + ' + ' + fromTop);

		if ( videoScrollTop - fromTop  <= startVideoRange && videoScrollTop - fromTop > 0 )
		{
			startVideo();
		}
	});


	
});


$(function(){
// header slider start

var headerSliderWrapper   = $('#header-slider-wrapper');
var switchTime = 2500;
var changeTime = switchTime * 2;

function showNextSlide(){

	var currsentSlide = $('.header-bg__img.active');

	if ( headerSliderWrapper.find('.header-bg__img:last').hasClass('active') ){
		currsentSlide.fadeOut(switchTime);
		currsentSlide.removeClass('active');
		headerSliderWrapper.find('.header-bg__img:first').addClass('active').fadeIn(switchTime);
	} else {
		currsentSlide.fadeOut(switchTime).removeClass('active');
		currsentSlide.next().addClass('active').fadeIn(switchTime);
	}

}

function headerBgSlider(){
	setInterval(showNextSlide, changeTime);
};




$(document).ready(function() {
				// headerSliderWrapper.find('.header-bg__img:first').addClass('active').fadeIn();
				headerBgSlider();
			});

	// header slider end
});

$(function() {
		// mask tel
		var telInp = $('input[name="tel"]');

		telInp.each(function(){
			$(this).mask("+375 (99) 999-99-99");

			$(this).click(function(){
				if($(this).val() == '+375 (__) ___-__-__'){
					$(this).setCursorPosition(6);
				}
			});
		});	

	// set cursore position
	$.fn.setCursorPosition = function(pos) {
		if ($(this).get(0).setSelectionRange) {
			$(this).get(0).setSelectionRange(pos, pos);
		} else if ($(this).get(0).createTextRange) {
			var range = $(this).get(0).createTextRange();

			range.collapse(true);
			range.moveEnd('character', pos);
			range.moveStart('character', pos);
			range.select();
		}
	};



			// popup start
			var popupForm                 = $('.popup-form-block'),
					popupFormBtn              = $('#popup-form-block-btn'),
					popupCloseBtn             = $('.close-popup'),
					body                      = $('body'),
					openPopupFormBtns         = $('.open-popup-form'),
					popupformSubject         	= $('#popup-form-subject');
					formSubject               = $('#form-subject');


			popupCloseBtn.click(function(){
				popupForm.fadeOut(300);
				setTimeout(function(){
					body.css('padding-right', '0').css('overflow-x', 'hidden').css('overflow-y', 'auto');
					$('.topline').css('padding-right', 0);
				}, 300);
			});

			openPopupFormBtns.click(function(){
				var subject = $(this).data('form-subject');
				var btnText = $(this).text();
				popupformSubject.val(subject);
				popupFormBtn.text(btnText);
				popupForm.fadeIn(300);
				body.css('padding-right', scrollBarWidth).css('overflow', 'hidden');
				$('.topline').css('padding-right', scrollBarWidth);
			});












		// smooth scroll
		$("a.scroll-link").on("click", function (event) {
				//отменяем стандартную обработку нажатия по ссылке
				event.preventDefault();

				//забираем идентификатор бока с атрибута href
				var id  = $(this).attr('href'),

				//узнаем высоту от начала страницы до блока на который ссылается якорь
				top = $(id).offset().top;
				
				//анимируем переход на расстояние - top за 1500 мс
				$('body,html').animate({scrollTop: top - toplineHeight}, 1500);
			});


			//E-mail Ajax Send
			//Documentation & Example: https://github.com/agragregra/uniMail
			// $("form").submit(function() { //Change
			// 	var th = $(this);
			// 	$.ajax({
			// 		type: "POST",
			// 		url: "mail.php", //Change
			// 		data: th.serialize()
			// 	}).done(function() {
			// 		alert("Thank you!");
			// 		setTimeout(function() {
			// 			// Done Functions
			// 			th.trigger("reset");
			// 		}, 1000);
			// 	});
			// 	return false;
			// });



		});

var mapCenter;
var markerCenter;
var iconSize     = [90, 130];
var iconoOffset  = [-45, -140];

mapCenter = [53.905867, 27.765155];
markerCenter = [53.904565, 27.699570];


switch(true){
	case winWidth < 768:
		mapCenter = markerCenter;
		iconSize     = [60, 90];
		iconoOffset  = [-30, -95];
		break;

	case winWidth < 1200:
		mapCenter = [53.905481, 27.734149];
		break;
	
	case winWidth < 1400:
		mapCenter = [53.906089, 27.756293];
		iconSize     = [80, 110];
		iconoOffset  = [-40, -120];
		break;

	default:
		mapCenter = [53.905867, 27.765155];
		markerCenter = [53.904565, 27.699570];
		iconSize     = [90, 130];
		iconoOffset  = [-45, -140];
}


ymaps.ready(function() {
    var myMap = new ymaps.Map('map', {
            center: mapCenter,
            zoom: 13
        }, {
            searchControlProvider: 'yandex#search'
        }),
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass('<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'),
        myPlacemark = new ymaps.Placemark(markerCenter, {
            hintContent: 'Silver Pony',
            balloonContent: 'г. Минск, ул. Казинца 11а'
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'img/map/marker.png',
            iconImageSize: iconSize,
            iconImageOffset: iconoOffset
        })
    myMap.geoObjects.add(myPlacemark);
    myMap.behaviors.disable('scrollZoom');
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        myMap.behaviors.disable('drag');
    }
});



var wow = new WOW(
  {
    boxClass:     'wow',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       140,          // distance to the element when triggering the animation (default is 0)
    mobile:       true,       // trigger animations on mobile devices (default is true)
    live:         true,       // act on asynchronously loaded content (default is true)
    callback:     function(box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null,    // optional scroll container selector, otherwise use window,
    resetAnimation: true,     // reset animation on end (default is true)
  }
);
wow.init();


$(document).ready(function(){

	var mMenu             = $('.mobile-menu__wrapper'),
			ham               = $('.topline-mobile-hamburger'),
			mMenuScrollLink		= $('.mobile-menu__link.scroll-link');


	ham.click(function(){
		mMenu.toggleClass('open');
		ham.toggleClass('open');
	});

	mMenuScrollLink.click(function(){
		mMenu.toggleClass('open');
		ham.toggleClass('open');
	});


});