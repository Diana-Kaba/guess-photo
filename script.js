"use strict";
window.onmouseover = function () {
  //   let image1 = document.getElementById("one");
  //   image1.onclick = showImageOne;
  //   let image2 = document.getElementById("two");
  //   image2.onclick = showImageTwo;
  let images = document.getElementsByTagName("img");
  for (let i = 0; i < images.length; i++) {
    images[i].onmouseover = showAnswer;
    // images[i].onmouseout = showBlur;
  }
};

function showAnswer(event) {
  let image = event.target;
  let name = image.id;
  name = name + ".jpg";
  image.src = "images/" + name;
  setTimeout(showBlur, 2000, image);
  // let n = { pic1: "one", pic2: "two" };
  // let wind = prompt("Введите навание картины:");
  // if (wind == n.pic1 || n.pic2) {
  //   alert("Верно!");
  //   images = showAnswer;
  // } else {
  //   alert("Не верно!");
  //   images = showBlur;
  // }
}

function showBlur(image) {
  //let image = event.target;
  let name = image.id;
  name = name + "blur.jpg";
  image.src = "images/" + name;
}

// function showImageOne() {
//   let image = document.getElementById("one");
//   image.src = "images/one.jpg";
// }

// function showImageTwo() {
//   let image = document.getElementById("two");
//   image.src = "images/two.jpg";
// }
