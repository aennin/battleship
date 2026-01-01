import { playerTurn, startGame } from "../gameController.js";

const bindBoardEvents = () => {
    document
        .querySelector('#computer-board')
        .addEventListener('click', (e) => {
            const cell = e.target;
            if (!cell.dataset.x) return;

            const coord = [
                Number(cell.dataset.x),
                Number(cell.dataset.y),
            ];

            playerTurn(coord);
        });
};

document
    .querySelector('#randomize')
    .addEventListener('click', () => {
        startGame();
    });

export {bindBoardEvents};