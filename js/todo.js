
const content = ["피할 수 없으면 즐겨라.",
                "삶이 있는 한 희망은 있다.",
                "말보다 실천이 중요하다.",
                "고통의 원인은 집착이다.",
                "항상 배고프고 겸손해라.",
                "내일은 내일의 태양이 뜬다."];
    text = document.querySelector("#PH");
    ty_int = "";
let type_index = 0;
    content_idx = 0;
    is_pause = false;

function typing() {
    if(!is_pause) {
        text.textContent += content[content_idx][type_index++]
        if (type_index+1 > content[content_idx].length) {
            stop_typing();
        }
    }
}

function start_typing() {
    is_pause = false;
    ty_int = setInterval(typing, 300);
}

function stop_typing() {
    is_pause = true;
    setTimeout(() => {
        content_idx = (content_idx + 1)%(content.length)
        text.textContent = "";
        type_index = 0;
        start_typing();
    }, 2500);
    clearInterval(ty_int);
}

start_typing();


var bar = new ldBar("#bar");
bar.set(100);

