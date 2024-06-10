const popups = document.getElementById("parent__popup");

const schip_button = document.getElementById("schip_button");
const schip_card = document.getElementById("schip-t-wapen");
const amsterdam_button = document.getElementById("amsterdam__button");
const amsterdam_card = document.getElementById("amsterdam");
const mau__button = document.getElementById("mauritius");
const mau = document.getElementById("rivier-mauritius");

function clearall() {

}

schip_button.addEventListener("click", function () {
    console.log("foo");
    popups.style.display = "flex"
    schip_card.style.display = "flex"
    amsterdam.style.display = ""
    mau.style.display = ""
})


amsterdam_button.addEventListener("click", function () {
    console.log("foo1");
    popups.style.display = "flex"
    amsterdam_card.style.display = "flex"
    schip_card.style.display = ""
    mau.style.display = ""
    //Hier moet volgorde display nog goed

})


mau__button.addEventListener("click", function () {
    console.log("foo2");
    popups.style.display = "flex"
    mau.style.display = "flex"
    amsterdam.style.display = ""
    schip__card.style.display = ""
})


