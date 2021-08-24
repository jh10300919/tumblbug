$(() => {

    //메인 슬라이드
    var MainSwiper = new Swiper(".main_swiper .mySwiper1", {
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        
    });

    //서브 슬라이드
    var SubSwiper = new Swiper(".sub_swiper .mySwiper2", {
        loop: true,
        effect: "fade",
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            type: "fraction",
          },
    });

    MainSwiper.controller.control = SubSwiper;
    SubSwiper.controller.control = MainSwiper;

    // sec2 탭
    $('.sec2_inner>p').mouseenter(function () {
        $('.sec2_inner>p').removeClass('on')
        $('.sec2_inner figure').removeClass('on')
        $(this).addClass('on')
        $(this).next().addClass('on')
    })

    //카테고리 슬라이드
    var swiper3 = new Swiper(".mySwiper3", {
        slidesPerView: 7,
        spaceBetween: 30,
        slidesPerGroup: 7,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    //sec4 현재 시각
    let timer = setInterval(() => {
        let now = new Date();
        let hr = now.getHours();
        let min = now.getMinutes();
        let sec = now.getSeconds();
        console.log(sec);

        if (hr >= 10) {
            hNum = hr;
        } else {
            hNum = '0' + hr;
        }
        if (min >= 10) {
            mNum = min;
        } else {
            mNum = '0' + min;
        }
        if (sec >= 10) {
            sNum = sec;
        } else {
            sNum = '0' + sec;
        }

        $('#hNum').text(hNum);
        $('#mNum').text(mNum);

    }, 1000)


})