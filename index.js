



const tabulation ={
    count: 0,
    p1: [ document.getElementById('player1').value || 'Player 1'],
    p2: [document.getElementById('player2').value || 'Player 2'],

    win: function(){
        if(this['row one'] === "X" && this['row two'] === "X" && this['row three'] === "X"){
            tabulation.winner(this.p1);
        }else if(this['row four'] === "X" && this['row five'] === "X" && this['row six'] === "X"){
            tabulation. winner(this.p1);
        }else if(this['row seven'] === "X" && this['row eight'] === "X" && this['row nine'] === "X"){
            tabulation.winner(this.p1);
        }else if(this['row one'] === "X" && this['row four'] === "X" && this['row seven'] === "X"){
            tabulation. winner(this.p1);
        }else if(this['row two'] === "X" && this['row five'] === "X" && this['row eight'] === "X"){
            tabulation.winner(this.p1);
        }else if(this['row three'] === "X" && this['row six'] === "X" && this['row nine'] === "X"){
            tabulation.winner(this.p1);
        }else if(this['row one'] === "X" && this['row five'] === "X" && this['row nine'] === "X"){
            tabulation. winner(this.p1);
        }else if(this['row seven'] === "X" && this['row five'] === "X" && this['row three'] === "X"){
            tabulation.winner(this.p1);
        }else if(this['row one'] === "O" && this['row two'] === "O" && this['row three'] === "O"){
            tabulation.winner(this.p2);
        }else if(this['row four'] === "O" && this['row five'] === "O" && this['row six'] === "O"){
            tabulation.winner(this.p2);
        }else if(this['row seven'] === "O" && this['row eight'] === "O" && this['row nine'] === "O"){
            tabulation.winner(this.p2);
        }else if(this['row one'] === "O" && this['row four'] === "O" && this['row seven'] === "O"){
            tabulation.winner(this.p2);
        }else if(this['row two'] === "O" && this['row five'] === "O" && this['row eight'] === "O"){
            tabulation.winner(this.p2);
        }else if(this['row three'] === "O" && this['row six'] === "O" && this['row nine'] === "O"){
            tabulation.winner(this.p2);
        }else if(this['row one'] === "O" && this['row five'] === "O" && this['row nine'] === "O"){
            tabulation.winner(this.p2);
        }else if(this['row seven'] === "O" && this['row five'] === "O" && this['row three'] === "O"){
            tabulation.winner(this.p2);
        }else{
            tabulation.count++;
            tabulation.cat();
        }
    },
    cat: function(){
        if(tabulation.count >= 9){
            const result = document.getElementById('result');
            result.innerText = `Its a Cats Game ${p1} is tied with ${p2}`;
            const board = document.getElementById('board');
            const cover = document.createElement('div');
            cover.classList.add('cover');
            board.appendChild(cover);
        }
    },
    clear: function(){
        location.reload();  
    },
    winner: function(player){

        const result = document.getElementById('result');
        result.innerText = `The Winner is: ${player}`;
        const board = document.getElementById('board');
        const cover = document.createElement('div');
        cover.classList.add('cover');
        board.appendChild(cover);
    },
    rotation: function(counter){
        const turn = document.getElementById('result');

        if(counter%2 === 0){
            turn.innerText = `${this.p1}'s turn`
        }else if(counter%2 !== 0){
            turn.innerText = `${this.p2}'s turn`
        }
    },
    play: function(){
        box = document.querySelectorAll('.row');
        // p1 = document.getElementById('player1').value || 'Player 1';
        // p2 = document.getElementById('player2').value || 'Player 2';
        let counter = 0;

        tabulation.rotation(counter);
    
        box.forEach(box => box.addEventListener('click', ()=>{

                if(counter%2 === 0){
                    tabulation[box.className] = "X";
                    box.style.cssText = "background-color: blue";
                    box.innerText = "X";
                    ++counter;
                    console.log("even");
                    tabulation.rotation(counter);
                }else if(counter%2 !== 0){
                    tabulation[box.className] = "O";
                    box.style.cssText = "background-color: red";
                    box.innerText = "O";
                    ++counter;
                    console.log('odd')
                    tabulation.rotation(counter);
                }
          
        console.log(tabulation);
        tabulation.win();
        }));
    
    }
}


