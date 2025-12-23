
// si tienes en el HTML del botón un onclick="saveLead"

// function saveLead() {
//     console.log("Button clicked from onclick attribute")
// }
 
let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"]
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function () {
    myLeads.push(inputEl.value)
    console.log(myLeads)
})

for (let i = 0; i < myLeads.length; i++) {
    ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"

    //OTRA FORMA DE HACERLO:
    //const li = document.createElement("li") - Crear el elemento
    //li.textContent = myLeads[i] - set textcontent
    //ulEl.append(li) - append to ul
}




