import { Factory } from './factory'
import { GameConfig } from './gameConfig'
import { IBoad, ICollisionDetector, ITetromino } from './interface'

export class Game extends GameConfig {

  #canvas: HTMLCanvasElement

  #context: CanvasRenderingContext2D

  #board: IBoad
  #tetromino: ITetromino
  #collisionDetector : ICollisionDetector

  #count: number

  constructor() {
    super(30, 300, 600)

    this.#count = 0

    this.#canvas = document.getElementById('game') as HTMLCanvasElement
    this.#context = this.#canvas.getContext('2d') as CanvasRenderingContext2D

    this.#board = Factory.createBoard(this.GRID, this.canvas_width, this.canvas_height)

    this.#tetromino = Factory.createTetromino({ x: 3, y: 0 })

    this.#collisionDetector = Factory.createCollisionDetector()
  }

  #gameLoop = () => {
    window.requestAnimationFrame(this.#gameLoop.bind(this))

    if (++this.#count < 16) {
      return // Bỏ qua đến khung hình tiếp theo mà không xử lý thêm
    }

    this.#context.clearRect(0, 0, this.#canvas.width, this.#canvas.height)

    // vẽ khối
    this.#draw()

    // vẽ lưới
    this.#drawGrid()
    this.#count = 0

    const TYPE_COLLISION = this.#collisionDetector.checkCollision(this.#board,this.#tetromino)

    // kiểm tra chạm block
    if (TYPE_COLLISION === 'BOARD') {
      // đặt lại vị trí của khối và tạo khối mới
      this.#resetTetromino()

      // nếu game chưa kết thúc thì thôi
      if(!this.#isGameOver()) return
      // nếu kết thúc thì xóa bảng và đặt lại vị trí của khối
      this.#board.clearBoard()
      this.#resetTetromino()
      return
    }

    // kiểm tra chạm đáy
    if (TYPE_COLLISION === 'BOTTOM') {
      this.#resetTetromino()
      return
    }
    

    // khối rơi xuống
    this.#tetromino.moveDown()
  }

  #handleKeyDown(e: KeyboardEvent): void {
    switch (e.key) {
      case 'ArrowLeft':
        // nếu chạm biên trái thì dừng
        if(this.#board.checkCollisionLeftRight(this.#tetromino) === 'LEFT') break
        this.#tetromino.moveLeft()
        break
      case 'ArrowRight':
        // nếu chạm biên phải thì dừng
        if(this.#board.checkCollisionLeftRight(this.#tetromino) === 'RIGHT') break
        this.#tetromino.moveRight()
        break
      case 'ArrowDown':
        this.#tetromino.moveDown()
        break
      case ' ':        
        this.#tetromino.rotate()
      default:
        break
    }
  }

  /** reset lại khối khi chạm đáy và chạm với khối khác */
  #resetTetromino() {
    this.#board.addTetromino(this.#tetromino)
    this.#board.clearFullRows()
    this.#tetromino.setPosition({ x: 3, y: 0 })
    this.#tetromino.newTetromino()
  }

  #drawGrid() {
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

  #drawBlock(x: number, y: number) {
    this.#context.fillStyle = 'blue'
    this.#context.fillRect(x * this.GRID, y * this.GRID, this.GRID, this.GRID)
    this.#context.strokeStyle = 'black'
    this.#context.strokeRect(x * this.GRID, y * this.GRID, this.GRID, this.GRID)
  }

  #draw() {
    this.#context.clearRect(0, 0, this.canvas_width, this.canvas_height)

    // Vẽ khối đã xếp
    this.#board.grid.forEach((row, y) => {
      row.forEach((value, x) => {
        if (value === 0) return
        this.#drawBlock(x, y)
      })
    })

    // Vẽ khối hiện tại
    this.#tetromino?.shape?.forEach((row, y) => {
      row.forEach((value, x) => {
        if (value === 0) return
        this.#drawBlock(
          this.#tetromino.position.x + x,
          this.#tetromino.position.y + y
        )
      })
    })
  }

  #isGameOver() {
    return this.#board.getFirstRow().some((cell) => cell)
  }

  public runGame(): void {
    window.requestAnimationFrame(this.#gameLoop.bind(this))
    document.addEventListener('keydown', this.#handleKeyDown.bind(this))
  }
}
