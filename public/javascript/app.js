const btn = document.querySelector('#btn')
const ing = document.querySelector('#ing')



btn.addEventListener('click', addingIng)


function addingIngAndListOut() {
    const listEl = document.querySelector("#input");
    let list = document.createElement("input");
    let ingID = ing.options[ing.selectedIndex].value;
    let ingName = ing.options[ing.selectedIndex].innerText
    list.setAttribute('name', 'ingredients')
    list.setAttribute('value', `${ingID}`)
    list.setAttribute('hidden', '')
    listEl.appendChild(list);
    const listOut = document.querySelector('#ingredList')
    console.log(listOut)
    let list2 = document.createElement('li')
    console.log(list2)
    list2.innerText = ingName
    listOut.appendChild(list2)
  }