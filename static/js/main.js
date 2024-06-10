let popups = document.getElementsByClassName("popup");
console.log(popups);

for(let i = 0; i < switches.length; i++){
    switches[i].onclick = function(){
        for(let i = 0; i < switches.length; i++){
            switches[i].style.display = "none";
        }
        switch(this.dataset.switch){
            case "lightblue":
                document.getElementById("js--blue").style.display = "grid";
                break;
            case "yellow":
                document.getElementById("js--yellow").style.display = "grid";
                break;
            case "gray":
                document.getElementById("js--gray").style.display = "grid";
                break;
            case "pink":
                document.getElementById("js--pink").style.display = "grid";
                break; 
        }
    }
}

let closeButtons = document.getElementsByClassName("productModal__close");
for(let i = 0; i < closeButtons.length; i++){
    closeButtons[i].onclick = function(){
        this.parentNode.style.display = "none";
        for(let i = 0; i < switches.length; i++){
            switches[i].style.display = "block";
        }
    }
}
