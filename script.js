console.log("Welcome to tic tac toe")

let music = new Audio("Still Rollin.mp3")
let audioTurn = new Audio("ting.mp3")
let audioGameOver = new Audio("gameover.mp3")

let turn = 'X';
let gameOver = false;

//function to change the turn
const changeturn = ()=>{
    return turn==="X"? "0":"X"
}

//function to check for a win
const checkWin = () => {

    let boxtexts = document.getElementsByClassName('boxtext');

    let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ];
    wins.forEach(e =>{
        if( (boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[2]].innerText === boxtexts[e[1]].innerText) &&  (boxtexts[e[0]].innerText !==""))
        {
            document.querySelector('.info').innerText =  boxtexts[e[0]].innerText + " won."
            gameOver = true
            // audioGameOver.play();
            document.querySelector('.gif').getElementsByTagName('img')[0].style.width = "200px"
        }
    })

}

//Game Logic
// music.play();
let boxes = document.getElementsByClassName("box");
let boxesArray = Array.from(boxes);

boxesArray.forEach(element =>{
    let boxText = element.querySelector('.boxtext');
    element.addEventListener('click', ()=>{
        if(boxText.innerText === '')
        {
            boxText.innerText = turn;
            turn = changeturn();
            audioTurn.play();
            checkWin();
            if(!gameOver)
            document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
        }
    })
})


reset.addEventListener('click', ()=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element =>{
        element.innerText = ""
    });
    turn = "X";
    gameOver = false;
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    document.querySelector('.gif').getElementsByTagName('img')[0].style.width = "0px"

})

