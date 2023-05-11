// slider
const sliderImg = document.querySelector('.img-slider__wrap');
const sliderText = document.querySelector('.text-slider__wrap');

let swiperSliderImg = new Swiper(sliderImg, {
	spaceBetween: 10,
	loop: false,
});

let swiperSliderText = new Swiper(sliderText, {
	spaceBetween: 200,
	loop: false,
	thumbs: {
		swiper: swiperSliderImg,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});

// swiperSliderImg.on('slideChange', function () {
// 	swiperSliderText.slideTo(swiperSliderImg.realIndex, 0);
// });

// swiperSliderText.on('slideChange', function () {
// 	swiperSliderImg.slideTo(swiperSliderText.realIndex, 0);
// });
// slider