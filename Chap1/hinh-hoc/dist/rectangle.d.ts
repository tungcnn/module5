import { Shape } from "./shape";
import { iArea } from './iArea';
export declare class Rectangle extends Shape implements iArea {
    private _width;
    private _height;
    constructor(x: number, y: number, _width: number, _height: number);
    area(): number;
    get width(): number;
    set width(width: number);
    get height(): number;
    set height(height: number);
}
