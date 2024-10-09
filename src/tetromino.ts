import { ITetromino } from './interface/tetromino'

export class Tetromino implements ITetromino {
  shape: number[][]
  position: { x: number; y: number }

  /** các dạng của khối */
  TETROMINO_SHAPES = [
    [[1, 1, 1, 1]],
    [
      [1, 1],
      [1, 1],
    ],
    [
      [0, 1, 0],
      [1, 1, 1],
    ],
    [
      [1, 0, 0],
      [1, 1, 1],
    ],
    [
      [0, 0, 1],
      [1, 1, 1],
    ],
    [
      [0, 1, 1],
      [1, 1, 0],
    ],
    [
      [1, 1, 0],
      [0, 1, 1],
    ],
  ]

  constructor(position: { x: number; y: number }) {
    this.shape = this.createRandomTetromino()
    this.position = position
  }

  /** hàm tạo khối ngầu nhiên */
  createRandomTetromino(): number[][] {
    /** lấy 1 vị trí bất kì */
    const random_index = Math.floor(Math.random() * 7)
    /** trả về khối tại vị trí tương ứng */
    return this.TETROMINO_SHAPES[random_index]
  }

  /** hàm xoay khối 90 độ theo chiều kim đồng hồ
   * ví dụ [[1,2,3],
   *        [4,5,6]]
   *    => [[4,1],
   *        [5,2],
   *        [6,3]]
   */
  rotate(): void {
    // lặp theo hàng đầu tiên(số cột của mảng cũ) return sẽ ra được số hàng của của mảng mới
    // ví dụ hàng đầu có 3 cột => mảng mới có 3 dòng
    this.shape = this.shape[0].map((_, index) =>
      // tại mỗi cột của mảng cũ lấy ra các giá trị đảo ngược lại và đặt vào hàng tương ứng của mảng mới
      // ví dụ cột đầu tiên có 2 giá trị là [1,4] => [4,1] => [[4,1]]
      // cột thứ 2 có 2 giá trị là [2,5] => [5,2] => [[4,1],[5,2]]
      this.shape.map((row) => row[index]).reverse()
    )
  }
  moveLeft(): void {}
  moveRight(): void {}
  moveDown(): void {}
}
