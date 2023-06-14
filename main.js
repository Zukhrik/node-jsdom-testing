let data = {count: 0};

const incrementCount = () => {
  console.log('start');
  data.count++
  window.document.getElementById("count").innerHTML = data.count
  console.log(data, 'end');
};

const incrementButton = window.document.getElementById("increment-button");
incrementButton.addEventListener("click", incrementCount);


module.exports = { incrementCount, data }