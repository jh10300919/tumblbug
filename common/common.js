$(() => {
    
    //메인 슬라이드
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            type: "fraction",
        },
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
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