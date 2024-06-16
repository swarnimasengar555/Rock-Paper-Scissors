let userscore = 0;
let compscore = 0;
const compgenchoice =() =>{
    const options = ["rock" , "paper" , "scissors"];
    const randomidx = Math.floor(Math.random() * 3);
    return options[randomidx];
}
const drawgame = () =>{
            console.log("the game is draw")
            msg.innerText = "Game Was Draw. Play Again."
            msg.style.backgroundColor = "#A87676";
        
}
let msg  = document.querySelector("#msg");

const playgame = (userchoice) =>{
    console.log("userchoice = ",userchoice);
    const compchoice = compgenchoice();
    console.log("compchoice = " ,compchoice);

    if(userchoice === compchoice){
        drawgame();

    }
    else{
       let  userwin = true;
        if(userchoice === "rock"){
            userwin = compchoice === "paper" ? false : true;
        }
        else if(userchoice === "scissors"){
            userwin = compchoice === "rock" ? false : true;
        }
        else{
            userwin = compchoice === "scissors" ? false : true;
        }
        showwinner(userwin , userchoice , compchoice ,userscore , compscore);
    }
    
};
let userscorepara = document.querySelector("#yourscore");
let compscorepara = document.querySelector("#compscore");


const showwinner = (userwin , userchoice , compchoice ) =>{
    if(userwin){
            console.log("you win");
              msg.innerText = `You Win!.your  ${userchoice} Beats ${compchoice}`;
              msg.style.backgroundColor = "green";
        userscore++;
        userscorepara.innerText = userscore;
    }
    else
    {
        console.log("you lose");
          msg.innerText = `You lose. ${compchoice} Beats your ${userchoice}`;
          msg.style.backgroundColor = "red";
    compscore++;
    compscorepara.innerText = compscore;
    }
};



let choices = document.querySelectorAll(".choice");
 choices.forEach((choice) => {
    console.log(choice);
     choice.addEventListener("click", () =>{
    const userchoice =   choice.getAttribute("id");
       
        playgame(userchoice);

     });
 });

    
