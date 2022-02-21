interface Coordinates {
  X: number
  Y: number
}

interface Area {
  topLeft: Coordinates
  bottomRight: Coordinates
}

abstract class MyGraphicsPrimitive2D {
  constructor(protected area: Area) { }

  public move(offset: Coordinates) {
    this.area.topLeft.X += +offset.X;
    this.area.topLeft.Y += +offset.Y;
    this.area.bottomRight.X += +offset.X;
    this.area.bottomRight.Y += +offset.Y;
  }

  get coordinates(): Area { return this.area }
}

abstract class MyAreaPrimitive2D extends MyGraphicsPrimitive2D {
  constructor(area: Area) { super(area); }
  abstract square(): number
}

export class MyCircle extends MyAreaPrimitive2D {
  constructor(area: Area) { super(area); }
  square(): number { return Math.PI * Math.pow((this.area.bottomRight.X - this.area.topLeft.X) / 2, 2) }
}

export class MyRectangle extends MyAreaPrimitive2D {
  constructor(area: Area) { super(area); }
  square(): number { return (this.area.bottomRight.X - this.area.topLeft.X) * (this.area.bottomRight.Y - this.area.topLeft.Y) }
}





