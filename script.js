function toggleGameBoard (){
    let inputs = document.querySelector("#inputs");
    inputs.style.display = "none";
    let container = document.querySelector("#container");
    container.style.display = "grid";
}

function createGameBoard(){
    let retGameBoard = {0:" ", 1:" ", 2:" ", 3:" ", 4:" ", 5:" ", 6:" ", 7:" ", 8:" ",}
	return retGameBoard;
}

//module pattern
function renderArray(){
    let array = gameBoard;
    let allItems = document.querySelectorAll(".item");
    
    let retObj = {
       "render" : function(){
           for (i = 0; i < 9; i++) {
            allItems[i].textContent = array[i];
    }
    
  }
  
};
  return retObj; 
}

function addMark(){
    if (player1.status === true && player1.mark === "X"){

        let indexNum = this.id.slice(-1);
		gameBoard[indexNum] = "X";
		rendering.render();
		
    } else if (player1.status === true && player1.mark === "O"){

        let indexNum = this.id.slice(-1);
		gameBoard[indexNum] = "O";
		rendering.render();
    
	} else if (player2.status === true && player2.mark === "X"){

        let indexNum = this.id.slice(-1);
		gameBoard[indexNum] = "X";
		rendering.render();
    
	} else if (player2.status === true && player2.mark === "O"){

        let indexNum = this.id.slice(-1);
		gameBoard[indexNum] = "O";
		rendering.render();
    
	}   
}

function addEventToAllButtons (){
	
let allItems = document.querySelectorAll(".item");

	let addButtons = allItems.forEach(function(item,i){
	item.addEventListener("click",addMark);
	item.addEventListener("click",changePlayer);
	item.addEventListener("click",getWinner);
});

}

function clearAllInputs() {
  document.querySelector("#player1").value = "";
  document.querySelector("#player2").value = "";
}

function createPlayers() {
	let player1 = document.querySelector("#player1").value;
	console.log(player1);
	let player2 = document.querySelector("#player2").value;
	console.log(player2);
	
	clearAllInputs();
	
	return {player1, player2};
	
}

function createPlayer1(){
	let name = document.querySelector("#player1").value;
	let mark ="X";
	let status = true;
	
	return {name,mark,status};
}


function createPlayer2(){
	let name = document.querySelector("#player2").value;
	let mark = "O";
	let status = false;
	
	clearAllInputs();
	
	return {name,mark,status};
}

function changePlayer(){
	if (player1.status === true) {
		player1.status = false;
        player2.status = true;
	} else if (player2.status === true) {
        player2.status = false;
        player1.status = true;
	}
}

function getWinner(){
    
    let winner = document.querySelector("#winner");
    
    //Vencedor X na horizontal 1,2,3
    if (gameBoard[0]==="X" && gameBoard[1]==="X" && gameBoard[2]==="X"){
        winner.textContent = "The winner is  " + player1.name;
    } else if (gameBoard[3]==="X" && gameBoard[4]==="X" && gameBoard[5]==="X"){
        winner.textContent = "The winner is  " + player1.name;
    } else if (gameBoard[6]==="X" && gameBoard[7]==="X" && gameBoard[8]==="X"){
        winner.textContent = "The winner is  " + player1.name;
    } 
    //Vencedor X na vertical 1,2,3
    else if (gameBoard[0]==="X" && gameBoard[3]==="X" && gameBoard[6]==="X"){
        winner.textContent = "The winner is  " + player1.name;
    } else if (gameBoard[1]==="X" && gameBoard[4]==="X" && gameBoard[7]==="X"){
        winner.textContent = "The winner is  " + player1.name;
    } else if (gameBoard[2]==="X" && gameBoard[5]==="X" && gameBoard[8]==="X"){
        winner.textContent = "The winner is  " + player1.name;
    }
    //Vencedor X na diagonal 1,2
    else if (gameBoard[0]==="X" && gameBoard[4]==="X" && gameBoard[8]==="X"){
        winner.textContent = "The winner is  " + player1.name;
    } else if (gameBoard[2]==="X" && gameBoard[4]==="X" && gameBoard[6]==="X"){
        winner.textContent = "The winner is  " + player1.name;
    } 
    
    //Vencedor O na horizontal 1,2,3
    else if (gameBoard[0]==="O" && gameBoard[1]==="O" && gameBoard[2]==="O"){
        winner.textContent = "The winner is  " + player2.name;
    } else if (gameBoard[3]==="O" && gameBoard[4]==="O" && gameBoard[5]==="O"){
        winner.textContent = "The winner is  " + player2.name;
    } else if (gameBoard[6]==="O" && gameBoard[7]==="O" && gameBoard[8]==="O"){
        winner.textContent = "The winner is  " + player2.name;
    } 
    //Vencedor O na vertical 1,2,3
    else if (gameBoard[0]==="O" && gameBoard[3]==="O" && gameBoard[6]==="O"){
        winner.textContent = "The winner is  " + player2.name;
    } else if (gameBoard[1]==="O" && gameBoard[4]==="O" && gameBoard[7]==="O"){
        winner.textContent = "The winner is  " + player2.name;
    } else if (gameBoard[2]==="O" && gameBoard[5]==="O" && gameBoard[8]==="O"){
        winner.textContent = "The winner is  " + player2.name;
    }
    //Vencedor O na diagonal 1,2
    else if (gameBoard[0]==="O" && gameBoard[4]==="O" && gameBoard[8]==="O"){
        winner.textContent = "The winner is  " + player2.name;
    } else if (gameBoard[2]==="O" && gameBoard[4]==="O" && gameBoard[6]==="O"){
        winner.textContent = "The winner is  " + player2.name;
    }     

}


addEventToAllButtons();


let newGameBtn = document.querySelector("#NewGameBtn");
newGameBtn.addEventListener("click", () => player1 = createPlayer1());
newGameBtn.addEventListener("click", () => player2 = createPlayer2());
newGameBtn.addEventListener("click", toggleGameBoard);


let gameBoard = createGameBoard();
let rendering = renderArray();


