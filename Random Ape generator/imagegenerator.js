function generate() {
  let con = document.getElementById("container");

  let image = document.createElement("img");

  con.style.border = '1px solid white';


  let num = 1;

  let numb = Math.floor(Math.random() * 10);

  image.src = `boredapes/${numb}.png`;

  image.style.borderRadius = "30px";
  image.style.border = "2px solid yellow";

  con.appendChild(image);

  document.getElementById("reset").style.display = "block";

}

function reset() {
  let con = document.getElementById("container");

  con.innerHTML = "";

  document.getElementById("reset").style.display = "none";

  document.getElementById("container").style.border = "none";
}





