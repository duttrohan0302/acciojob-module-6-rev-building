// declare & define variables

const smallCups = document.querySelectorAll(".cup-small")
const liters = document.getElementById("liters")
const percentage = document.getElementById("percentage")
const remaining = document.getElementById("remaining")

const updateBigCup = () => {
    const fullCups = document.querySelectorAll(".cup-small.full").length

    const totalCups = smallCups.length

    if(fullCups===0){
        percentage.style.visibility = 'hidden'
        percentage.style.height = 0
    }else{
        percentage.style.visibility = 'visible'
        percentage.innerText = `${fullCups/totalCups *100}%`
        percentage.style.height = `${fullCups/totalCups * 330}px`
    }

    if(fullCups===totalCups){
        remaining.style.visibility = 'hidden'
        remaining.style.height = 0
    }else{
        remaining.style.visibility = 'visible'
        liters.innerText = `${2-(250*fullCups)/1000}`
    }
}

const highlightCups = index => {
    // if 8th cup is full and you're trying to click on it again, it should get empty
    // only 7 cups should be full
    if(index===(smallCups.length-1) && smallCups[index].classList.contains("full")){
        index--;
    }
    else if(smallCups[index].classList.contains("full") && !smallCups[index].nextElementSibling.classList.contains("full")){
        index--;
    }
    smallCups.forEach((cup, localIndex)=>{
        if(localIndex<=index){
            cup.classList.add("full")
        }else{
            cup.classList.remove("full")
        }
    })

    updateBigCup()
}

smallCups.forEach((cup,index)=>{
    cup.addEventListener("click",()=> highlightCups(index))
})

