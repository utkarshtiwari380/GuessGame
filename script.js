'use strict';

// console.log(document.querySelector('.message').textContent);


// console.log(document.querySelector('.message').textContent);


// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 21;

let score = 20;
let highscore = 0;
let secretNumber = Math.trunc(Math.random()*20) +1 ;

document.querySelector('.again').addEventListener('click', function(e) {
    score = 20;
    secretNumber = Math.trunc(Math.random()*20) +1 ;
    document.querySelector('body').style.backgroundColor = ' #222';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.message').textContent = 'Start guessing...';

})

document.querySelector('.check').addEventListener('click', function(e) {
const num1= Number(document.querySelector('.guess').value);

if(!num1){
    document.querySelector('.message').textContent = 'No Input Given';
}else if (num1 === secretNumber){
    document.querySelector('.message').textContent = 'correct';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '50rem';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.highscore').textContent = score;

    if(highscore<score) highscore=score;

} else if(num1 !== secretNumber){
    
    if (score>1){
        document.querySelector('.message').textContent = (num1>secretNumber) ? 'Number is too high' :'Number is too low';
        score--;
        document.querySelector('.score').textContent = score;
    }else {
        document.querySelector('.message').textContent = '💣 Looser';
    }
}


})