function createCell(cell, text, style) {
    var div = document.createElement('div'), // create DIV element
        txt = document.createTextNode(text); // create text node
    div.appendChild(txt);                    // append text node to the DIV
    div.setAttribute('class', style);        // set DIV class attribute
    div.setAttribute('className', style);    // set DIV class attribute for IE (?!)
    cell.appendChild(div);                   // append DIV to the table cell
}

function addRow() {
    var tbl = document.getElementById('myTable'), // table reference
          row = tbl.insertRow(tbl.rows.length),      // append table row
          i;
      // insert table cells to the new row
      for (i = 0; i < tbl.rows[0].cells.length; i++) {
          createCell(row.insertCell(i), i, 'row');
      }
}

function deleteRow(){
    document.getElementById("myTable").deleteRow(0);
}

function addColumn(){
    // append column to the HTML table
    var tbl = document.getElementById('myTable'), // table reference
        i;
    // open loop for each row and append cell
    for (i = 0; i < tbl.rows.length; i++) {
        createCell(tbl.rows[i].insertCell(tbl.rows[i].cells.length), i, 'col');
    }
}

function deleteColumn(){
    var allRows = document.getElementById('myTable').rows;
 for (var i=0; i< allRows.length; i++) {
  if (allRows[i].cells.length > 1) {
   allRows[i].deleteCell(-1); //delete the cell
  } else {
   console.log("You can't delete more columns.");
   return;
  }
 }
}
