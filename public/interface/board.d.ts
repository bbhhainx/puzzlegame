import { ITetromino } from './tetromino';
export type CollisionType = 'LEFT' | 'RIGHT' | 'BOTTOM' | 'BOARD' | 'NONE';
export interface IBoad {
    grid: number[][];
    width: number;
    height: number;
    addTetromino: (tetromino: ITetromino) => void;
    checkCollision: (tetromino: ITetromino) => CollisionType;
    clearFullRows: () => void;
}