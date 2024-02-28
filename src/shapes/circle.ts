export class Circle {
    private _x: number;
    private _y: number;
    private _radius: number;
    private _color: string;
    private ctx: CanvasRenderingContext2D;
    private canvasElement: HTMLCanvasElement;

    constructor(x: number, y: number, radius: number, color: string, ctx: CanvasRenderingContext2D, canvasElement: HTMLCanvasElement) {
        this.ctx = ctx;
        this.canvasElement = canvasElement;
        this._radius = radius;
        this._color = color;
        this._x = 0;
        this._y = 0;
    }

    public draw(): void {
        this.ctx.beginPath();
        this.ctx.arc(this._x, this._y, this._radius, 0, Math.PI * 2);
        this.ctx.fillStyle = this._color;
        this.ctx.fill();
    }

    get x(): number {
        return this._x;
    }

    get y(): number {
        return this._y;
    }

    get radius(): number {
        return this._radius;
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

    set radius(value: number) {
        this._radius = value;
    }

    set color(value: string) {
        this._color = value;
    }

}