const ToyRobot = require('./robot');

describe('ToyRobot', () => {
  let robot;

  beforeEach(() => {
    robot = new ToyRobot();
  });

  test('place method sets the x, y, and facing properties', () => {
    robot.place(0, 0, 'NORTH');
    expect(robot.x).toBe(0);
    expect(robot.y).toBe(0);
    expect(robot.facing).toBe('NORTH');
  });

  test('place method with invalid x and y values does not set the properties', () => {
    robot.place(-1, 0, 'NORTH');
    expect(robot.x).toBe(null);
    expect(robot.y).toBe(null);
  });

  test('move method moves the robot in the facing direction', () => {
    robot.place(0, 0, 'NORTH');
    robot.move();
    expect(robot.x).toBe(0);
    expect(robot.y).toBe(1);
    expect(robot.facing).toBe('NORTH');
  });

  test('move method does not move the robot off the table', () => {
    robot.place(0, 0, 'SOUTH');
    robot.move();
    expect(robot.x).toBe(0);
    expect(robot.y).toBe(0);
    expect(robot.facing).toBe('SOUTH');
  });

  test('right method changes the facing direction of the robot to the right', () => {
    robot.place(0, 0, 'NORTH');
    robot.right();
    expect(robot.facing).toBe('EAST');
    robot.right();
    expect(robot.facing).toBe('SOUTH');
    robot.right();
    expect(robot.facing).toBe('WEST');
    robot.right();
    expect(robot.facing).toBe('NORTH');
  });

  test('left method changes the facing direction of the robot to the left', () => {
    robot.place(0, 0, 'NORTH');
    robot.left();
    expect(robot.facing).toBe('WEST');
    robot.left();
    expect(robot.facing).toBe('SOUTH');
    robot.left();
    expect(robot.facing).toBe('EAST');
    robot.left();
    expect(robot.facing).toBe('NORTH');
  });

  test('report method returns the current x, y, and facing of the robot', () => {
    robot.place(0, 0, 'NORTH');
    expect(robot.report()).toEqual({ x: 0, y: 0, facing: 'NORTH' });
  });
});