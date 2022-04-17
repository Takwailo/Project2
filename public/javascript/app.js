const btn = document.querySelector('#btn')
const ing = document.querySelector('#ing')
const btn2 = document.querySelector('#btn2')
const method = document.querySelector('#method')

btn && btn.addEventListener('click', addingIngsAndListOut)
btn2 && btn2.addEventListener('click', addingMethodsAndListOut)

function addingIngsAndListOut() {
    const listEl = document.querySelector("#input");
    let list = document.createElement("input");
    let ingID = ing.options[ing.selectedIndex].value;
    let ingName = ing.options[ing.selectedIndex].innerText
    list.setAttribute('name', 'ingredients')
    list.setAttribute('value', `${ingID}`)
    list.setAttribute('hidden', '')
    console.log(list)
    listEl.appendChild(list);
    const listOut = document.querySelector('#ingredList')
    let list2 = document.createElement('li')
    list2.innerText = ingName
    listOut.appendChild(list2)
  }

  function addingMethodsAndListOut() {
    const listEl = document.querySelector("#input");
    let list = document.createElement("input");
    let methodStep = method.value
    console.log(methodStep)
    list.setAttribute('name', 'method')
    list.setAttribute('value', `${methodStep}`)
    list.setAttribute('hidden', '')
    listEl.appendChild(list);
    const listOut = document.querySelector('#methodSteps')
    let list2 = document.createElement('li')
    list2.innerText = methodStep
    listOut.appendChild(list2)
  }


