const {addItem, data} = require('./inventoryController')
const {updateItemList, handleAddItem} = require('./domController')

const form = document.getElementById('add-item-form')
form.addEventListener('submit', handleAddItem)

// addItem('cheesecake', 0)
// addItem('apple pie', 0)
// addItem('carrot cake', 0)

updateItemList(data.inventory)