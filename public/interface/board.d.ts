import { ITetromino } from './tetromino';
export type CollisionType = 'BOTTOM' | 'BOARD' | 'LEFT' | 'RIGHT' | 'NONE';
export interface IBoad {
    grid: number[][];
    width: number;
    height: number;
    addTetromino: (tetromino: ITetromino) => void;
    checkCollisionLeftRight: (tetromino: ITetromino) => CollisionType;
    checkCollision: (tetromino: ITetromino) => CollisionType;
    clearFullRows: () => void;
    checkGameOver: (tetromino: ITetromino) => boolean;
    clearBoard: () => void;
}
