const {addItem, data} = require('./inventoryController')
const {updateItemList, handleAddItem, handleItemName} = require('./domController')

const form = document.getElementById('add-item-form')
form.addEventListener('submit', handleAddItem)

const itemInput = document.querySelector(`input[name='name']`)
itemInput.addEventListener("input", handleItemName)

addItem('cheesecake', 0)
addItem('apple pie', 0)
addItem('carrot cake', 0)

updateItemList(data.inventory)