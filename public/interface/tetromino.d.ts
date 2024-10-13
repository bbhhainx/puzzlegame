export interface ITetromino {
    shape: number[][];
    position: {
        x: number;
        y: number;
    };
    createRandomTetromino: () => number[][];
    rotate: () => void;
    moveLeft: () => void;
    moveRight: () => void;
    moveDown: () => void;
}
