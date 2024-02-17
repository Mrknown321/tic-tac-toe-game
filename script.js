let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".reset");
let value =true;
let winnertext = document.querySelector(".winner-text");
let scoreX = document.querySelector("#box1");
let scoreO = document.querySelector("#box2");
let new_game = document.querySelector(".newgame");
let user1 = 0;// for score board
let user2 = 0;//for score board
let winpoint = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];


// this is used for making winner name on text
let seewinner =(winner) => {
    winnertext.style.color = "white";
    winnertext.innerText = `Congratulation , The winner is ${winner}`;
    winnertext.classList.remove("hide");
   
}
// this is used for rest all the game -----------------------------------------------------------------
let reset =() => {
    allbuttonenable();
    value = true;
    winnertext.classList.add("hide");
}
resetbtn.addEventListener("click",reset)
// New button for reset complete game
let newgame = () => {
    allbuttonenable();
    value = true;
    winnertext.classList.add("hide");
    scoreX.innerText= "";
    scoreO.innerText= "";
    user1 = 0;
let user2 = 0;
}
new_game.addEventListener("click",newgame)
//making all boes disable
let allbuttondisable =() => {
    for(let box of boxes){
        box.disabled = true;
    }
}

//making all boxes enable
let allbuttonenable =() => {
        for(let box of boxes){
            box.disabled = false;
            box.innerText = "";
        }
}
// game main part of O and x 
boxes.forEach((box) => {
        box.addEventListener("click", () => {
            if (value === true){
                box.innerText = "X";
                value = false;
            }else {
                box.innerText = "O";
                value = true;
            }
            box.disabled = true;
           checkwinner();
        });
    }
)
// funtion for scorenh board

let score =(sc) => {
    
    if(sc === "X"){
        
        user1++;
         scoreX.innerText= user1;
         
    }else {
        user2++;
        scoreO.innerText = user2;
    }
}
// funtion for limits of score board
let realwinner = () =>{
    if(user1 === 3){
        let i = confirm("Congrates , X won the Game . do you want to resatart");
        if(i){
            newgame();
        }
    }
    if(user2 === 3){
        let i = confirm("Congrates , O won the Game . do you want to resatart");
        if(i){
            newgame();
        }
    }
}


// used to check the winners and reset the game
    const checkwinner = () => {
        for(let i of winpoint){
          let position1 = boxes[i[0]].innerText;
          let position2 = boxes[i[1]].innerText;
          let position3 = boxes[i[2]].innerText;
          
            if(position1 != "" && position2 != "" && position3 != "" ){
                if (position1 === position2 && position2 === position3){
                    console.log("winner" ,position1);
                    allbuttondisable();
                    score(position1);
                    reset();
                    seewinner(position1);
                    realwinner();
                }
            }   
        }
        
        }

