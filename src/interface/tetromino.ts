/** các khối hình được sinh ra và xếp */
export interface ITetromino {
    /** hình dạng của khối hình cần xếp */
    shape: number[][]
    /** vị trí của khối */
    position: { x: number, y: number }

    /** lấy hình dạng của khối cần xếp */
    getShape(): number[][]

    /** tạo khối random */
    createRandomTetromino(): number[][]

    /** tạo khối mới */
    newTetromino(): void

    /** đặt vị trí cho khối */
    setPosition(position: { x: number, y: number }): void

    /** phương thức xoay khối */
    rotate(): void
    /** khối di chuyển sang trái */
    moveLeft(): void
    /** khối di chuyển sang phải */
    moveRight(): void
    /** khối di chuyển xuống */
    moveDown(): void
}