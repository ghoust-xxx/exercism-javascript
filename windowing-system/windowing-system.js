// @ts-check

export function Size(w = 80, h = 60) {
  this.width = w;
  this.height = h;
}

Size.prototype.resize = function (nw, nh) {
  this.width = nw;
  this.height = nh;
}

export function Position(x = 0, y = 0) {
  this.x = x;
  this.y = y;
}

Position.prototype.move = function (nx, ny) {
  this.x = nx;
  this.y = ny;
}

export class ProgramWindow {
  constructor() {
    this.screenSize = new Size(800, 600);
    this.size = new Size();
    this.position = new Position();
  }

  resize(s) {
    if (s.width < 1) s.width = 1;
    if (s.height < 1) s.height = 1;
    if (this.position.x + s.width > this.screenSize.width)
      s.width = this.screenSize.width - this.position.x;
    if (s.height + this.position.y > this.screenSize.height)
      s.height = this.screenSize.height - this.position.y;
    this.size.width = s.width;
    this.size.height = s.height;
  }

  move(p) {
    if (p.x < 0) p.x = 0;
    if (p.y < 0) p.y = 0;
    if (p.x + this.size.width > this.screenSize.width)
      p.x = this.screenSize.width - this.size.width;
    if (p.y + this.size.height > this.screenSize.height)
      p.y = this.screenSize.height - this.size.height;
    this.position.move(p.x, p.y)
  }
}

export function changeWindow(pw) {
  pw.resize(new Size(400, 300));
  pw.move(new Position(100, 150));
  return pw;
}