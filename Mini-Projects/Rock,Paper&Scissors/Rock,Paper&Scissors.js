let userScore=0;
let compScore=0;

const images=document.querySelectorAll(".image");
const msg=document.querySelector("#msg");
const score=document.querySelector("#user-score");
const score1=document.querySelector("#comp-score");



const gencompchoice=()=>{
    const options=["rock","paper","scissors"];
    const randomIndx=Math.floor(Math.random()*3);
    return options[randomIndx];
}
const playGame=(userChoice)=>{
    console.log("user choice:",userChoice);
    //generate comp choice
    const compChoice=gencompchoice();
    console.log("comp choice:",compChoice);

    if(userChoice===compChoice){
        console.log("its a draw");
        msg.innerText="draw";
    }
    else if(userChoice==="rock"){
        if(compChoice==="paper"){
            console.log("computer won");
            msg.innerText="you lose!";
            score1.innerText=compScore+=1;
        }else{
            console.log("user won");
            msg.innerText="you win!";
            score.innerText=userScore+=1;
        }
    }
    else if(userChoice==="paper"){
        if(compChoice==="scissors"){
            console.log("computer won");
            msg.innerText="you lose!";
            score1.innerText=compScore+=1;
        }else{
            console.log("user won");
            msg.innerText="you win!";
            score.innerText=userScore+=1;
        }
    }
    else if(userChoice==="scissors"){
        if(compChoice==="rock"){
            console.log("computer won");  
            msg.innerText="you lose!";
            score1.innerText=compScore+=1;
        }else{
            console.log("user won");
            msg.innerText="you win!";
            score.innerText=userScore+=1;
        }
    }
};
images.forEach((image)=>{
    image.addEventListener("click",() => {
        const userChoice=image.getAttribute("id");
        playGame(userChoice);
    });
});
