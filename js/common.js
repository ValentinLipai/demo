$(function(){
	var taxonomySlider = $('.taxonomy-slider');

	if (taxonomySlider.length){
		taxonomySlider.slick({
			slidesToShow: 2,
			centerMode: true,
			centerPadding: '60px',
			focusOnSelect: true,
			initialSlide: 4,
			prevArrow: '.taxonomy-slider__arrow-left',
			nextArrow: '.taxonomy-slider__arrow-right'
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
	




	$(window).on('scroll', function(){
		var fromTop   = $(window).scrollTop();
		
		toplineStyleControl(fromTop);

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
			popupTextBlocks           = $('.popup-text-blocks'),
			popupCloseBtn             = $('.close-popup'),
			body                      = $('body');

		// узнаем ширину скроллбара
		var clientWidth      = $(window).innerWidth(),
		winWidth         = $(window).outerWidth(),
		scrollBarWidth   = parseFloat( winWidth - clientWidth);
				// body.css('padding-right', scrollBarWidth).css('overflow', 'hidden');  // Пример 
		// управление модальными окнами

		popupCloseBtn.click(function(){
			popupForm.fadeOut(300);
			setTimeout(function(){
				body.css('padding-right', '0').css('overflow-x', 'hidden').css('overflow-y', 'auto');
			}, 300);
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
				$('body,html').animate({scrollTop: top}, 1500);
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
