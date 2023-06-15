const fs = require("fs");
const {updateItemList} = require("./domController");
const {getByText, screen} = require("@testing-library/dom")

beforeEach(() => {
  document.body.innerHTML = fs.readFileSync("./index.html");
});

describe("updateItemList", function() {
  test("update the DOM with the inventory items", () => {
    const inventory = {
      cheesecake: 5,
      "apple pie": 2,
      "carrot cake": 6
    };
    updateItemList(inventory);
    
    const itemList = document.getElementById("item-list");
    expect(itemList.childNodes).toHaveLength(3);
    
    expect(getByText(itemList, "cheesecake - Quantity: 5")).toBeTruthy()
    expect(getByText(itemList, "apple pie - Quantity: 2")).toBeTruthy()
    expect(getByText(itemList, "carrot cake - Quantity: 6")).toBeTruthy()
  });
  
  test("adding paragraph indicating what was update", () => {
    const inventory = {cheesecake: 5, "apple pie": 2};
    updateItemList(inventory);
    
    expect(screen.getByText(`The inventory has been updated - ${JSON.stringify(inventory)}`)).toBeTruthy()
  });
});