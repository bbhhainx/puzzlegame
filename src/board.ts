import { IBoad } from "./interface/board"
import { ITetromino } from "./interface/tetromino"

export class Board implements IBoad {
    grid: number[][]
    width: number
    height: number
    constructor(grid: number, width: number, height: number){
        this.grid = Array.from({ length: height/grid }, () => Array(width/grid).fill(0))
        this.width = width
        this.height = height
    }

    addTetromino(tetromino: ITetromino){

    }

    checkCollision(tetromino: ITetromino){
        return true
    }

    clearFullRows(){

    }
}