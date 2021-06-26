var pic_element = document.querySelector(".pic_screen");
    pic_width = document.querySelector(".pic_img").width;
    idx = 0;
    pic_len = 0;

// 배너 수동 교체
function mv_pic(id){
    idx = id;
    ch_pic(idx);
}

// 배너 교체
function ch_pic(idx_pic){
    pic_len = (idx_pic) * pic_width;
    pic_element.style.transform = "translateX(-"+pic_len+"px)";
    pic_element.style.transitionDuration = "1s";
}

// 새 탭 열기
function openInNewTab(url) {
    var win = window.open(url, '_blank');
    win.focus();
}

// 날짜 추출 후, 하이라이팅
var now_day = Date().slice(0, 3);
var td_element = document.getElementById(now_day);
td_element.classList.add("today");

// 3초 간격 자동 배너 교체
setInterval(() => ch_pic((idx++)%3), 4000);
