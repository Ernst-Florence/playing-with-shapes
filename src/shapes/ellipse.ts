export class Ellipse {

    private _x: number;
    private _y: number;
    private _radiusX: number;
    private _radiusY: number;
    private _color: string;
    private ctx: CanvasRenderingContext2D;
    private canvasElement: HTMLCanvasElement;

    constructor(x: number, y: number, radiusX: number, radiusY: number, color: string, ctx: CanvasRenderingContext2D, canvasElement: HTMLCanvasElement) {
        this.ctx = ctx;
        this.canvasElement = canvasElement;
        this._radiusX = radiusX;
        this._radiusY = radiusY;
        this._color = color;
        this._x = x;
        this._y = y;
    }

    public draw(): void {
        this.ctx.beginPath();
        this.ctx.ellipse(this._x, this._y, this._radiusX, this._radiusY, 0, 0, Math.PI * 2);
        this.ctx.fillStyle = this._color;
        this.ctx.fill();
    }

    get x(): number {
        return this._x;
    }

    get y(): number {
        return this._y;
    }

    get radiusX(): number {
        return this._radiusX;
    }

    get radiusY(): number {
        return this._radiusY;
    }

    get color(): string {
        return this._color;
    }

    set x(value: number) {
        this._x = value;
    }

    set y(value: number) {
        this._y = value;
    }

    setX(x: number) {
        this._x = x;
    }

    setY(y: number) {
        this._y = y;
    }
    set radiusX(value: number) {
        this._radiusX = value;
    }

    set radiusY(value: number) {
        this._radiusY = value;
    }

    set color(value: string) {
        this._color = value;
    }

    static draw() {

    }
}
