//document.getElementById("count-el").innerText = 0

// initatite the count as0
//listern for clicks on the increment buttop
//increment the count variable when the button is clicked
//change the count-el in the HTML REFLECT THE NEW COUNT
//let lap1 = 34
//let lap2 = 33
//let lap3 = 36

//function sumlap() {
  //  let laptime = lap1 + lap2 + lap3
    //console.log(laptime )
//}
//sumlap()
//let LapsCompleted = 0
//console.log(LapsCompleted)
//console.log(countEl)
//let name = "Everton Musiyiwa"
//let greeting = "Welcome back "

//welcomeEl.innerText = greeting + name

//welcomeEl.innerText += "👋"
//let welcomeEl = document.getElementById("welcome-el")
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")

let count = 0
console.log(saveEl)

function increment() {
    count = count + 1
    countEl.textContent = count
}
function save() {
  let countStr = count + " - "
  saveEl.textContent += countStr
  countEl.textContent = 0
  count = 0


  console.log(count)
    
}



