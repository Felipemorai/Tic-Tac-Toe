/* Selecting all elements */

const selectBox = document.querySelector(".select-box"),
selectXBtn = selectBox.querySelector(".playerX"),
selectOBtn = selectBox.querySelector(".playerO");

window.onload = () => {
    selectXBtn.onclick = () => {
        selectBox.classList.add("hide");
    }
}