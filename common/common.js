$(() => {
    // 강사수정
    // resize 되었을 때만 실행되는 부분을 보완
    $(window).on('resize', function () {
        setResponsive();
    });

    $(window).on('load', function () {
        setResponsive();
    });

    // 햄버거 메뉴
    function setResponsive() {
        if ($(window).width() < 1130) {
            $('.ham').css('display', 'block')
            $('.sub').slideUp()
        } else if ($(window).width() >= 1131) {
            $('.ham').css('display', 'none')
        }
    }

    $('.ham').click(function () {
        $('header,.gnb,.search,.mypage,.logo').toggleClass('on')

        $('html, body').animate({
            scrollTop: 0
        }, 0);
        return false;
    })



    $('.top_button').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 400);
        return false;
    });


    // 강사수정
    $('.gnb>li>a').click(function () {
        if ($(this).parent().attr('class') != 'on') {
            $('.sub').slideUp()
            $(this).next().slideToggle();
            $(".gnb>li").removeClass("on");
            $(this).parent().addClass("on");
        } else {
            $(this).next().slideToggle();
            $(this).parent().removeClass("on");
        }
    })

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
            nextEl: ".next1",
            prevEl: ".prev1",
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
        slidesPerView: 4,
        slidesPerGroup: 4,
        spaceBetween: 30,
        loop: true,
        loopFillGroupWithBlank: true,
        navigation: {
            nextEl: ".next2",
            prevEl: ".prev2",
        },
        breakpoints: {
            1130: {
                slidesPerView: 7,
                slidesPerGroup: 7,
            },
        }
    })

    //sec4 현재 시각
    let timer = setInterval(() => {
        let now = new Date();
        let hr = now.getHours();
        let min = now.getMinutes();
        let sec = now.getSeconds();
        // console.log(sec);

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