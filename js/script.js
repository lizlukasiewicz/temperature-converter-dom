window.addEventListener("DOMContentLoaded", () => {


let inputVal = document.querySelector("#field") 
const access = document.getElementById("access")
let input = document.getElementById("input")
let button = document.getElementById("button")

document.querySelector("#submit").addEventListener("click", () => {
    let tempToConvert = inputVal.value
    let farenButton = document.querySelector("#fahrenheit").checked
    let celsiusButton = document.querySelector("#celsius").checked
    let resultsDiv = document.querySelector("#results")
    
    
    if (farenButton) {
        let fToCelsius = ((tempToConvert - 32) * 5556e-4)
        resultsDiv.innerText = fToCelsius
    } else if (celsiusButton) {
        let cToFahren = ((tempToConvert * 18e-1)+ 32)
        resultsDiv.innerText = cToFahren
    } else {
        resultsDiv.innerText = " "
    }
    resultsDiv.appendChild(tempToConvert.innerText)
})

document.getElementById("clear").addEventListener("click", () => {
    let resultsDiv = document.querySelector("#results")
    resultsDiv.innerText = " "
})
access.setAttribute("tabindex", "0")
access.addEventListener("click", function(e){
        console.log(e, "👾")
        console.log(e.pointerId, "🐝")
})
const div = document.querySelectorAll("div")
for(let i=0; i < div.length; i++){
    console.log(div[i], "🎃")
    let att = div[i].attributes
    for (let j=0; j < att.length; j++){
    if(att[j].value === "myFunction()"){
        div[i].setAttribute("tabindex", "0")
    }
    }
}
//document.querySelectorAll("div")
access.onkeydown = function(e) {
    let kc = e.keyCode
    if (kc === 13){
    console.log(e, "👀")
    console.log(e.target.value)
    }
}
const heading = document.querySelectorAll("h1, h2");
for (let i =0; i < heading.length; i++) {
        if(heading[i].innerText === ""){
            heading[i].setAttribute("role", "presentation");
        }
}

// document.getElementById("submitted").addEventListener("click", () => {
//     let first = document.querySelector("#first")
//     let second = document.querySelector("#second")
//     let clock
//     let num1 = first.value
//     let num2 = second.value
//     let total = +num1 + +num2
//     console.log(total, "👾")
//     clock = setInterval(tick, 1000)
//     function tick() {
//         total--
//         console.log(`⏰ Time: ${total}`)
//         if(total === 0){
//             stopInterval()
//             console.log("all done")
//         }
//     }
//     function stopInterval(){
//         clearInterval(tick)
//         clearInterval(clock)
//     }
// } )
function countdown(num1, num2) {
    let clock
    const first = num1.toFixed(0)
    const second = num2.toFixed(0)
    let total = Math.abs(first) + Math.abs(second)
    clock = setInterval(tick, 1000)
    function tick() {
        total--
        console.log(`countdown: ${total}`)
        if(total === 0) {
            stopInterval()
        }
    }
    function stopInterval() {
        clearInterval(tick)
        clearInterval(clock)
    }
    
}
//countdown(10, 10)
    



})

