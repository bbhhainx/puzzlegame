export interface ITetromino {
    shape: number[][];
    position: {
        x: number;
        y: number;
    };
    createRandomTetromino: () => number[][];
    newTetromino: () => void;
    setPosition: (position: {
        x: number;
        y: number;
    }) => void;
    rotate: () => void;
    moveLeft: () => void;
    moveRight: () => void;
    moveDown: () => void;
}
