let body = document.getElementById("body");
let tree = document.createElement("ul");
let rows = prompt("Enter the number of rows: ");//21 is the sweet spot

for (let i = 0; i < rows; i++) {
  let stars = `<span class="star">*</span>`;
  if (i > 0) {
    for(let j = 0; j< i* 2 -1; j++){
      stars += "|"
    }
    stars+= `<span class="star">*</span>`
  }
  let row = document.createElement("li");
  row.innerHTML = stars;
  tree.appendChild(row);
}
body.appendChild(tree);

let firstStar = document
  .querySelectorAll(".star")[0]
  .classList.add("firstStar");
