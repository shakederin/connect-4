class View{
    constructor(){
        this.playEvent = new Event();
    }  
    
    createBoard(){
        for(let i = 0; i<42; i++){
            const newDiv = this.createElement("div", "square");
            newDiv.addEventListener("click", () => this.playEvent.trigger(i))
            this.getElement("#root").append(newDiv);
        }
    }
        
    declareWinner(winner){
        alert(`${winner} won!`)
    }

    declareDraw(){
        alert("Its a Draw!")
    }


    changeCellColor(cell, row, color){
       const cells = document.getElementsByClassName("square"); 
       console.log("cell",cell);
       console.log("row", (row)%7);
       console.log(color);
       if(color ==="red"){
            document.getElementById("redPlayer").style.backgroundImage = "url(``)";
            cells[cell].style.backgroundImage = "url('https://i.colnect.net/f/838/429/Goldstar.jpg')";
            cells[cell].style.backgroundRepeat = "no-repeat";
            cells[cell].style.backgroundSize = "contain";
            cells[cell].style.backgroundPosition = "center";
            cells[cell].style.transform = 'rotate(180deg)';
            document.getElementById("yellowPlayer").style.backgroundImage = "url('https://m.media-amazon.com/images/I/61afkPlegpL._AC_SX466_.jpg')";
       }
       if(color ==="yellow"){
            document.getElementById("yellowPlayer").style.backgroundImage = "url(``)";
            cells[cell].style.backgroundImage = "url('https://m.media-amazon.com/images/I/61afkPlegpL._AC_SX466_.jpg')";
            cells[cell].style.backgroundRepeat = "no-repeat";
            cells[cell].style.backgroundSize = "contain";
            cells[cell].style.backgroundPosition = "center";
            cells[cell].style.transform = 'rotate(180deg)';
            document.getElementById("redPlayer").style.backgroundImage = "url('https://i.colnect.net/f/838/429/Goldstar.jpg')";
        }
    }

    createElement(tag, className) {
        const element = document.createElement(tag);
        if (className) element.classList.add(className);
        return element;
    }
    
    getElement(selector) {
        const element = document.querySelector(selector);
        return element;
    }
}

