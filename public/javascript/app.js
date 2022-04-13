const btn = document.querySelector('#btn')
const ing = document.querySelector('#ing')
// const ingl = document.querySelector('#listOfIng')


btn.addEventListener('click', addingIng)

// function pushToArray(){
//     ingList.push(ing.options[ing.selectedIndex].innerText)
//     console.log(ingList)
//     console.log (ingl.innerText)
//     ingl.innerText = ingList
// }


function addingIng() {
    const listEl = document.querySelector("#input");
    let list = document.createElement("input");
    let ingID = ing.options[ing.selectedIndex].value;
    list.setAttribute('name', 'ingredients')
    list.setAttribute('value', `${ingID}`)
    list.setAttribute('hidden', '')
    listEl.appendChild(list);
  }