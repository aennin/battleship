# Battleship Game

A browser-based implementation of the classic Battleship game built with modern JavaScript. This project emphasizes clean architecture, separation of concerns, and testable game logic, following best practices taught in The Odin Project curriculum.

## Live Overview
Players compete against a computer opponent by strategically placing ships on a 10×10 grid and taking turns attacking coordinates. The game ends when one player sinks all of the opponent’s ships.

## Key Features

### Core Gameplay
- 10x10 game board
- Standard Battleship ship sizes
- Turn-based attacks
- Hit and miss tracking
- Win condition detection

### Modular Architecture
- **Logic Layer**
    - `Ship`
    - `Gameboard`
    - `Player`
- **UI Layer**
    - DOM rendering
    - Event handling
- **Controller Layer**
    - Game flow management
This structure ensures the game logic is reusable, testable, and independent of the user interface.

## Computer Player
The computer opponent supports automated gameplay and can be extended with smarter attack strategies (e.g., targeting adjacent cells after a hit).

## Technologies Used
- JavaScript (ES6 Modules)
- HTML5
- CSS Grid
- Git & GitHub
- Jest (for unit testing game logic)

## Running the Project Locally
1. **Clone the repository**
```bash 
git clone https://github.com/your-username/battleship.git
cd battleship
```
2. **Serve the project**
Because this project uses ES modules, it must be run from a local server:
```bash
npx serve src
```
Then open the provided localhost URL in your browser.

## Testing
Game logic is unit-tested using **Jest**.
Run tests with:
```bash
npm test
```

## Learning Goals Demonstrated

- Separation of concerns
- Factory functions & classes
- State management
- DOM manipulation without mixing logic
- Error handling
- Test-driven development

## Possible Enhancements
- Drag-and-drop ship placement
- Smarter computer AI (hunt/target strategy)
- Two-player pass-and-play mode
- Improved UI/animations

## Acknowledgements
This project was built as part of The Odin Project – JavaScript Curriculum.