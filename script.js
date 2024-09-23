let gameSeq = [];
let userSeq = [];
let btns = ["yellow", "red", "purple", "green"];

let started = false;
let level = 0;


let h2 = document.querySelector("h2");


document.addEventListener("keypress", function () {
    if (started == false) {      //only for one time to start the game
        console.log("Game is started");
        started = true;

        levelUp();
    }
});


function gameFlash(btn) { 
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash"); //time for flashing the button
    }, 250);
}

function userFlash(btn) {
    btn.classList.add("userFlash");
    setTimeout(function () {
        btn.classList.remove("userFlash"); //time for flashing the button
    }, 250);
}

function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random() * 3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randBtn);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);
}

function checkAns(idx){
    if(userSeq[idx] == gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp , 1000);
        }
    }else{
        h2.innerHTML = `Game over! Your score was <b>${level}</b> <br> Press any key to start,`; //here we add a score display and game over statement
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        } , 150  );
        reset();
    }
}

function btnPress(){
    // console.log(this); for printing the buttons 
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click" , btnPress);
}

function reset(){
    started =false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}
