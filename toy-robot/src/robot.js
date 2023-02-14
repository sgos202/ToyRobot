class Robot {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.facing = "north";
  }

  place(x, y, facing) {
    if (x >= 0 && x <= 4 && y >= 0 && y <= 4) {
      this.x = x;
      this.y = y;
      this.facing = facing.toLowerCase();
    }
  }

  move() {
    switch (this.facing) {
      case "north":
        if (this.y < 4) {
          this.y += 1;
        }
        break;
      case "south":
        if (this.y > 0) {
          this.y -= 1;
        }
        break;
      case "east":
        if (this.x < 4) {
          this.x += 1;
        }
        break;
      case "west":
        if (this.x > 0) {
          this.x -= 1;
        }
        break;
    }
  }

  turnLeft() {
    switch (this.facing) {
      case "north":
        this.facing = "west";
        break;
      case "south":
        this.facing = "east";
        break;
      case "east":
        this.facing = "north";
        break;
      case "west":
        this.facing = "south";
        break;
    }
  }

  turnRight() {
    switch (this.facing) {
      case "north":
        this.facing = "east";
        break;
      case "south":
        this.facing = "west";
        break;
      case "east":
        this.facing = "south";
        break;
      case "west":
        this.facing = "north";
        break;
    }
  }

  report() {
    console.log(`${this.x},${this.y},${this.facing.toUpperCase()}`);
  }
}

// Example usage:
const robot = new Robot();

robot.place(0, 0, "north"); // place the robot at (0, 0) facing north
robot.move(); // move the robot one unit north to (0, 1)
robot.turnRight(); // turn the robot to face east
robot.move(); // move the robot one unit east to (1, 1)
robot.report(); // output the robot's current position and facing direction (1,1,EAST)