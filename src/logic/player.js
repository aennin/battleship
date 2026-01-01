import Gameboard from "./gameboard.js";

const Player = (isComputer = false) => {
    const gameboard = new Gameboard();
    const previousAttacks = [];

    const attack = (enemyBoard, coordinates) =>{
        enemyBoard.receiveAttack(coordinates);
    };

    const randomAttack = (enemyBoard) => {
        if (!isComputer) return;

        let coord;

        do {
            coord = [
                Math.floor(Math.random() * 10),
                Math.floor(Math.random() * 10),
            ];
        } while (
            previousAttacks.some(
                ([x, y]) => x === coord[0] && y === coord[1]
            )
        );

        previousAttacks.push(coord);
        enemyBoard.receiveAttack(coord);
    };

    return {
        gameboard,
        attack,
        randomAttack,
        isComputer,
    };
};

export default Player;