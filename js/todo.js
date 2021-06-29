
const content = ["피할 수 없으면 즐겨라.",
                "삶이 있는 한 희망은 있다.",
                "말보다 실천이 중요하다.",
                "고통의 원인은 집착이다.",
                "항상 배고프고 겸손해라.",
                "내일은 내일의 태양이 뜬다.",
                "겨울이 오면 봄이 멀지 않으리.",
                "나는 생각한다. 고로 존재한다."];
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

var add_window = document.querySelector(".add_bk");
    del_window = document.querySelector(".del_bk");

function open_add() {
    add_window.style.display = "block";
}

function close_add() {
    add_window.style.display = "none";
}

function open_del(id) {
    del_window.style.display = "block";
}

function close_del(id) {
    del_window.style.display = "none";
}

var del_but = document.querySelectorAll(".del_but");
    item = document.querySelectorAll(".items");
    done_but = document.querySelectorAll(".done_but");
    fin_but = document.querySelector(".done");
    add_but = document.querySelector(".add");
    menu_del_but = document.querySelector(".del");
    check_icon = document.querySelectorAll("#chk_icon");

function set_del() {
    for(var i=0; i<item.length; i++) {
        item[i].style.transform = "translateX(53px)";
        item[i].style.transitionDuration = "1s";
        del_but[i].style.display = "block";
    }
    
    for(var j=0; j<done_but.length; j++) {
        done_but[j].style.display = "none";
    }

    for(var k=0; k<check_icon.length; k++) {
        check_icon[k].style.transform = "translateX(53px)";
        check_icon[k].style.transitionDuration = "1s";
    }

    fin_but.style.display = "flex";
    add_but.style.display = "none";
    menu_del_but.style.display = "none";
}

function fin_del() {
    for (var i = 0; i < item.length; i++) {
        item[i].style.transform = "";
        del_but[i].style.display = "none";
    }

    for (var j = 0; j < done_but.length; j++) {
        done_but[j].style.display = "block";
    }

    for (var k = 0; k < check_icon.length; k++) {
        check_icon[k].style.transform = "";
        check_icon[k].style.transitionDuration = "1s";
    }

    fin_but.style.display = "none";
    add_but.style.display = "flex";
    menu_del_but.style.display = "flex";
}

function done(id) {
    console.log("done! : " + String(id));
}