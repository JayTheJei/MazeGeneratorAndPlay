function Cell(i, j, cellInd) {
    this.ind = cellInd;
    this.i = i;
    this.j = j;
    this.walls = [true, true, true, true];
    this.visited = false;

    this.checkNeighbors = function () {
        var neighbors = [];

        var top = grid[index(i, j - 1)];
        var right = grid[index(i + 1, j)];
        var bottom = grid[index(i, j + 1)];
        var left = grid[index(i - 1, j)];

        if (top && !top.visited) {
            neighbors.push(top);
        }
        if (right && !right.visited) {
            neighbors.push(right);
        }
        if (bottom && !bottom.visited) {
            neighbors.push(bottom);
        }
        if (left && !left.visited) {
            neighbors.push(left);
        }

        if (neighbors.length > 0) {
            var r = floor(random(0, neighbors.length));
            return neighbors[r];
        } else {
            return undefined;
        }


    }
    this.highlight = function (starter) {
        var x = this.i * w;
        var y = this.j * w;
        noStroke();

        switch (starter) {
            case 0:
                fill(255, 0, 0);
                break;
            case 1:
                fill(0, 255, 0);
                break;
        }
        rect(x, y, w, w);
    }

    this.unhighlight = function (starter) {
        var x = this.i * w;
        var y = this.j * w;
        noStroke();

        switch (starter) {
            case 0:
                fill(0, 0, 128);
                break;
            case 1:
                fill(0, 0, 128);
                break;
        }
        rect(x, y, w, w);
    }

    this.show = function () {
        var x = this.i * w;
        var y = this.j * w;
        stroke(255);
        if (this.walls[0]) {
            line(x, y, x + w, y);
        }
        if (this.walls[1]) {
            line(x + w, y, x + w, y + w);
        }
        if (this.walls[2]) {
            line(x + w, y + w, x, y + w);
        }
        if (this.walls[3]) {
            line(x, y + w, x, y);
        }

        if (this.visited) {
            noStroke();
            fill(0, 0, 128);
            rect(x, y, w, w);
        }
    }

    this.moveup = function () {
        if (this.walls[0] == false) {
            moves++;
            return grid[index(this.i, this.j - 1)];
        } else {
            return this;
        }
    }

    this.moveright = function () {
        if (this.walls[1] == false) {
            moves++;
            return grid[index(this.i + 1, this.j)];
        } else {
            return this;
        }
    }

    this.movedown = function () {
        if (this.walls[2] == false) {
            moves++;
            return grid[index(this.i, this.j + 1)];
        } else {
            return this;
        }
    }

    this.moveleft = function () {
        if (this.walls[3] == false) {
            moves++;
            return grid[index(this.i - 1, this.j)];
        } else {
            return this;
        }
    }
}