const add = document.querySelector("#addItem")
const sort = document.querySelector("#sortItem")
const inputName = document.querySelector("#listInput")
let list = document.getElementById('#itemList')

let tasks = []
function addItem() {
    array.push(inputName.value);
    list.innerHTML = "";
    tasks.forEach((item) => {
        list.innerHTML += `
        <div id="checkbox"><input type="checkbox">`+item+`<button id="xButton">&times</button></div>
        `
    })
}