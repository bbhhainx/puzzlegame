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

  addTetromino(tetromino: ITetromino) {
    for (let y = 0; y < tetromino.shape.length; y++) {
      for (let x = 0; x < tetromino.shape[y].length; x++) {
        if (tetromino.shape[y][x] !== 0) {
          this.grid[tetromino.position.y + y][tetromino.position.x + x] =
            tetromino.shape[y][x]
        }
      }
    }
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

  clearFullRows() {}
}
