//Starting Deck
let player1 = [1, 4, 4, 10, 11, 9, 8, 7, 3];
let player2 = [6, 4, 3, 6, 9, 10, 22, 3, 7];

gameWinner(player1, player2);

//Game Logic
function gameWinner(player1, player2){

    //Insert while logic that keeps running until winner of game is decided
    let playedCard1 = player1.pop();
    let playedCard2 = player2.pop();
    let playedCards = [...playedCard1, playedCard2];
    Comparison(playedCard1, playedCard2, playedCards);

    //Comparison recursive function that determines if winner or tie per round
    function Comparison(playedCard1, playedCard2, playedCards){
        //Case of winner
        if(playedCard1 !== playedCard2){
            //Winner Player 1
            if(playedCard1 > playedCard2){
                player1 = [...playedCards];
            }
            //Winner Player 2
            else{
                player2 = [...playedCard2]
            }
        } //Case of tie
        else {
            let playedCard11;
            let playedCard12;
            let playedCard13;
            let playedCard21;
            let playedCard22;
            let playedCard23;
            //Tie Logic
            if(player1.length >= 3){
                playedCard11 = player1.pop();
                playedCard12 = player1.pop();
                playedCard13 = player1.pop();
            } else if(player2.length >= 3){
                playedCard21 = player2.pop();
                playedCard22 = player2.pop();
                playedCard23 = player2.pop();
            } else if(player1.length < 3) {
                return 'Winner Player 1'
            } else {
                return 'Winner Player 2'
            }

            playedCards = [...playedCard11, playedCard12, playedCard13, playedCard21, playedCard22, playedCard23];

            Comparison(playedCard13, playedCard23, playedCards)
        }
    }
} 