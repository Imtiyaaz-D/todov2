const add = document.querySelector("#addItem")
const sort = document.querySelector("#sortItem")
const inputName = document.querySelector("#listInput")
let list = document.getElementById('itemList')

let lists = []
// function addItem() {
//     lists.push(inputName.value);
//     list.innerHTML = "";
//     lists.forEach((item) => {
//         list.innerHTML += `
//         <div id="checkbox"><input type="checkbox">`+item+`<button id="xButton">&times</button></div>
//         `
//     })
// }

add.addEventListener('click', (e)=>{
    list.innerHTML = "";
    lists.push(inputName.value)
    lists.forEach((item) => {
        list.innerHTML += `
        <li id="checkbox"><input type="checkbox">`+item+`<button id="xButton">&times</button></li>
        `
    })
})