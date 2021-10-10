/* Selecting all elements */

const selectBox = document.querySelector(".select-box"),
selectXBtn = selectBox.querySelector(".playerX"),
selectOBtn = selectBox.querySelector(".playerO"),
playBoard = document.querySelector(".play-board"),
allBox = document.querySelectorAll("section span"),
players = document.querySelector(".players");

/* Window loaded */
window.onload = () => {
    for (let i = 0; i < allBox.length; i++) {
        allBox[i].setAttribute("onclick", "clickedBox(this)");
    }

    selectXBtn.onclick = () => {
        selectBox.classList.add("hide");
        playBoard.classList.add("show");
    }
    selectOBtn.onclick = () => {
        selectBox.classList.add("hide");
        playBoard.classList.add("show");
        players.setAttribute("class", "players active player");
    }
}

/* Fontawesome icons */
let playerXIcon = "fas fa-times";
let playerOIcon = "far fa-circle";
let playerSign = "X";

/* Player icons function*/
function clickedBox(element) {
    if(players.classList.contains("player")) {
        playerSign = "O";
        element.innerHTML = `<i class="${playerOIcon}"></i>`;
        players.classList.add("active");
    }
    else {
        element.innerHTML = `<i class="${playerXIcon}"></i>`;
        players.classList.add("active");
        
    }

    element.style.pointerEvents = "none";
    let randomDelayTime = ((Math.random() * 1000) + 200).toFixed();
    setTimeout(() => {
        bot();
    }, randomDelayTime);
}

/* Bot click function */
function bot() {
    let array = [];
    for (let i = 0; i < allBox.length; i++) {
        if(allBox[i].childElementCount == 0) {
            array.push(i);
            /* console.log(i + " " + "has no children"); */
        }
    }
    let randomBox = array[Math.floor(Math.random() * array.length)];
    if(array.length > 0) {
        if(players.classList.contains("player")) {
            allBox[randomBox].innerHTML = `<i class="${playerXIcon}"></i>`;
            players.classList.remove("active");
        }
        else {
            allBox[randomBox].innerHTML = `<i class="${playerOIcon}"></i>`;
            players.classList.remove("active");
        }
    }
    allBox[randomBox].style.pointerEvents = "none";
}