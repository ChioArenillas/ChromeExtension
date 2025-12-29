
// si tienes en el HTML del botón un onclick="saveLead"

// function saveLead() {
//     console.log("Button clicked from onclick attribute")
// }
 
let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function () {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    renderLeads()
})

function renderLeads(){
let listItems= ""
for (let i = 0; i < myLeads.length; i++) {
    listItems += `
    <li>
        <a target='_blank' href='${myLeads[i]}'>
            ${myLeads[i]}
        </a>
    </li>`
}
ulEl.innerHTML= listItems //haciendo fuera del for el .innerHTML solo lo usas una vez, si estuviera dentro del loop se usaría 3 veces, como el uso del DOM tiene un coste, es mejor usarlo solo una vez
}


 


