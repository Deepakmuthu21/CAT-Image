// getting elements
let image = document.getElementById("img");
let btn = document.getElementById("btn");

//function to display elements

let result = fetch("https://api.thecatapi.com/v1/images/search");
result
  .then((data) => data.json())
  .then((res) => {
    //console.log(res[0].url);
    image.setAttribute("src", res[0].url);
  })
  .catch((err) => console.log(err));

btn.addEventListener("click", () => {
  window.location.reload();
});
