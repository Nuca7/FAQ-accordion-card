let buttons = document.querySelectorAll(".btn");
let contents = document.querySelectorAll(".btnContent");

buttons.forEach(button => button.addEventListener("click", selectButton));


let previousId = "";

function selectButton() {
    reset();
    
    if(previousId !== this.id) {
        openBtn(this);
        previousId = this.id;
    } else {
        previousId = "";
    }
}

function openBtn(btn) {
    let content = document.querySelector(`#${btn.id}Content`);
    let img = document.querySelector(`#${btn.id}`).querySelector(".arrow");

    content.classList.add("show");
    btn.classList.add("textDecoration");
    img.classList.add("rotate");
}

function reset() {
    if(previousId) {
        closeBtnContent();
        removeRotate();
        removeTextDecoration();
    }
}
function closeBtnContent() {
    contents.forEach(content => content.classList.remove("show"));
}
function removeRotate() {
    let img = document.querySelector(".rotate");
    img.classList.remove("rotate");
}
function removeTextDecoration() {
    let text = document.querySelector(".textDecoration");
    text.classList.remove("textDecoration");
}