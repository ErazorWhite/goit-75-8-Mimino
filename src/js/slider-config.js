function swiperSlider() {
    const teamMain = document.querySelectorAll('[data-slider="team-slider"]');
    //const heroSlider = document.querySelectorAll('[data-slider="hero-slider"]');
    if (teamMain) {
        teamMain.forEach(slider => {
            //
            let arrowLeft = slider.querySelector('.swiper-button-prev');
            let arrowRight = slider.querySelector('.swiper-button-next');
            //

            // let pagination = slider.querySelector('.swiper-pagination');
            swiper = new Swiper(slider.querySelector('.swiper'), {
                speed: 1500,
                //centeredSlides: true,
                // autoplay: {
                //     delay: 3000,
                //     disableOnInteraction: false,
                // },
                slidesPerView: 2,
                spaceBetween: 25,
                // pagination: {
                //     el: pagination,
                //     clickable: true,
                //     renderBullet: function (index, className) {
                //         return '<li class="' + className + '"></li>';
                //     },
                // },
                //
                navigation: {
                    nextEl: arrowRight,
                    prevEl: arrowLeft,
                },
                //
                on: {
                    transitionStart: function () {
                        let previousIndex = this.previousIndex;
                        let previousSlide = slider.getElementsByClassName('swiper-slide')[previousIndex];
                        if (previousSlide) {
                            setTimeout(function () {
                                previousSlide.classList.remove('is-play');
                            }, 1000);
                        }
                    },
                    transitionEnd: function () {
                        let activeIndex = this.activeIndex;
                        let activeSlide = slider.getElementsByClassName('swiper-slide')[activeIndex];
                        activeSlide.classList.add('is-play');
                    },
                },
                breakpoints: {
                    // when window width is >= 320px
                    320: {
                        slidesPerView: 1.7,
                        spaceBetween: 25
                    },
                    // when window width is >= 480px
                    1024: {
                        slidesPerView: 2,
                        spaceBetween: 40
                    },
                    // when window width is >= 640px
                    1280: {
                        slidesPerView: 2,
                        spaceBetween: 40
                    }
                }

            });
        });
    }
    // if (heroSlider) {
    //     heroSlider.forEach(slider => {
    //         //
    //         let arrowLeft = slider.querySelector('.swiper-button-prev');
    //         let arrowRight = slider.querySelector('.swiper-button-next');
    //         //

    //         let pagination = slider.querySelector('.swiper-pagination');
    //         swiper = new Swiper(slider.querySelector('.swiper'), {
    //             speed: 1500,
    //             //centeredSlides: true,
    //             // autoplay: {
    //             //     delay: 3000,
    //             //     disableOnInteraction: false,
    //             // },
    //             slidesPerView: 1,
    //             spaceBetween: 20,
    //             pagination: {
    //                 el: pagination,
    //                 clickable: true,
    //                 renderBullet: function (index, className) {
    //                     return '<li class="' + className + '"></li>';
    //                 },
    //             },
    //             //
    //             navigation: {
    //                 nextEl: arrowRight,
    //                 prevEl: arrowLeft,
    //             },
    //             //
    //             on: {
    //                 transitionStart: function () {
    //                     let previousIndex = this.previousIndex;
    //                     let previousSlide = slider.getElementsByClassName('swiper-slide')[previousIndex];
    //                     if (previousSlide) {
    //                         setTimeout(function () {
    //                             previousSlide.classList.remove('is-play');
    //                         }, 1000);
    //                     }
    //                 },
    //                 transitionEnd: function () {
    //                     let activeIndex = this.activeIndex;
    //                     let activeSlide = slider.getElementsByClassName('swiper-slide')[activeIndex];
    //                     activeSlide.classList.add('is-play');
    //                 },
    //             },
    //             breakpoints: {
    //                 // when window width is >= 320px
    //                 320: {
    //                     slidesPerView: 1,
    //                     spaceBetween: 20,
    //                 },
    //                 // when window width is >= 480px
    //                 768: {
    //                     slidesPerView: 2,
    //                     spaceBetween: 30
    //                 },
    //                 // when window width is >= 640px
    //                 1200: {
    //                     slidesPerView: 3,
    //                     spaceBetween: 40
    //                 }
    //             }

    //         });
    //     });
    // }
}
window.addEventListener('load', swiperSlider, false);