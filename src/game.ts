import { Board } from './board'
import { GameConfig } from './gameConfig'
import { IBoad } from './interface/board'
import { ITetromino } from './interface/tetromino'
import { Tetromino } from './tetromino'

export class Game extends GameConfig {
  #canvas: HTMLCanvasElement
  #context: CanvasRenderingContext2D

  #board: IBoad
  #tetromino: ITetromino

  constructor() {
    super(30, 300, 600)

    this.#canvas = document.getElementById('game') as HTMLCanvasElement
    this.#context = this.#canvas.getContext('2d') as CanvasRenderingContext2D

    this.#board = new Board(this.GRID, this.canvas_width, this.canvas_height)

    this.#tetromino = new Tetromino(
      { x: 3, y: 0 }
    )
  }

  drawGrid() {
    // Vẽ lưới ô vuông
    for (let i = 0; i * this.GRID < this.canvas_height; i++) {
      this.#context.beginPath()
      this.#context.moveTo(0, i * this.GRID)
      this.#context.lineTo(this.canvas_width, i * this.GRID)
      this.#context.strokeStyle = 'lightgray' //Màu kẻ lưới
      this.#context.stroke()

      // Kiểm tra để không vẽ dòng ở ngoài.
      if (i * this.GRID < this.canvas_height) {
        // Không vẽ ở ngoài Canvas.
        this.#context.beginPath()
        this.#context.moveTo(i * this.GRID, 0)
        this.#context.lineTo(i * this.GRID, this.canvas_height)
        this.#context.strokeStyle = 'lightgray'
        this.#context.stroke()
      }
    }
  }
}
