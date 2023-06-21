const {screen, getByText} = require("@testing-library/dom");
const fs = require("fs");

const initialHTML = fs.readFileSync("./index.html");

beforeEach(() => {
  document.body.innerHTML = initialHTML
  
  jest.resetModules();
  require("./main.js");
});


describe("main.js", () => {
  test("adding items through the form", () => {
    screen.getByPlaceholderText("Item name").value = "cheesecake";
    screen.getByPlaceholderText("Quantity").value = "6";
    
    const event = new Event("submit");
    const form = document.getElementById("add-item-form");
    form.dispatchEvent(event);
    
    const itemList = document.getElementById("item-list");
    expect(getByText(itemList, "cheesecake - Quantity: 6")).toBeInTheDocument();
  });
});