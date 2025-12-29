import Player from './logic/player'
import { renderBoards } from './ui/dom'

let player;
let computer;
let currentPlayer;

const startGame = () => {
    player = Player(false);
    computer = Player(true);

    // predetermined ship placement
    player.gameboard.placeShip(3, [[0,0], [0,1, [0,2]]]);
    computer.gameboard.placeShip(3, [[1,0], [1,1], [1,2]]);

    currentPlayer = player;
    renderBoards(player.gameboard, computer.gameboard);
};

const playerTurn = (coord) => {
    if (currentPlayer !== player) return;

    player.attack(computer.gameboard, coord);
    renderBoards(player.gameboard, computer.gameboard);

    if (computer.gameboard.allShipSunk()) {
        endGame('Player wins');
        return;
    }

    computer.randomAttack(player.gameboard);
    renderBoards(player.gameboard, computer.gameboard);

    if (player.gameboard.allShipSunk()) {
        endGame('Computer wins');
    }
};

const endGame = (message) => {
    alert(message);
};

export {startGame, playerTurn};