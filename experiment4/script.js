const textarea = document.querySelector("#textarea");
const counter = document.querySelector("#counter");

textarea.addEventListener("input", (e) => {
  const currentLength = e.target.value.length;
  const maxLength = e.target.maxLength;
  counter.innerText = currentLength;
  if (currentLength >= maxLength) {
    counter.style.color = "red";
  } else {
    counter.style.color = "black";
  }
});
