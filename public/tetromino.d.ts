import { ITetromino } from './interface/tetromino';
export declare class Tetromino implements ITetromino {
    shape: number[][];
    position: {
        x: number;
        y: number;
    };
    TETROMINO_SHAPES: number[][][];
    constructor(position: {
        x: number;
        y: number;
    });
    get x(): number;
    get y(): number;
    createRandomTetromino(): number[][];
    newTetromino(): void;
    rotate(): void;
    setPosition(position: {
        x: number;
        y: number;
    }): void;
    moveLeft(): void;
    moveRight(): void;
    moveDown(): void;
}
