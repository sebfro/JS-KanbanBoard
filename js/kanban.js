var order = 1
let adding = false

const error = document.querySelector('.error')
const message = 'Please add a description.'

const addBtn = document.querySelector('.add')
addBtn.addEventListener('click', () => {
  const target = document.querySelector('#requested')
  if (adding === false) {
    adding = true
    target.appendChild(createItem())
  } else {
    error.innerHTML = message
  }
})

const createItem = () => {
  var item = document.createElement('div')
  item.classList.add('item')
  item.id = 'item-' + order
  item.draggable = true
  item.addEventListener('dragstart', (event) => {
    return event.dataTransfer.setData('text', event.target.id)
  })
  item.addEventListener('dragend', (e) => {
    return e.dataTransfer.clearData()
  })
  const input = document.createElement('input')
  item.appendChild(input)
  const saveBtn = document.createElement('button')
  saveBtn.innerHTML = 'Save'
  saveBtn.addEventListener('click', () => {
    error.innerHTML = ''
    if (input.value !== '') {
      order += 1
      item.innerHTML = input.value
      adding = false
    } else {
      error.innerHTML = message
    }
  })
  item.appendChild(saveBtn)
  return item
}

document.querySelectorAll('.drop').forEach(element => {
  element.addEventListener('drop', event => {
    event.preventDefault()
    const id = event.dataTransfer.getData('text')
    event.target.appendChild(document.getElementById(id))
  })
  element.addEventListener('dragover', event => event.preventDefault())
})
