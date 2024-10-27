
let sizeInput = 16;

document.getElementById("size").addEventListener("keydown", (event) =>{
    if(event.key === "Enter"){
         sizeInput = parseInt(document.getElementById("size").value);
         if (!isNaN(sizeInput) && sizeInput > 0) { 
            board(sizeInput); 
        } else {
            alert("Please enter a valid positive number.");
        }
    }
 })

function board(sizeInput){
    const  board = document.querySelector(".board");
    board.textContent = "";
    const boardSize = 550;

    for(let i=0; i<sizeInput;i++){
        const row = document.createElement("div");      
        row.style.display = "flex";
        row.style.justifyContent = "center";
        const boxSize = Math.floor(boardSize / (sizeInput));
        row.style.width = boardSize+"px";

        for(let j=0; j<sizeInput;j++){
            let column = document.createElement("div");  
            column.classList.add("column");
            column.style.boxSizing = "border-box";
            column.style.borderStyle = "solid";
            column.style.borderWidth = "1px";
            column.style.height = boxSize+"px";
            column.style.width = boxSize+"px";

            column.addEventListener("mouseover", () => {
                column.style.backgroundColor = "black";
            });
            row.appendChild(column);
        }
        board.appendChild(row);
    }
}  


function applyColor(colorFunction){
    const columns = document.querySelectorAll('.column');
    columns.forEach(column => {
        column.onmouseover = () => {
            column.style.backgroundColor = colorFunction(column);
        };
    });
};

const shade = (column) => {
        let curr = parseFloat(column.dataset.opacity) || 0;
        if(curr < 1){
            curr +=0.1;
            column.style.backgroundColor = `rgba(0, 0, 0, ${curr})`;
            column.dataset.opacity = curr;
        }
        return column.style.backgroundColor;
 }

const rgbFunction = () =>{
    let ran1 = Math.floor(Math.random() *255);
    let ran2 = Math.floor(Math.random() *255);
    let ran3 = Math.floor(Math.random() *255);
    return `rgb(${ran1}, ${ran2}, ${ran3})`;
}
const black = () => "black";
const erase = () => "lightblue";

document.querySelector(".rgb").addEventListener("click", () => applyColor(rgbFunction));
document.querySelector(".black").addEventListener("click", () => applyColor(black));
document.querySelector(".erase").addEventListener("click", () => applyColor(erase));
document.querySelector(".opaque").addEventListener("click", () => applyColor(shade));
document.querySelector(".reset").addEventListener("click", () => board(sizeInput));
board(sizeInput);




