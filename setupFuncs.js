let rowNum = 1;
//alert(rowNum);
let colNum = 1;
//alert(colNum);
let currentColor = "white";
alert(currentColor);

document.getElementById("testPixel").style.background = currentColor;

document.getElementById("addRow").addEventListener("click", function(event) {
		rowNum += 1;
		alert(rowNum);
});
document.getElementById("subRow").addEventListener("click", function(event) {
		rowNum -= 1;
		alert(rowNum);
});


document.getElementById("addCol").addEventListener("click", function(event) {
		colNum += 1;
		alert(colNum);
});
document.getElementById("subCol").addEventListener("click", function(event) {
		colNum -= 1;
		alert(colNum);
});


document.getElementById("choseRed").addEventListener("click", function(event) {
	currentColor = "red";
	alert(currentColor);
});

document.getElementById("choseBlue").addEventListener("click", function(event) {
	currentColor = "blue";
	alert(currentColor);
});

document.getElementById("choseGreen").addEventListener("click", function(event) {
	currentColor = "green";
	alert(currentColor);
});

document.getElementById("choseYellow").addEventListener("click", function(event) {
	currentColor = "yellow";
	alert(currentColor);
});

document.getElementById("choseWhite").addEventListener("click", function(event) {
	currentColor = "white";
	alert(currentColor);
});



document.getElementById("testPixel").addEventListener("click", function(event) {
	document.getElementById("testPixel").style.background = currentColor;
});


document.getElementById("fillAllUncolored").addEventListener("click", function(event) {
	if (document.getElementById("testPixel").style.background === "white") {
		document.getElementById("testPixel").style.background = currentColor;
	}
});

document.getElementById("fillAll").addEventListener("click", function(event) {
	document.getElementById("testPixel").style.background = currentColor;
});

document.getElementById("clearAll").addEventListener("click", function(event) {
	document.getElementById("testPixel").style.background = "white";
});









