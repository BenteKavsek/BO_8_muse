const popups = document.getElementById("parent__popup");
const brief = document.getElementById("brief");
console.log(brief)

const schip_button = document.getElementById("schip_button");
const schip_card = document.getElementById("schip_wapen");

const amsterdam_button = document.getElementById("amsterdam_button");
const amsterdam_card = document.getElementById("amsterdam");

const mau_button = document.getElementById("mauritius_button");
const mau_card = document.getElementById("mau_card");

const eiland_button = document.getElementById("eiland_button");
const eiland_card = document.getElementById("eiland_card");

const wilden_button = document.getElementById("wilden_button");
const wilden_card = document.getElementById("wilden_card");

const gulden_button = document.getElementById("gulden_button");
const gulden_card = document.getElementById("gulden_card");

const lading_button = document.getElementById("lading_button");
const lading_card = document.getElementById("lading_card");

const ossenhuid_button = document.getElementById("ossenhuid_button");
const ossenhuid_card = document.getElementById("ossenhuid_card");


function clearall() {
    schip_card.style.display = ""
    amsterdam_card.style.display = ""
    mau_card.style.display = ""
    eiland_card.style.display = ""
    wilden_card.style.display = ""
    gulden_card.style.display = ""
    lading_card.style.display = ""
    ossenhuid_card.style.display = ""
    brief.style.opacity = "1";
};

clearall();

schip_button.addEventListener("click", function () {
    clearall();
    brief.style.opacity = "0.75";
    schip_card.style.display = "flex";
})

amsterdam_button.addEventListener("click", function () {
    clearall()
    brief.style.opacity = "0.75";
    amsterdam_card.style.display = "flex";
})

mau_button.addEventListener("click", function () {
    clearall()
    brief.style.opacity = "0.75";
    mau_card.style.display = "flex";
})

eiland_button.addEventListener("click", function () {
    clearall()
    brief.style.opacity = "0.75";
    eiland_card.style.display = "flex";
})

wilden_button.addEventListener("click", function () {
    clearall()
    brief.style.opacity = "0.75";
    wilden_card.style.display = "flex";
})

gulden_button.addEventListener("click", function () {
    clearall()
    brief.style.opacity = "0.75";
    gulden_card.style.display = "flex";
})

lading_button.addEventListener("click", function () {
    clearall()
    brief.style.opacity = "0.75";
    lading_card.style.display = "flex";
})

ossenhuid_button.addEventListener("click", function () {
    clearall()
    brief.style.opacity = "0.75";
    ossenhuid_card.style.display = "flex";
})



const closeButton = document.getElementsByClassName("close-button");
console.log(closeButton);

const closeButtons = document.getElementsByClassName("close-button");

for (let i = 0; i < closeButtons.length; i++) {
    closeButtons[i].addEventListener("click", function () {
        clearall();
    });
}