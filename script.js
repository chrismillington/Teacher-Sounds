const teacherNoise = ["bell", "excused", "goodMorning"];
const sounds = document.querySelector(".sounds");
document.addEventListener("DOMContentLoaded", init);

function init() {
  teacherNoise.forEach((item) => {
    let img = document.createElement("img");
    img.setAttribute("class", "noise " + item);
    img.src = "images/" + item + ".png";
    img.addEventListener("click", () => {
      playit(item);
    });
    sounds.appendChild(img);
  });

  function playit(name) {
    let activeClass = document.querySelector("." + name);
    let sound1 = new Audio("sound/" + name + ".wav");
    sound1.play();
    activeClass.classList.add("active");
    setTimeout(() => {
      activeClass.classList.remove("active");
      sound1.pause();
    }, 1350);
  }
}
