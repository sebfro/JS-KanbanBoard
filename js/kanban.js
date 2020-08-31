var order = 1
let adding = false

const error = document.querySelector('.error')
const message = 'Please add a description.'

const add_btn = document.querySelector('.add')
add_btn.addEventListener('click', () => {
  const target = document.querySelector('#requested')
  if (adding === false) {
    adding = true
    target.appendChild(create_item())
  } else {
    error.innerHTML = message
  }
})

const create_item = () => {
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
  const save_btn = document.createElement('button')
  save_btn.innerHTML = 'Save'
  save_btn.addEventListener('click', () => {
    error.innerHTML = ''
    if (input.value != '') {
      order += 1
      item = save_btn.value
      adding = false
    } else {
      error.innerHTML = message
    }
  })
  item.appendChild(save_btn)
}

document.querySelectorAll('.drop').forEach(element => {
  element.addEventListener('drop', (e) => {
    e.preventDefault()
    const id = e.dataTransfer.getData('text')
    e.target.appendChild(document.getElementById(id))
  })
  element.addEventListener('ondragover', (event) => {
    event.preventDefault()
  })
})
