const mario      = document.querySelector('.mario');
const pipe       = document.querySelector('.pipe');
const score      = document.querySelector('.score');
const gameOver   = document.querySelector('.gameOver');
const scoreModal = document.querySelector('#scoreModal');
const buttonEl = document.querySelector('#buttonEl');

let alreadyJump = false;
let count = 0;

document.addEventListener("keydown", (e) =>{

    if((e.code == "ArrowUp") | (e.code == "Space")){

        jump();

    }

});

function jump(){

    if(!mario.classList.contains("jump")){

        mario.classList.add("jump");
        alreadyJump = true;

        setTimeout(() =>{
            
            mario.classList.remove("jump");
            alreadyJump = false;
            
        }, 1100);

    }
}




setInterval(() =>{

    let marioBottom = parseInt(
        window.getComputedStyle(mario).getPropertyValue("bottom")
    );
    let pipeLeft = parseInt(
        window.getComputedStyle(pipe).getPropertyValue("left")
    );
    
    if(pipeLeft <= 120 && pipeLeft > 0 && marioBottom < 80 && !alreadyJump){

          
        
            alert(`Game Over! \n Score:  ${count}`);
            gameOver.style.display = 'block'
            scoreModal.innerHTML   = count
            count = 0;
    }

    count++;
    score.innerHTML = `SCORE: ${count}`;

}, 10);

function init(){
    marioBottom
    pipeLeft 
    count = 0;
}

buttonEl.addEventListener('click', () =>{

    //init()
    scoreModal.style.display ='none';
})


/*

const loop = setInterval(() => {

    const pipePosition  = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    

    if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80){
         
      /*  pipe.style.animation = 'none';
        pipe.style.left =`${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.left =`${marioPosition}px`;

        mario.src ='./img/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px'; */

       // clearInterval(loop);

       // alert(`Game Over! \n Score:  ${score}`); 
       // gameOver.style.display = 'block'
/*        
        
     }


        score ++;
        scorEl.innerHTML = score;    
        

}, 10);


 */