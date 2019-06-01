//initialize currentColor
let currentColor = "white";
document.getElementById("myRow").style.background = currentColor;


//change currentColor when a different color is selected using colorSelector
function changeCurrentColor() {
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
}


//go through all pixels and change color to currentColor if background is white
function fillAllUncolored() {
  //for all pixels
  if (document.getElementById("myRow").style.background === "white") {
    document.getElementById("myRow").style.background = currentColor;
  }
}

//go through all pixels and change color to currentColor
function fillAll() {
  //for all pixels
  document.getElementById("myRow").style.background = currentColor;
}

//go through all pixels and change color to white
function clearAll() {
  //for all pixels
  document.getElementById("myRow").style.background = "white";
}

//change the color to the CurrentColor
function changeColor() {
  document.getElementById("myRow").style.background = currentColor;
}


//eventListener for myTable for mouseup and mousedown (click and drag)
//if mouse is down
document.getElementById("myTable").addEventListener("mousedown", function(event) {
  //for all pixels
  //if mouseover, change color
  document.getElementById("myRow").addEventListener("mouseover", changeColor)
});

//if mouse id up
document.getElementById("myTable").addEventListener("mouseup", function(event) {
  //remove mouseover 
  document.getElementById("myRow").removeEventListener("mouseover", changeColor)
});



function createCell(cell, style) {
    let div = document.createElement('div') // create DIV element
    div.setAttribute('class', style);        // set DIV class attribute
    div.setAttribute('className', style);    // set DIV class attribute for IE (?!)
    cell.appendChild(div);                   // append DIV to the table cell
    div.id = "testPixel";
}

function addRow() {
    let tbl = document.getElementById('myTable'), // table reference
          row = tbl.insertRow(tbl.rows.length),      // append table row
          i;

    let numRows = document.getElementById("myTable").rows.length;
    if (numRows < 13) {
      // insert table cells to the new row
      for (i = 0; i < tbl.rows[0].cells.length; i++) {
          createCell(row.insertCell(i), 'row');
      }
    }
    else {
      document.getElementById("myTable").rows.length = 12;
      return;
    }
}

function deleteRow(){
    //check for less than 1
    let numRows = document.getElementById("myTable").rows.length;
    if (numRows > 1) {
      document.getElementById("myTable").deleteRow(1);
    }
}

function addColumn(){
  // append column to the HTML table
  let tbl = document.getElementById('myTable');
  let allRows = tbl.rows;

  // open loop for each row and append cell
  for (let i = 0; i < allRows.length; i++) {
    if (allRows[i].cells.length > 15) {
      return;
    }
    else {
      createCell(tbl.rows[i].insertCell(tbl.rows[i].cells.length), i, 'col');
    }
  }
}

function deleteColumn(){
  let allRows = document.getElementById('myTable').rows;
  for (let i = 0; i < allRows.length; i++) {
    if (allRows[i].cells.length > 1) {
      allRows[i].deleteCell(-1); //delete the cell
    } 
    else {
      return;
    }
  }
}