import { IBoad } from "./board";
import { ITetromino } from "./tetromino";

export type CollisionType = "BOTTOM" | "BOARD" | "LEFT" | "RIGHT" | "NONE";

export interface ICollisionDetector {
  checkCollision(board: IBoad, tetromino: ITetromino): CollisionType;
}
