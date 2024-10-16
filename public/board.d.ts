import { CollisionType, IBoad } from './interface/board';
import { ITetromino } from './interface/tetromino';
export declare class Board implements IBoad {
    grid: number[][];
    width: number;
    height: number;
    constructor(grid: number, width: number, height: number);
    addTetromino(tetromino: ITetromino): void;
    checkCollisionLeftRight(tetromino: ITetromino): CollisionType;
    checkCollision(tetromino: ITetromino): CollisionType;
    clearFullRows(): void;
    checkGameOver(tetromino: ITetromino): boolean;
    clearBoard(): void;
}
