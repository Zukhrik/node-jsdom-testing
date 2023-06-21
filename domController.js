const {addItem, data} = require('./inventoryController')
const updateItemList = inventory => {
  const inventoryList = window.document.getElementById('item-list')
  
  inventoryList.innerHTML = ""
  
  Object.entries(inventory).forEach(([itemName, quantity]) => {
    const listItem = window.document.createElement("li")
    listItem.innerHTML = `${itemName} - Quantity: ${quantity}`
    inventoryList.appendChild(listItem)
    
    if(quantity < 5){
      listItem.style.color = 'red'
    }
    
    inventoryList.appendChild(listItem)
  })
  
  const inventoryContents = JSON.stringify(inventory)
  const p = document.createElement('p')
  p.innerHTML = `The inventory has been updated - ${inventoryContents}`
  document.body.appendChild(p)
}

const handleAddItem = (event) => {
  event.preventDefault()
  
  const {name, quantity} = event.target.elements
  
  addItem(name.value, parseInt(quantity.value, 10))
  
  updateItemList(data.inventory)
}

module.exports = {updateItemList, handleAddItem}