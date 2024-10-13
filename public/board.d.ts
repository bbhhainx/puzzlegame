import { CollisionType, IBoad } from './interface/board';
import { ITetromino } from './interface/tetromino';
export declare class Board implements IBoad {
    grid: number[][];
    width: number;
    height: number;
    constructor(grid: number, width: number, height: number);
    addTetromino(tetromino: ITetromino): void;
    checkCollision(tetromino: ITetromino): CollisionType;
    clearFullRows(): void;
}
