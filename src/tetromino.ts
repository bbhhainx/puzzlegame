import { ITetromino } from "./interface/tetromono"

export class Tetromino implements ITetromino {
    shape: number[][]
    position: { x: number, y: number }
    x: number
    y: number
    constructor(shape: number[][], position: { x: number, y: number }) {
        this.shape = shape
        this.position = position
        this.x = position.x
        this.y = position.y
    }
    rotate() {

    }
    moveLeft() {

    }
    moveRight() {

    }
    moveDown() {

    }
}