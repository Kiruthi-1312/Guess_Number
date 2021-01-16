'use strict';

let number=Math.trunc(Math.random()*20)+1;
let score=20;
let highscore=0;

function displayMessage(message){
document.querySelector('.message').textContent=message;
}

function checkNumber() {
    const guess = Number(document.querySelector('.guess').value);

    if(!guess){
        displayMessage('Not a Number');
    }

    else if(guess===number){
        document.querySelector('.number').textContent = number;

      displayMessage("Correct Number");

        document.querySelector('body').style.backgroundColor= '#50b432';

        document.querySelector('.number').style.width = '30rem';

        if(score>highscore){
            highscore=score;
            document.querySelector('.highscore').textContent=highscore;
        }
    }

    else if(guess!==number){
        if(score>1){
            displayMessage(guess>number ? "Too High!" : "Too Low!");
            score--;
            document.querySelector('.score').textContent=score;
        }
        else{
            displayMessage('You Have Lost');
            document.querySelector('.score').textContent=0;
        }   
}
    }

let check = document.querySelector('.check');

check.addEventListener('click',checkNumber);

document.querySelector('.again').addEventListener('click',function(){
    score = 20;
    number=Math.trunc(Math.random()*20)+1;

    displayMessage("Start guessing...");
    document.querySelector('.score').textContent=score;
    document.querySelector('.number').textContent="?";

    document.querySelector('.guess').textContent="";
    document.querySelector('body').style.backgroundColor= "rgb(47, 97, 90)";

    document.querySelector('.number').style.width = '15rem';
})