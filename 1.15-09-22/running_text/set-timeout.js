const inputButton = document.getElementById("input")
const submitButton = document.getElementById("submit")


const myFunction = (msg) => {
    document.getElementById("root").innerHTML = "Written after some time with message " + msg
}

// setTimeout(()=>myFunction("Set timeout msg"),5000)
// setTimeout(()=>{
//     document.getElementById("root").innerHTML = "Another msg"
// },5000)
// setTimeout(function(){
//     document.getElementById("root").innerHTML = "Another msg without ES6"
// },5000)

submitButton.addEventListener("click",()=>{
    const timer = setTimeout(()=>myFunction("-- Dummy msg --"),5000)

    const dontRunTimer = inputButton.value==="y" ? true : false;

    if(dontRunTimer){
        clearTimeout(timer)
    }

})



// setTimeout(myFunction(),5000) // wrong