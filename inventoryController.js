const data = {inventory: {}};

const addItem = (itemName, quantity) => {
  const currentQuantity = data.inventory[itemName] || 0;
  data.inventory[itemName] = currentQuantity + quantity;
};

// addItem('cheesecake', 0)

module.exports = {data, addItem};