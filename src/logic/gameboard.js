import Ship from './ship';

class Gameboard {
    constructor() {
        this.ships = [];
        this.missedAttacks = [];
        this.occupiedCoords = new Map();
    }

    isValidPlacement(coords) {
        return coords.every(([x, y]) => 
        x >= 0 &&
        x < 10 &&
        y >= 0 &&
        y < 10 &&
        !this.occupiedCoords.has(`${x},${y}`)
        );
    }

    placeShip(length, coordinates) {
        if (coords.length !== length) {
            throw new Error('Invalid ship length')
        }

        if (!this.isValidPlacement(coords)) {
            throw new Error('Invalid ship placement');
        }
        const ship = Ship(length);
        this.ships.push(ship);

        coords.forEach(([x, y]) => {
            this.occupiedCoords.set(`${x}, ${y}`, ship);
        });
    }

    receiveAttack([x, y]) {
        const key = `${x}, ${y}`;

        if (this.occupiedCoords.has(key)) {
            this.occupiedCoords.get(key).hit()
            return 'hit';
        }

        this.missedAttacks.push([x, y]);
        return 'miss';
    }

    allShipsSunk() {
        return this.ships.every(obj => obj.ship.isSunk());
    }
}

export default Gameboard;