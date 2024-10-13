import { GameConfig } from './gameConfig';
export declare class Game extends GameConfig {
    #private;
    constructor();
    drawGrid(): void;
    drawBlock(x: number, y: number): void;
    draw(): void;
    runGame(): void;
}
