let userScore=0;
let compScore=0;

const choices = document.querySelectorAll(".choice");
const msg =document.querySelector("#msg");
const result=document.querySelector("#result");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () =>{
    const options=["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
}

const drawGame =()=>{
    msg.innerText ="game was draw.";
    msg.style.backgroundColor= "orange";
    result.innerText="draw,play again"
};

showWinner =(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText ="you win.";
        msg.style.backgroundColor="green";
        result.innerText=`Your ${userChoice} beats ${compChoice}.`
    }else{
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText ="you lose.";
        msg.style.backgroundColor="red";
        result.innerText=`${compChoice} beats your ${userChoice}.`
    }
}

const playGame=(userChoice)=>{
    console.log("user choice= ",userChoice);
    //Generate computer choice
    const compChoice = genCompChoice();
    

    if(userChoice === compChoice){
        drawGame();
    }else{
        let userWin =true;
        if(userChoice === "rock"){
            userWin= compChoice === "paper" ? false: true;
        }else if(userChoice === "paper"){
            userWin= compChoice ==="scissors" ? false : true;
        }else{
            userWin=compChoice==="rock" ? false: true;
        }
        showWinner(userWin,userChoice,compChoice);
    }

}

choices.forEach((choice)=>{
    choice.addEventListener("click", ()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});