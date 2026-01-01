import Ship from './ship.js';

class Gameboard {
    constructor() {
        this.ships = [];
        this.missedAttacks = [];
        this.hits = [];
        this.occupiedCoords = new Map();
    }

    isValidPlacement(coordinates) {
        return coordinates.every(([x, y]) => 
        x >= 0 &&
        x < 10 &&
        y >= 0 &&
        y < 10 &&
        !this.occupiedCoords.has(`${x},${y}`)
        );
    }

    placeShip(length, coordinates) {
        if (coordinates.length !== length) {
            throw new Error('Invalid ship length')
        }

        if (!this.isValidPlacement(coordinates)) {
            throw new Error('Invalid ship placement');
        }

        const ship = Ship(length);
        this.ships.push(ship);

        coordinates.forEach(([x, y]) => {
            this.occupiedCoords.set(`${x},${y}`, ship);
        });
    }

    receiveAttack([x, y]) {
        const key = `${x},${y}`;

        if (this.occupiedCoords.has(key)) {
            this.occupiedCoords.get(key).hit();
            this.hits.push([x, y]);
            return 'hit';
        }

        this.missedAttacks.push([x, y]);
        return 'miss';
    }

    hasShipAt(x, y) {
        return this.occupiedCoords.has(`${x},${y}`);
    }

    wasHitAt(x, y) {
        return (
            this.hits.some(([hx, hy]) => hx === x && hy === y) || 
            this.missedAttacks.some(([mx, my]) => mx === x && my === y)
        );
    }

    allShipsSunk() {
        return this.ships.every(ship => ship.isSunk());
    }
}

export default Gameboard;