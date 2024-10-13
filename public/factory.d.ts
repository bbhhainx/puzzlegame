import { Game } from "./game";
import { IBoad } from "./interface/board";
import { ITetromino } from "./interface/tetromino";
export declare class Factory {
    static createGame(): Game;
    static createBoard(grid: number, width: number, height: number): IBoad;
    static createTetromino(position: {
        x: number;
        y: number;
    }): ITetromino;
}
