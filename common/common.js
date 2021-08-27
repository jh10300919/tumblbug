$(() => {

    // 햄버거 메뉴 토글
    $('.ham').click(function () {
        $('header,.gnb,.search,.mypage,.logo').toggleClass('on')

        $('.gnb>li').click(function () {
            $(this).children('.sub').slideToggle()
        })
    })

    // 강사수정
    // resize 되었을 때만 실행되는 부분을 보완
    $(window).on('resize', function () {
        setResponsive();
    });
    $(window).on('load', function () {
        setResponsive();
    });
    function setResponsive() {
        if ($(window).widh() < 1130) {

            $('.sub').slideUp() //초기값

            $('.gnb>li>a').click(function () {
                if ($(this).parent().attr('class') != 'on') {
                    $(this).next().slideToggle();
                    $(".gnb>li").removeClass("on");
                    $(this).parent().addClass("on");
                } else {
                    $(this).next().slideToggle();
                    $(this).parent().removeClass("on");
                }
            })
        } else if ($(window).width() >= 1129) {
            $('.sub').off('slideToggle'); // 잘 안되는 부분 !!
        }
    }
    // 아코디언 메뉴. CSS 수정도 필요하다. height:0 이 아닌 display:none으로.
    //접힌상태를 초기값으로(안하면 누르지않아도 메뉴가 다 내려와있는상태로 보임)
    //클릭한 부모의 class가 on이 아니면 

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