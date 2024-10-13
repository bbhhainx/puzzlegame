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

  addTetromino(tetromino: ITetromino) {}

	/** hàm kiểm tra va chạm */
  checkCollision(tetromino: ITetromino): CollisionType {
		// lặp qua các phần tử trong khối
    for (let y = 0; y < tetromino.shape.length; y++) {
      for (let x = 0; x < tetromino.shape[y].length; x++) {
				// nếu không phải phần tử thuộc khối thì thôi
        if (tetromino.shape[y][x] !== 0) {
          const newX = tetromino.position.x
          const newY = tetromino.position.y + tetromino.shape.length

          // chạm biên trái
          if (newX === 0) return 'LEFT'
          // chạm biên phải
          if (newX >= this.grid[0].length - tetromino.shape[0].length)
            return 'RIGHT'
          // chạm đáy
          if (newY >= this.grid.length) return 'BOTTOM'
          // chạm khối khác
          if (newY >= 0 && this.grid[newY][newX] !== 0) return 'BOARD'
        }
      }
    }
    // không chạm
    return 'NONE'
  }

  clearFullRows() {}
}
