/* Определяем класс slider_item */

const sliderMain = new Swiper(".slider_main", {
	freeMode: true,                  /* Позволяет листать без привязки к слайдам */
	centeredSlides: true,            /* Первый слайд - по центру */
	mousewheel: true,                /* воляет листать прокруткой мыши */
	parallax: true, 
	breakpoints: {
		0: {
			slidesPerView: 2.5,      /* Количество видимых слайдов */
			spaceBetween: 20         /* Расстояние между слайдами */
		},
		680: {
			slidesPerView: 3.5,
			spaceBetween: 60
		} 
	} 
})  


/* Фоновые слайды */

const sliderBg = new Swiper(".slider_bg", {           
	centeredSlides: true,            
	parallax: true, 
	spaceBetween: 60, 
	slidesPerView: 3.5 
})  


/* Связка двух слайдеров */

sliderMain.controller.control = sliderBg 


/* Функция открытия слайдов */

document.querySelectorAll(".slider_item").forEach(item => {
    item.addEventListener("click", event => {
       if (item.classList.toggle("opened")){
        document.addEventListener("click", (e) => {
             const withinBoundaries = e.composedPath().includes(item);
                if ( ! withinBoundaries ) {
                    item.classList.remove("opened");
                    }
                })
                    
            }            
})})
 

/* Анимация текста */

let desc = document.querySelector(".description") 
sliderMain.on("slideChange", e => {
	sliderMain.activeIndex > 0 ? desc.classList.add("hidden") : desc.classList.remove("hidden")
}) 



