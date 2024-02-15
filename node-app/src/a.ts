type KeyInput = "up" | "down" | "left" | "right";
enum Direction {
  Up = "up",
  down = "down",
  left = "left",
  right = "right",
}

function doSomething(keyPressed: Direction) {
  if (keyPressed == Direction.Up) {
  }
}

doSomething(Direction.Up);
doSomething(Direction.right);
doSomething(Direction.left);
doSomething(Direction.down);

console.log(Direction.Up);
console.log(Direction.down);
