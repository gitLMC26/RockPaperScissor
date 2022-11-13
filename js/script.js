let pDiv = document.querySelector("#pDiv");
pDiv.style.display = "none";
let botDiv = document.querySelector("#botDiv");
botDiv.style.display = "none";
let btnStart = document.querySelector("#startBtn");
btnStart.addEventListener("click", start);
let pPreview = document.querySelector(".pPreview");
let botPreview = document.querySelector(".botPreview");

function start(){
    btnStart.style.display = "none";
    pDiv.style.display = "flex";
    botDiv.style.display = "flex";
    pPreview.style.visibility = "hidden";
    botPreview.style.visibility = "hidden";

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
        fight.textContent = "FIGHT";

        div.replaceChild(fight, div.children[0]);

        let btnRock = document.querySelector("#rockBtn");
        btnRock.removeAttribute("disabled","");
        let btnPaper = document.querySelector("#paperBtn");
        btnPaper.removeAttribute("disabled","");
        let btnScissor = document.querySelector("#scissorBtn");
        btnScissor.removeAttribute("disabled","");
        
        let playerLivesDiv = document.querySelector(".pLives");
        let pScoreHeartDiv = document.createElement("div");
        pScoreHeartDiv.classList = "pScoreHeartDiv";
        playerLivesDiv.appendChild(pScoreHeartDiv);
        let pScoreLabelDiv = document.createElement("div");
        pScoreLabelDiv.id = "pScoreLabelDiv";
        pScoreHeartDiv.appendChild(pScoreLabelDiv);
        let pHeartImgDiv = document.createElement("div");
        pHeartImgDiv.classList = "pHeartImgDiv";
        pScoreHeartDiv.appendChild(pHeartImgDiv);
        let pScoreLabel = document.createElement("p");
        pScoreLabel.textContent = "Lives Left: ";
        pScoreLabel.classList = "ScoreLabel";
    
        let botLivesDiv = document.querySelector(".botLives");
        let botScoreHeartDiv = document.createElement("div");
        botScoreHeartDiv.classList = "botScoreHeartDiv";
        botLivesDiv.appendChild(botScoreHeartDiv);
        let botScoreLabelDiv = document.createElement("div");
        botScoreLabelDiv.classList = "botScoreLabelDiv";
        botScoreHeartDiv.appendChild(botScoreLabelDiv);
        let botHeartImgDiv = document.createElement("div");
        botHeartImgDiv.classList = "botHeartImgDiv";
        botScoreHeartDiv.appendChild(botHeartImgDiv);
        let botScoreLabel = document.createElement("p");
        botScoreLabel.textContent = "Lives Left: ";
        botScoreLabel.classList = "ScoreLabel";
    
        let pPrev = document.createElement("img");
        pPrev.classList = "pPrev";
        pPrev.setAttribute("src", "");
        
        let botPreview = document.querySelector(".botPreview");
        let botPrev = document.createElement("img");
        botPrev.classList = "botPrev";
        botPrev.setAttribute("src", "");
    
        pScoreLabelDiv.appendChild(pScoreLabel);
        for(let i=0; i<10; i++)
        {
            let pLivesLeft = [];
            pLivesLeft[i] = document.createElement("img");
            pLivesLeft[i].setAttribute("src", "img/heart.png");
            pLivesLeft[i].classList = "pLivesLeft";
            pHeartImgDiv.appendChild(pLivesLeft[i]);
        }
        botScoreLabelDiv.appendChild(botScoreLabel);
        for(let i=0; i<10; i++)
        {
            let botLivesLeft = [];
            botLivesLeft[i] = document.createElement("img");
            botLivesLeft[i].setAttribute("src", "img/heart.png");
            botLivesLeft[i].classList = "pLivesLeft";
            botHeartImgDiv.appendChild(botLivesLeft[i]);
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
            let pheartCount = document.querySelector(".pHeartImgDiv");
            let botheartCount = document.querySelector(".botHeartImgDiv");
            let pPreview = document.querySelector(".pPreview");
            let pPrev = document.createElement("img");
            pPreview.style.visibility = "visible";
            botPreview.style.visibility = "visible";
            pPrev.setAttribute("src", "img/rock.png");
            pPrev.classListlist = "pPrev";
            pPreview.replaceChild(pPrev, pPreview.children[0]);
    
            let botChoose = Math.ceil(Math.random()*3);
    
            if(botChoose===1)
            {
                let botPreview1 = document.querySelector(".botPreview");
                let botprev1 = document.createElement("img");
                botprev1.setAttribute("src", "img/botrock.png");
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
                pHeartImgDiv.removeChild(pHeartImgDiv.lastElementChild);
                
                let botPreview1 = document.querySelector(".botPreview");
                let botprev1 = document.createElement("img");
                botprev1.setAttribute("src", "img/botpaper.png");
                botprev1.classList = "botPrev";
                botPreview1.replaceChild(botprev1, botPreview1.children[0]);
                
                let div = document.querySelector(".div");
                let lose = document.createElement("h1");
                lose.id = "fight";
                lose.textContent = "You Lose";

                div.replaceChild(lose, div.children[0]);
            }   
    
            else{
                botHeartImgDiv.removeChild(botHeartImgDiv.lastElementChild);
                
                let botPreview1 = document.querySelector(".botPreview");
                let botprev1 = document.createElement("img");
                botprev1.setAttribute("src", "img/botscissor.png");
                botprev1.classList = "botPrev";
                botPreview1.replaceChild(botprev1, botPreview1.children[0]);
                
                let div = document.querySelector(".div");
                let win = document.createElement("h1");
                win.id = "fight";
                win.textContent = "You Win";

                div.replaceChild(win, div.children[0]);
            }

            let pLivesCount = pheartCount.childElementCount;
            console.log(pLivesCount+"Player");

            let botLivesCount = botheartCount.childElementCount;
            console.log(botLivesCount+"Computer");

            if(pLivesCount===0 || botLivesCount===0)
            {
                btnRock.setAttribute("disabled","");
                btnPaper.setAttribute("disabled","");
                btnScissor.setAttribute("disabled","");

                let div = document.querySelector(".div");
                let quitContinue = document.createElement("div");
                quitContinue.classList = "quitContinue";
                let gameOver = document.createElement("h1");
                gameOver.id = "gameOver";
                gameOver.textContent = "Game Over";
                let quit = document.createElement("button");
                quit.id = "Quit";
                quit.textContent = "Quit";
                let playAgain = document.createElement("button");
                playAgain.id = "playAgain";
                playAgain.textContent = "Play Again";
            
                div.replaceChild(gameOver, div.children[0]);
                div.insertBefore(quitContinue, div.lastElementChild);
                quitContinue.appendChild(playAgain);
                quitContinue.appendChild(quit);

                quit.addEventListener("click", quitGame);

                function quitGame(){
                    location.reload();
                }

                playAgain.addEventListener("click", reStart);

                function reStart()
                {   
                    div.removeChild(div.firstElementChild);
                    div.removeChild(div.children[2]);
                    playerLivesDiv.removeChild(playerLivesDiv.children[0]);
                    botLivesDiv.removeChild(botLivesDiv.children[0]);
                    pDiv.removeChild(pDiv.lastElementChild);
                    botDiv.removeChild(botDiv.lastElementChild);
                    start();
                }
            }
        }
        
        function choosePaper(){
            let pheartCount = document.querySelector(".pHeartImgDiv");
            let botheartCount = document.querySelector(".botHeartImgDiv");
            let pPreview = document.querySelector(".pPreview");
            pPreview.style.visibility = "visible";
            botPreview.style.visibility = "visible";
            let pPrev = document.createElement("img");
            pPrev.setAttribute("src", "img/paper.png");
            pPrev.classListlist = "pPrev";
            pPreview.replaceChild(pPrev, pPreview.children[0]);
    
            let botChoose = Math.ceil(Math.random()*3);
    
            if(botChoose===1)
            {
                botHeartImgDiv.removeChild(botHeartImgDiv.lastElementChild);
    
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
                pHeartImgDiv.removeChild(pHeartImgDiv.lastElementChild);
    
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

            let pLivesCount = pheartCount.childElementCount;
            console.log(pLivesCount);

            let botLivesCount = botheartCount.childElementCount;
            console.log(botLivesCount);

            if(pLivesCount===0 || botLivesCount===0)
            {
                btnRock.setAttribute("disabled","");
                btnPaper.setAttribute("disabled","");
                btnScissor.setAttribute("disabled","");

                let div = document.querySelector(".div");
                let quitContinue = document.createElement("div");
                quitContinue.classList = "quitContinue";
                let gameOver = document.createElement("h1");
                gameOver.id = "gameOver";
                gameOver.textContent = "Game Over";
                let quit = document.createElement("button");
                quit.id = "Quit";
                quit.textContent = "Quit";
                let playAgain = document.createElement("button");
                playAgain.id = "playAgain";
                playAgain.textContent = "Play Again";
            
                div.replaceChild(gameOver, div.children[0]);
                div.insertBefore(quitContinue, div.lastElementChild);
                quitContinue.appendChild(playAgain);
                quitContinue.appendChild(quit);

                quit.addEventListener("click", quitGame);

                function quitGame(){
                    location.reload();
                }

                playAgain.addEventListener("click", reStart);

                function reStart()
                {
                    div.removeChild(div.firstElementChild);
                    div.removeChild(div.children[2]);
                    playerLivesDiv.removeChild(playerLivesDiv.children[0]);
                    botLivesDiv.removeChild(botLivesDiv.children[0]);
                    pDiv.removeChild(pDiv.lastElementChild);
                    botDiv.removeChild(botDiv.lastElementChild);
                    start();
                }
            }
        }
    
        function chooseScissor(){
            let pheartCount = document.querySelector(".pHeartImgDiv");
            let botheartCount = document.querySelector(".botHeartImgDiv");
            let pPreview = document.querySelector(".pPreview");
            pPreview.style.visibility = "visible";
            botPreview.style.visibility = "visible";
            let pPrev = document.createElement("img");
            pPrev.setAttribute("src", "img/scissor.png");
            pPrev.classListlist = "pPrev";
            pPreview.replaceChild(pPrev, pPreview.children[0]);
            let botChoose = Math.ceil(Math.random()*3);
    
            if(botChoose===1)
            {
                pHeartImgDiv.removeChild(pHeartImgDiv.lastElementChild);
    
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
                botHeartImgDiv.removeChild(botHeartImgDiv.lastElementChild);
    
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
            let pLivesCount = pheartCount.childElementCount;
            console.log(pLivesCount);
            
            let botLivesCount = botheartCount.childElementCount;
            console.log(botLivesCount);

            if(pLivesCount===0 || botLivesCount===0)
            {
                btnRock.setAttribute("disabled","");
                btnPaper.setAttribute("disabled","");
                btnScissor.setAttribute("disabled","");

                let div = document.querySelector(".div");
                let quitContinue = document.createElement("div");
                quitContinue.classList = "quitContinue";
                let gameOver = document.createElement("h1");
                gameOver.id = "gameOver";
                gameOver.textContent = "Game Over";
                let quit = document.createElement("button");
                quit.id = "Quit";
                quit.textContent = "Quit";
                let playAgain = document.createElement("button");
                playAgain.id = "playAgain";
                playAgain.textContent = "Play Again";
            
                div.replaceChild(gameOver, div.children[0]);
                div.insertBefore(quitContinue, div.lastElementChild);
                quitContinue.appendChild(playAgain);
                quitContinue.appendChild(quit);

                quit.addEventListener("click", quitGame);

                function quitGame(){
                    location.reload();
                }

                playAgain.addEventListener("click", reStart);

                function reStart()
                {
                    div.removeChild(div.firstElementChild);
                    div.removeChild(div.children[2]);
                    playerLivesDiv.removeChild(playerLivesDiv.children[0]);
                    botLivesDiv.removeChild(botLivesDiv.children[0]);
                    pDiv.removeChild(pDiv.lastElementChild);
                    botDiv.removeChild(botDiv.lastElementChild);
                    start();
                }
            }
        }
    }
}
