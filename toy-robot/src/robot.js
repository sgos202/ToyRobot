class ToyRobot {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.facing = "NORTH";
  }

  place(x, y, facing) {
    if (x < 0 || x > 4 || y < 0 || y > 4) {
      this.x = null;
      this.y = null;
      return;
    }
    this.x = x;
    this.y = y;
    this.facing = facing;
  }

  move() {
    if (this.facing === "NORTH") {
      if (this.y < 4) {
        this.y = this.y + 1;
      }
    } else if (this.facing === "EAST") {
      if (this.x < 4) {
        this.x = this.x + 1;
      }
    } else if (this.facing === "SOUTH") {
      if (this.y > 0) {
        this.y = this.y - 1;
      }
    } else if (this.facing === "WEST") {
      if (this.x > 0) {
        this.x = this.x - 1;
      }
    }
  }

  right() {
    switch (this.facing) {
      case 'NORTH':
        this.facing = 'EAST';
        break;
      case 'EAST':
        this.facing = 'SOUTH';
        break;
      case 'SOUTH':
        this.facing = 'WEST';
        break;
      case 'WEST':
        this.facing = 'NORTH';
        break;
      default:
        break;
    }
  }

  left() {
    switch (this.facing) {
      case 'NORTH':
        this.facing = 'WEST';
        break;
      case 'EAST':
        this.facing = 'NORTH';
        break;
      case 'SOUTH':
        this.facing = 'EAST';
        break;
      case 'WEST':
        this.facing = 'SOUTH';
        break;
      default:
        break;
    }
  }

  report() {
    return { x: this.x, y: this.y, facing: this.facing };
  }
}

module.exports = ToyRobot;

// Example usage:
const robot = new ToyRobot();

robot.place(0, 0, "NORTH");
console.log("Before calling move:", robot);
robot.move();
console.log("After calling move:", robot);
robot.move();
console.log("After calling move:", robot);
robot.left();
console.log("After calling left:", robot);
robot.right();
console.log("After calling right:", robot);
robot.right();
console.log("After calling right:", robot);
robot.report();
