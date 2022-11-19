var cols, rows;
var w = 20;
var grid = [], stack = [], randNumStack = [];

var currentA, currentB, currentC, currentD;
var startCell, endCell;
var maxCell, cellCount = 0, cellInd = 0;
var sideCellCount, sideCellStack = [];

var moves = 0;

function setup() {
  createCanvas(800, 800);
  cols = floor(width / w);
  rows = floor(height / w);
  maxCell = cols * rows;

  sideCellCount = (cols - 1) * 4;
  for (var j = 0; j < rows; j++) {
    for (var i = 0; i < cols; i++) {
      var cell = new Cell(i, j, cellInd);
      grid.push(cell);
      cellInd++;
      if (i == 0 || j == 0 || i == cols - 1 || j == rows - 1) {
        sideCellStack.push(cell)
      }
    }
  }
  setStartEndCell();
  currentB = currentA;
  currentC = currentA;
  currentD = currentA;
  cellCount++;
}

function draw() {
  background('#222222');
  for (var i = 0; i < grid.length; i++) {
    grid[i].show();
  }

  drawMaze();
  if (maxCell == cellCount) {
    window.setTimeout(noLoop, 1000);
  }

  if (!isLooping()) {
    highlightStartEnd();
    doGameLogic();
  }
}

function setStartEndCell() {
  var startCellInd = randSideNum(sideCellCount);
  startCell = sideCellStack[startCellInd];
  endCell = sideCellStack[sideCellCount - 1 - startCellInd];

  currentA = startCell;
}

function highlightStartEnd() {
  startCell.highlight(0);
  endCell.highlight(1);

}

function index(i, j) {
  if (i < 0 || j < 0 || i > cols - 1 || j > rows - 1) {
    return -1;
  }
  return i + j * cols;
}


function removeWalls(a, b) {
  var x = a.i - b.i;
  if (x === 1) {
    a.walls[3] = false;
    b.walls[1] = false;
  } else if (x === -1) {
    a.walls[1] = false;
    b.walls[3] = false;
  }
  var y = a.j - b.j;
  if (y === 1) {
    a.walls[0] = false;
    b.walls[2] = false;
  } else if (y === -1) {
    a.walls[2] = false;
    b.walls[0] = false;
  }
}

function randGridNum(maxNum) {
  var randNum = Math.floor(Math.random() * (maxNum));
  while (randNumStack.includes(randNum)) {
    randNum = Math.floor(Math.random() * (cols * rows));
  }
  randNumStack.push(randNum);
  return randNum;
}

function randSideNum(maxNum) {
  return Math.floor(Math.random() * (maxNum));
}

function drawMaze() {
  currentA.visited = true;
  currentB.visited = true;
  currentC.visited = true;
  currentD.visited = true;
  // STEP 1
  var nextA = currentA.checkNeighbors();
  if (nextA) {
    nextA.visited = true;

    // STEP 2
    stack.push(currentA);
    cellCount++;

    // STEP 3
    removeWalls(currentA, nextA);

    // STEP 4
    currentA = nextA;
  } else if (stack.length > 0) {
    currentA = stack.pop();
  }


  // STEP 1
  var nextB = currentB.checkNeighbors();
  if (nextB) {
    nextB.visited = true;

    // STEP 2
    stack.push(currentB);
    cellCount++;

    // STEP 3
    removeWalls(currentB, nextB);

    // STEP 4
    currentB = nextB;
  } else if (stack.length > 0) {
    currentB = stack.pop();
  }

  // STEP 1
  var nextC = currentC.checkNeighbors();
  if (nextC) {
    nextC.visited = true;

    // STEP 2
    stack.push(currentC);
    cellCount++;

    // STEP 3
    removeWalls(currentC, nextC);

    // STEP 4
    currentC = nextC;
  } else if (stack.length > 0) {
    currentC = stack.pop();
  }

  // STEP 1
  var nextD = currentD.checkNeighbors();
  if (nextD) {
    nextD.visited = true;

    // STEP 2
    stack.push(currentD);
    cellCount++;

    // STEP 3
    removeWalls(currentD, nextD);

    // STEP 4
    currentD = nextD;
  } else if (stack.length > 0) {
    currentD = stack.pop();
  }
}