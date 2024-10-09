/** các khối hình được sinh ra và xếp */
export interface ITetromino {
    /** hình dạng của khối hình cần xếp */
    shape: number[][]
    /** vị trí của khối */
    position: { x: number, y: number }


    /** tạo khối random */
    createRandomTetromino: () => number[][]

    /** phương thức xoay khối */
    rotate: () => void
    /** khối di chuyển sang trái */
    moveLeft: () => void
    /** khối di chuyển sang phải */
    moveRight: () => void
    /** khối di chuyển xuống */
    moveDown: () => void
}