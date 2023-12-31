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

const validItems = ["cheesecake", 'apple pie', "carrot cake"]
const handleItemName = event => {
  const itemName = event.target.value
  
  const errorMessage = window.document.getElementById('error-msg')
  
  if(!itemName || itemName === ""){
    errorMessage.innerHTML = ""
  }else if(!validItems.includes(itemName)){
    errorMessage.innerHTML = `${itemName} is not a valid item`
  }else {
    errorMessage.innerHTML = `${itemName} is valid!`
  }
}

module.exports = {updateItemList, handleAddItem, handleItemName}