// myBtn = document.getElementById('btn');
// myBtn.addEventListener('click', e => {
//     myBtn.innerText = `Text Changed`
// })

let container = document.getElementById("container");
let btn = document.getElementById("btn");
let inputCount = 0;

btn.addEventListener("click", (e) => {
  if (e.target) {
    inputCount++;
    let input = document.createElement("input");
    input.classList.add("input");
    container.append(input);
    e.target.innerText = "Add Another Input Field";
    
    if (inputCount === 2) {
        e.target.style.display = "none";
        let submitBtn = document.createElement("button");
        submitBtn.innerText = "Submit";
        submitBtn.classList.add("btn");
        container.append(submitBtn);
    }
  }
});
