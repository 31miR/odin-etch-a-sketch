//CONSTANTS
const GRID_WIDTH = 16;
const GRID_HEIGHT = 16;
const GRID_HTML = document.getElementById('grid');

function createGridRows(height) {
    let result = [];
    for(let i = 0; i < height; ++i) {
        result.push(document.createElement('div'));
    }
    return result;
}

function createGrid(width, height) {
    let grid = [];
    for(let i = 0; i < width; ++i) {
        let line = [];
        for(let j = 0; j < height; ++j) {
            line.push(document.createElement('div'));
        }
        grid.push(line);
    }
    return grid;
}

function placeGridOnScreen(gridRows, grid) {
    for(let i = 0; i < grid.length; ++i) {
        GRID_HTML.appendChild(gridRows[i])
        for(let j = 0; j < grid[i].length; ++j) {
            gridRows[i].appendChild(grid[i][j]);
        }
    }
}

/*
TODO:
-Create function that adds style to all the inside divs
-Create function that change style color of each div
-Create function that simulates logic, i.e. detects mouse input and changes element style accordingly
*/