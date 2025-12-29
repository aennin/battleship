import Gameboard from "../src/logic/gameboard";

describe('Gameboard', () => {
    let board;

    beforeEach(() => {
        board = new Gameboard();
    });

    test('places ships at specific coordinates', () => {
        board.placeShip(3, [[0,0], [0,1], [0,2]]);
        expect(board.ships.length).toBe(1);
    });

    test('records a hit when attack hits a ship', () => {
        board.placeShip(2, [[1,1], [1,2]]);
        const result = board.receiveAttack([1,1]);
        expect(result).toBe('hit');
    });

    test('records missed attacks', () => {
        board.placeShip(2, [[1,1], [1,2]]);
        board.receiveAttack([5,5]);
        expect(board.missedAttacks).toContainEqual([5,5]);
    });

    test('reports all ships sunk correctly', () => {
        board.placeShip(2, [[0,0], [0,1]]);
        board.receiveAttack([0,0]);
        board.receiveAttack([0,1]);
        expect(board.allShipsSunk()).toBe(true);
    });
});