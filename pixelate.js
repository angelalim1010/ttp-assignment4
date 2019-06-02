function addRow() {
    let tbl = document.getElementById('myTable') // table reference
    let rows = Array.from(document.getElementsByTagName("tr"));
    let newRow = document.createElement("tr");
      for(let i =0; i < rows[0].childElementCount; i++){
        newRow.appendChild(document.createElement("td"));
    }
    tbl.appendChild(newRow);
      console.log("row created" + document.getElementById("testPixel"));

  }

function deleteRow(){
    document.getElementById("myTable").deleteRow(1);
}

function addColumn(){
    let rows = document.getElementsByTagName('tr');
   for(let row of rows){
       let newCol = document.createElement("td");
       row.appendChild(newCol);
   }
}

function deleteColumn(){
    let allRows = document.getElementById('myTable').rows;
     for (let i=0; i< allRows.length; i++) {
          if (allRows[i].cells.length > 1) {
              allRows[i].deleteCell(-1); //delete the cell
         }
         else {
              console.log("You can't delete more columns.");
           return;
         }
    }
}

function setColor(obj,color){
    obj.style.backgroundColor = color;
}

function changeColor(){
    let isDrawing = false;
    const cells = document.getElementsByTagName("td");
    for(let cell of cells){

    cell.addEventListener('mousedown',event => {
        isDrawing = true;
        console.log(cell);
        console.log(cells.length);
        setColor(cell,"Purple");
    });

    cell.addEventListener('mousemove',event => {
        if(isDrawing){
            setColor(cell,"Purple");
        }
    });

    cell.addEventListener('mouseup',event => {
        if(isDrawing){
            isDrawing = false;
        }
    });
}

}

changeColor();
