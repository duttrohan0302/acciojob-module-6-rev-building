// declare the variables
const reset = document.getElementById("reset_button")
const change = document.getElementById("change_button")

const blockId = document.getElementById("block_id")
const colorId = document.getElementById("color_id")

// define functions here
const resetGrid = () => {
    for(let i=1;i<=9;i++){
        const gridItem = document.getElementById(i);
        gridItem.style.backgroundColor = "transparent";
    }
}

const colorGrid = () => {
    if(!blockId.value && !colorId.value && blockId.value<=9 && blockId.value>=0){
        alert("Please Enter valid block id and color id")
    }

    const gridItem = document.getElementById(blockId.value)
    gridItem.style.backgroundColor = colorId.value

    blockId.value=""
    colorId.value=""
}

// add event listeners and call functions
reset.addEventListener("click",resetGrid)
change.addEventListener("click",colorGrid)