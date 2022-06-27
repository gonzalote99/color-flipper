const colors = ["red", "blue", "#002451", "rgb(147 22 188)", "#267DC2"];
const btn = document.getElementById("btn");
const colorCode = document.querySelector(".color-code");


btn.addEventListener("click", function() {
  const randomNumber = getRandomNumber();
  console.log(randomNumber);

  document.body.style.backgroundColor = colors[randomNumber];
  colorCode.textContent = colors[randomNumber];
  colorCode.style.colors = colors[randomNumber];
})

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}