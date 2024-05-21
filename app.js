const blockSize = 16
const containerSize = 600

const blockContainer = document.querySelector(".block-container")

function createDefaultGrid(grid=blockSize) {
    for (i=0; i < grid*grid; i++) {
        let block = document.createElement("div")
        block.setAttribute("class", "block-item")
        blockContainer.appendChild(block)

        let blockSizes = document.querySelectorAll(".block-item")
        let blockSize = blockSizes[blockSizes.length - 1]
        blockSize.setAttribute("style", "width:"+containerSize/grid+"px; height:"+containerSize/grid+"px;")

        
    }
}


function colorBlackMouseOver() {
    const blocks = document.querySelectorAll(".block-item")

    blocks.forEach(block => {
        block.addEventListener('mouseover', () => {
            block.classList.add("padd")
        })
    });
}

function inputFind() {
    const inputField = document.querySelector(".input-grid")
    let value = Number(inputField.value)

    if (typeof value === 'string') {
        alert("Send a number not string")
    }
    return value
}

function Reset() {
    const reset = document.querySelector(".reset")

    reset.addEventListener('click', (event) => {
        blockContainer.innerHTML = ""
        createDefaultGrid();
        colorBlackMouseOver()
    })
}

function Sumbit() {
    
    const sumbit = document.querySelector(".sumbit")
    sumbit.addEventListener('click', (event) => {
        let value = inputFind()
        
        if (value == "") {
            alert("Input should be number")
            value = blockSize
        }
        blockContainer.innerHTML = ""
        createDefaultGrid(value)
        colorBlackMouseOver()
    })
    
}

createDefaultGrid()
colorBlackMouseOver()
Sumbit()
Reset()
