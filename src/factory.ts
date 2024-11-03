import { Game } from "./game";
import { Board } from "./board";
import { Tetromino } from "./tetromino";
import { CollisionDetector } from "./collision_detector";
import { ICollisionDetector, ITetromino, IBoad } from "./interface";

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

    static createCollisionDetector(): ICollisionDetector{
        return new CollisionDetector();
    }
}