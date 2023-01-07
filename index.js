let value = document.getElementById("count-el");
let count = 0 
function increment (){
    count++
    // document.getElementById("count-el").innerText = count;
    value.innerText = count
}

let saveData = document.getElementById("save-el") 
let savedValue = 0
function save(){
    savedValue = count;
    // console.log(savedValue)
    // saveData.innerText += " "+savedValue+" "+"-"
    strCount = count + " - "
    // saveData.innerText += strCount //as hidden characters are ignored in inner.Text therefore we'll use textContent 
    saveData.textContent += strCount
    count = 0
    value.textContent = count

}
