import { CollisionType, IBoad } from './interface/board'
import { ITetromino } from './interface/tetromino'

export class Board implements IBoad {
  grid: number[][]
  width: number
  height: number
  constructor(grid: number, width: number, height: number) {
    this.grid = Array.from({ length: height / grid }, () =>
      Array(width / grid).fill(0)
    )
    this.width = width
    this.height = height
  }

  /** thêm khối vào trong bảng */
  addTetromino(tetromino: ITetromino) {
    /** vị trí của khối */
    const position = tetromino.position
    for (let y = 0; y < tetromino.shape.length; y++) {
      for (let x = 0; x < tetromino.shape[y].length; x++) {
        if (tetromino.shape[y][x] === 0) continue
        this.grid[position.y + y][position.x + x] = tetromino.shape[y][x]
      }
    }
  }

  /** kiểm tra chạm biên 2 bên */
  checkCollisionLeftRight(tetromino: ITetromino): CollisionType {
    // chạm biên trái
    if (tetromino.position.x === 0) return 'LEFT'
    // chạm biên phải
    if (tetromino.position.x + tetromino.shape[0].length >= this.grid[0].length)
      return 'RIGHT'
    return 'NONE'
  }

  /** hàm kiểm tra va chạm */
  checkCollision(tetromino: ITetromino): CollisionType {
    // lặp qua các phần tử trong khối

    for (let y = 0; y < tetromino.shape.length; y++) {
      for (let x = 0; x < tetromino.shape[y].length; x++) {
        // nếu không phải phần tử thuộc khối thì thôi
        if (tetromino.shape[y][x] === 0) continue
        const newX = tetromino.position.x + x
        const newY = tetromino.position.y + y + 1

        // chạm đáy
        if (newY >= this.grid.length) return 'BOTTOM'
        // chạm khối khác
        if (newY >= 0 && this.grid[newY][newX] !== 0) return 'BOARD'
      }
    }
    // không chạm
    return 'NONE'
  }

  /** hàm xóa các hàng đã được lấp đầy */
  clearFullRows() {
    const HEIGHT = this.grid.length
    const WIDTH = this.grid[0].length

    const NEW_BOARD = this.grid.filter((row) => !row.every((cell) => cell))
    const EMTY_ROWS = Array.from({ length: HEIGHT - NEW_BOARD.length }, () => Array(WIDTH).fill(0));
    
    this.grid = [...EMTY_ROWS, ...NEW_BOARD]
  }

  /** check gameover */
  checkGameOver(tetromino: ITetromino): boolean {
    if(this.grid[0].some((cell) => cell)) return true
    return false
  }

  /** xóa bảng tạo game mới */
  clearBoard() {
    const HEIGHT = this.grid.length
    const WIDTH = this.grid[0].length
    this.grid = Array.from({ length: HEIGHT }, () =>
      Array(WIDTH).fill(0)
    )
  }
}
