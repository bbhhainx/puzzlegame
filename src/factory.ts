import { Board } from "./board";
import { Game } from "./game";
import { IBoad } from "./interface/board";
import { ITetromino } from "./interface/tetromino";
import { Tetromino } from "./tetromino";

export class Factory{
    static createGame():Game{
        return new Game();
    }
    static createBoard(grid: number, width: number, height: number):IBoad{
        return new Board(grid, width, height);
    }

    static createTetromino(position: { x: number, y: number }):ITetromino{
        return new Tetromino(position);
    }
}