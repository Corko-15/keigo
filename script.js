const texts = document.getElementById("textarea")
const tate = document.getElementById("tate");
const clear = document.getElementById("clear")
document.querySelectorAll(".btn").forEach(btn => {
    btn.addEventListener("click", function() {
        texts.value += this.textContent;
    });
});
tate.addEventListener("click", function() {
    texts.classList.toggle("tate");
});
clear.addEventListener("click", function() {
    texts.textContent = "";
});