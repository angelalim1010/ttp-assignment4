let rowNum = 1;
//alert(rowNum);
let colNum = 1;
//alert(colNum);
let currentColor = "white";

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


document.getElementById("selectColor").addEventListener("change", function(event) {
	if (document.getElementById("selectColor").value === "WHITE") {
		currentColor = "white";
	}
	else if (document.getElementById("selectColor").value === "RED") {
		currentColor = "red";
	}
	else if (document.getElementById("selectColor").value === "BLUE") {
		currentColor = "blue";
	}
	else if (document.getElementById("selectColor").value === "GREEN") {
		currentColor = "green";
	}
	else if (document.getElementById("selectColor").value === "YELLOW") {
		currentColor = "yellow";
	}
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

document.getElementById("clickHold").addEventListener("click", function(event) {
});









