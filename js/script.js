let pDiv = document.querySelector("#pDiv");
pDiv.style.display = "none";
let botDiv = document.querySelector("#botDiv");
botDiv.style.display = "none";
let btnStart = document.querySelector("#startBtn");
btnStart.addEventListener("click", start);

function start(){
    btnStart.style.display = "none";
    pDiv.style.display = "flex";
    botDiv.style.display = "flex";

    let gameNameh1 = document.querySelector("#gameNameh1");
    gameNameh1.style.display = "none";

    let div = document.querySelector(".div");
    let ready = document.createElement("button");
    ready.id = "ready";
    ready.textContent = "Press READY";
    div.insertBefore(ready, div.firstElementChild);
    ready.addEventListener("click", startGame);

    let btnRock = document.querySelector("#rockBtn");
    btnRock.setAttribute("disabled","");

    let btnPaper = document.querySelector("#paperBtn");
    btnPaper.setAttribute("disabled","");

    let btnScissor = document.querySelector("#scissorBtn");
    btnScissor.setAttribute("disabled","");

    function startGame(){
        let ready = document.querySelector("#ready");
        ready.style.display = "none";

        let div = document.querySelector(".div");
        let fight = document.createElement("h1");
        fight.id = "fight";
        fight.textContent = "FIGHT"

        div.replaceChild(fight, div.children[0]);

        let btnRock = document.querySelector("#rockBtn");
        btnRock.removeAttribute("disabled","");
        let btnPaper = document.querySelector("#paperBtn");
        btnPaper.removeAttribute("disabled","");
        let btnScissor = document.querySelector("#scissorBtn");
        btnScissor.removeAttribute("disabled","");
        let playerLivesDiv = document.querySelector(".pLives");
        let pScoreLabel = document.createElement("p");
        pScoreLabel.textContent = "Lives Left: ";
        pScoreLabel.classList = "ScoreLabel";
    
        let botLivesDiv = document.querySelector(".botLives");
        let botScoreLabel = document.createElement("p");
        botScoreLabel.textContent = "Lives Left: ";
        botScoreLabel.classList = "ScoreLabel";
    
        let pPreview = document.querySelector(".pPreview");
        let pPrev = document.createElement("img");
        pPrev.classList = "pPrev";
        pPrev.setAttribute("src", "");
    
        let botPreview = document.querySelector(".botPreview");
        let botPrev = document.createElement("img");
        botPrev.classList = "botPrev";
        botPrev.setAttribute("src", "");
    
        playerLivesDiv.appendChild(pScoreLabel);
        for(let i=0; i<10; i++)
        {
            let pLivesLeft = [];
            pLivesLeft[i] = document.createElement("img");
            pLivesLeft[i].setAttribute("src", "img/heart.png");
            pLivesLeft[i].classList = "pLivesLeft";
            playerLivesDiv.appendChild(pLivesLeft[i]);
        }
        botLivesDiv.appendChild(botScoreLabel);
        for(let i=0; i<10; i++)
        {
            let botLivesLeft = [];
            botLivesLeft[i] = document.createElement("img");
            botLivesLeft[i].setAttribute("src", "img/heart.png");
            botLivesLeft[i].classList = "pLivesLeft";
            botLivesDiv.appendChild(botLivesLeft[i]);
        }
        pPreview.appendChild(pPrev);
        botPreview.appendChild(botPrev);
    
        // let pDiv = document.querySelector("#pDiv");
        let pName = document.createElement("p");
        pName.id = "pName";
        pName.textContent = "Player's Corner";
        pDiv.appendChild(pName);
    
        let botName = document.createElement("p");
        botName.id = "botName";
        botName.textContent = "Computer's Corner";
        botDiv.appendChild(botName);
    
        // let btnRock = document.querySelector("#rockBtn");
        btnRock.addEventListener("click", chooseRock);
    
        // let btnPaper = document.querySelector("#paperBtn");
        btnPaper.addEventListener("click", choosePaper);
    
        // let btnScissor = document.querySelector("#scissorBtn");
        btnScissor.addEventListener("click", chooseScissor);
    
        function chooseRock(){
            let pPreview = document.querySelector(".pPreview");
            let pPrev = document.createElement("img");
            pPrev.setAttribute("src", "img/rock.png");
            pPrev.classListlist = "pPrev";
            pPreview.replaceChild(pPrev, pPreview.children[0]);
    
            let botChoose = Math.ceil(Math.random()*3);
    
            if(botChoose===1)
            {
                let botPreview1 = document.querySelector(".botPreview");
                let botprev1 = document.createElement("img");
                botprev1.setAttribute("src", "img/botrock.png")
                botprev1.classList = "botPrev";
                botPreview1.replaceChild(botprev1, botPreview1.children[0]);
    
                let div = document.querySelector(".div");
                let tie = document.createElement("h1");
                tie.id = "fight";
                tie.textContent = "Tie";

                div.replaceChild(tie, div.children[0]);
            }
    
            else if(botChoose===2)
            {
                playerLivesDiv.removeChild(playerLivesDiv.lastElementChild);
                
                let botPreview1 = document.querySelector(".botPreview");
                let botprev1 = document.createElement("img");
                botprev1.setAttribute("src", "img/botpaper.png")
                botprev1.classList = "botPrev";
                botPreview1.replaceChild(botprev1, botPreview1.children[0]);
                
                let div = document.querySelector(".div");
                let lose = document.createElement("h1");
                lose.id = "fight";
                lose.textContent = "You Lose";

                div.replaceChild(lose, div.children[0]);
            }   
    
            else{
                botLivesDiv.removeChild(botLivesDiv.lastElementChild);
                
                let botPreview1 = document.querySelector(".botPreview");
                let botprev1 = document.createElement("img");
                botprev1.setAttribute("src", "img/botscissor.png")
                botprev1.classList = "botPrev";
                botPreview1.replaceChild(botprev1, botPreview1.children[0]);
                
                let div = document.querySelector(".div");
                let win = document.createElement("h1");
                win.id = "fight";
                win.textContent = "You Win";

                div.replaceChild(win, div.children[0]);
            }
        }
        
        function choosePaper(){
            let pPreview = document.querySelector(".pPreview");
            let pPrev = document.createElement("img");
            pPrev.setAttribute("src", "img/paper.png");
            pPrev.classListlist = "pPrev";
            pPreview.replaceChild(pPrev, pPreview.children[0]);
    
            let botChoose = Math.ceil(Math.random()*3);
    
            if(botChoose===1)
            {
                botLivesDiv.removeChild(botLivesDiv.lastElementChild);
    
                let botPreview1 = document.querySelector(".botPreview");
                let botprev1 = document.createElement("img");
                botprev1.setAttribute("src", "img/botrock.png");
                botprev1.classList = "botPrev";
                botPreview1.replaceChild(botprev1, botPreview1.children[0]);
    
                let div = document.querySelector(".div");
                let win = document.createElement("h1");
                win.id = "fight";
                win.textContent = "You Win";

                div.replaceChild(win, div.children[0]);
            }
    
            else if(botChoose===2)
            {
                let botPreview1 = document.querySelector(".botPreview");
                let botprev1 = document.createElement("img");
                botprev1.setAttribute("src", "img/botpaper.png");
                botprev1.classList = "botPrev";
                botPreview1.replaceChild(botprev1, botPreview1.children[0]);
                
                let div = document.querySelector(".div");
                let tie = document.createElement("h1");
                tie.id = "fight";
                tie.textContent = "Tie";

                div.replaceChild(tie, div.children[0]);
            }
    
            else{
                playerLivesDiv.removeChild(playerLivesDiv.lastElementChild);
    
                let botPreview1 = document.querySelector(".botPreview");
                let botprev1 = document.createElement("img");
                botprev1.setAttribute("src", "img/botscissor.png");
                botprev1.classList = "botPrev";
                botPreview1.replaceChild(botprev1, botPreview1.children[0]);
    
                let div = document.querySelector(".div");
                let lose = document.createElement("h1");
                lose.id = "fight";
                lose.textContent = "You Lose";

                div.replaceChild(lose, div.children[0]);
            }
        }
    
        function chooseScissor(){
            let botChoose = Math.ceil(Math.random()*3);
    
            let pPreview = document.querySelector(".pPreview");
            let pPrev = document.createElement("img");
            pPrev.setAttribute("src", "img/scissor.png");
            pPrev.classListlist = "pPrev";
            pPreview.replaceChild(pPrev, pPreview.children[0]);
    
            if(botChoose===1)
            {
                playerLivesDiv.removeChild(playerLivesDiv.lastElementChild);
    
                let botPreview1 = document.querySelector(".botPreview");
                let botprev1 = document.createElement("img");
                botprev1.setAttribute("src", "img/botrock.png")
                botprev1.classList = "botPrev";
                botPreview1.replaceChild(botprev1, botPreview1.children[0]);
    
                let div = document.querySelector(".div");
                let lose = document.createElement("h1");
                lose.id = "fight";
                lose.textContent = "You Lose";

                div.replaceChild(lose, div.children[0]);
            }
    
            else if(botChoose===2)
            {
                botLivesDiv.removeChild(botLivesDiv.lastElementChild);
    
                let botPreview1 = document.querySelector(".botPreview");
                let botprev1 = document.createElement("img");
                botprev1.setAttribute("src", "img/botpaper.png")
                botprev1.classList = "botPrev";
                botPreview1.replaceChild(botprev1, botPreview1.children[0]);
                
                let div = document.querySelector(".div");
                let win = document.createElement("h1");
                win.id = "fight";
                win.textContent = "You Win";

                div.replaceChild(win, div.children[0]);
            }
    
            else{
                let botPreview1 = document.querySelector(".botPreview");
                let botprev1 = document.createElement("img");
                botprev1.setAttribute("src", "img/botscissor.png");
                botprev1.classList = "botPrev";
                botPreview1.replaceChild(botprev1, botPreview1.children[0]);
                
                let div = document.querySelector(".div");
                let tie = document.createElement("h1");
                tie.id = "fight";
                tie.textContent = "Tie";

                div.replaceChild(tie, div.children[0]);
            }
    
        }
    }
}
