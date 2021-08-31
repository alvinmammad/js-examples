let count = 0;
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");
btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    console.log(e.currentTarget.classList);
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      count--;
      value.textContent = count;
      value.style.transition = "all .5s ease";
    } else if (styles.contains("increase")) {
      count++;
      value.textContent = count;
      value.style.transition = "all .5s ease";
    } else {
      count = 0;
      value.textContent = count;
      value.style.transition = "all .5s ease";
    }
    if (count < 0) {
      value.style.color = "red";
    } else if (count > 0) {
      value.style.color = "green";
    } else {
      value.style.color = "#222";
    }
    value.textContent = count;
    value.style.transition = "all .5s ease";
  });
});
