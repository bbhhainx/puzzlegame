// src/CollisionDetector.ts

import { CollisionType, IBoad, ICollisionDetector, ITetromino } from "./interface";

export class CollisionDetector implements ICollisionDetector {
  checkCollision(board: IBoad, tetromino: ITetromino): CollisionType {
    // lặp qua các phần tử trong khối

    for (let y = 0; y < tetromino.shape.length; y++) {
      for (let x = 0; x < tetromino.shape[y].length; x++) {
        // nếu không phải phần tử thuộc khối thì thôi
        if (tetromino.shape[y][x] === 0) continue
        const newX = tetromino.position.x + x
        const newY = tetromino.position.y + y + 1

        // chạm đáy
        if (newY >= board.grid.length) return 'BOTTOM'
        // chạm khối khác
        if (newY >= 0 && board.grid[newY][newX] !== 0) return 'BOARD'
      }
    }
    // không chạm
    return 'NONE'
  }
}
