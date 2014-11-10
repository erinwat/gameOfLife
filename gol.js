$(function () {
	var CELL_SIZE = 10, // each cell will be 10 x 10 pixels
	CELL_ALIVE_COLOR = "#2ecc71",
	CELL_DEAD_COLOR = "#e74c3c",
	GENERATION_INTERVAL = 2
	NUM_COLS = 70,
	NUM_ROWS = 40,
	gameGrid = new Array(NUM_ROWS);


	function Cell() {
		this.xPoint = 0;
		this.yPoint = 0;
		this.fillStyle = "white";
		this.dead = true;
		this.liveNeighbors = 0;
	}
	

	function getGrid() {
		var c = document.getElementById("grid");
		return c.getContext("2d");
	}

    // This function is given to you
    // It draws the grid lines on the canvas grid object
    function initGrid() {
    	var grid = getGrid();

    	var canvasWidth = $("#grid").width(),
    	canvasHeight = $("#grid").height();
    	
		// place vertical grid lines
		for (var i = 0; i < canvasWidth; i += CELL_SIZE) {
			grid.moveTo(i, 0);
			grid.lineTo(i, canvasWidth);	
		}
		// place horizontal grid lines
		for (var j = 0; j < canvasHeight; j += CELL_SIZE) {
			grid.moveTo(0, j);
			grid.lineTo(canvasWidth, j);
		}
		
		// draw grid lines
		grid.strokeStyle = "#ddd";
		grid.stroke();
	}

	function initArray() {

		for(var k = 0; k < NUM_ROWS; ++k)
		{
			gameGrid[k] = new Array(NUM_COLS);
		}
	}
	initGrid();
	initArray();

	
	$("#still-life-btn, #oscillator-btn, #spaceship-btn").click(function () {
		var selector = $(this).attr("id");
		selector = "#" + selector.replace("btn", "select");
		var pattern = $(selector).val();
		drawPattern(pattern);
	});

	
	var isRunning = false;
	function runGoL() {
		if (!isRunning) {
			return;
		}
		evolveStep();
		setTimeout(runGoL, GENERATION_INTERVAL);
	}
	$("#start-game").click(function() {
		isRunning = true;
		runGoL();
	});
	$("#stop-game").click(function() {
		isRunning = false;
	});



    /********************
     *	YOUR CODE HERE  *
     ********************/

    /**
     * Requires: Nothing.
     * Modifies: gameGrid
     * Effects: Changes the grid to evolve the cells
     *          to the next generation according to
     *          the rules of the Game of Life.
     * calls: countNeighbors, update
     */
     function evolveStep(){
     	console.log("Evolve step called");
     }


    /**
     * Requires: Nothing.
     * Modifies: gameGrid
     * Effects: Updates the alive/dead status of each cell
     *         based on its count of live neighbors.
     */
     function update(){

     }

    /**
     * Requires: Nothing.
     * Modifies: gameGrid
     * Effects: Fills and populates gameGrid with dead cells.
     */
     function populateGameGrid(){

     }

    /** 
     * Requires: row and col are within bounds of the array.
     * Modifies: Nothing.
     * Effects: Counts the number of live neighbors for
     *          the cell and returns the count.
     * calls validPosition
     */
     function countNeighbors(grid, row, col){

     }

    /**
     * Requires: row and col are integers.
     * Modifies: Nothing.
     * Efects: Returns true if row and col are within
     *         bounds of the array. Returns false otherwise.
     */
     function validPosition(row, col){

     }

    /**
     * Requires: patternName is a string 
     * Modifies: 
     * Effects: 
     * calls drawStillLife, drawOscillator, drawSpaceship
     */
     function drawPattern(patternName) {

     }

     function drawStillLife(patternName) {

     }

     function drawOscillator(patternName) {

     }

     function drawSpaceship(patternName) {

     }
 });
