import Player from './logic/player'
import { renderBoards } from './ui/dom'

let player;
let computer;
let currentPlayer;
let gameOver = false;

const startGame = () => {
    player = Player(false);
    computer = Player(true);

    // predetermined ship placement
   /*  player.gameboard.placeShip(3, [[0,0], [0,1], [0,2]]);
    computer.gameboard.placeShip(3, [[1,0], [1,1], [1,2]]); */

    placeShipsRandomly(player.gameboard);
    placeShipsRandomly(computer.gameboard);

    currentPlayer = player;
    gameOver = false;

    renderBoards(player.gameboard, computer.gameboard);
};

const playerTurn = (coord) => {
    if (gameOver || currentPlayer !== player) return;

    player.attack(computer.gameboard, coord);
    renderBoards(player.gameboard, computer.gameboard);

    if (computer.gameboard.allShipsSunk()) {
        endGame('Player wins');
        return;
    }

    currentPlayer = computer;

    computer.randomAttack(player.gameboard);
    renderBoards(player.gameboard, computer.gameboard);

    if (player.gameboard.allShipsSunk()) {
        endGame('Computer wins');
        return;
    }

    currentPlayer = player;
};

const generateRandomCoords = (length) => {
    const horizontal = Math.random() < 0.5;
    const x = Math.floor(Math.random() * 10);
    const y = Math.floor(Math.random() * 10);

    return Array.from({length}, (_, i) =>
    horizontal ? [x, y + i]: [x + i, y]
    );
};

const placeShipsRandomly = (gameboard) => {
    const shipLengths = [5, 4, 3, 2];

    shipLengths.forEach(length => {
        let placed = false;

        while (!placed) {
            const coords = generateRandomCoords(length);
            try {
                gameboard.placeShip(length, coords);
                placed = true;
            } catch {
                // try again
            }
        }
    });
};

const endGame = (message) => {
    gameOver = true;
    alert(message);
};

export {startGame, playerTurn};