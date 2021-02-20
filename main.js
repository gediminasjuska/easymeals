// 4 CARDS SECTION
const title = document.querySelectorAll(".recipe-title");

Array.from(title).forEach((item) => {
  item.addEventListener("mouseover", (e) => {
    const cardImage = e.target.parentElement.firstElementChild;

    cardImage.style.backgroundPositionX = "0px";
  });
});

Array.from(title).forEach((item) => {
  item.addEventListener("mouseout", (e) => {
    const cardImage = e.target.parentElement.firstElementChild;

    cardImage.style.backgroundPositionX = "-6px";
  });
});

const img = document.querySelectorAll(".recipe-card-img");
// 8 CARDS SECTION
Array.from(img).forEach((item) => {
  item.addEventListener("mouseover", (e) => {
    const cardImageOff = e.target.parentElement.firstElementChild;

    cardImageOff.style.backgroundPositionX = "0px";
  });
});

Array.from(img).forEach((item) => {
  item.addEventListener("mouseout", (e) => {
    const cardImageOff = e.target.parentElement.firstElementChild;

    cardImageOff.style.backgroundPositionX = "-6px";
  });
});
// 5 CARDS SECTION
const imgFive = document.querySelectorAll(".container-recipes-2-1-1-title");

Array.from(imgFive).forEach((item) => {
  item.addEventListener("mouseover", (e) => {
    const cardFive = e.target.parentElement.parentElement.firstElementChild;
    cardFive.style.backgroundPositionX = "0px";
  });
});

Array.from(imgFive).forEach((item) => {
  item.addEventListener("mouseout", (e) => {
    const cardFive = e.target.parentElement.parentElement.firstElementChild;
    cardFive.style.backgroundPositionX = "-6px";
  });
});
// BIG CARD ----------------
const img3 = document.querySelectorAll(".container-recipes-2-2-img");
Array.from(img3).forEach((item) => {
  item.addEventListener("mouseover", (e) => {
    const cardImageOff = e.target.parentElement.firstElementChild;

    cardImageOff.style.backgroundPositionX = "0px";
  });
});

Array.from(img3).forEach((item) => {
  item.addEventListener("mouseout", (e) => {
    const cardImageOff = e.target.parentElement.firstElementChild;

    cardImageOff.style.backgroundPositionX = "-6px";
  });
});

const img4 = document.querySelectorAll(".container-recipes-2-2-title");
Array.from(img4).forEach((item) => {
  item.addEventListener("mouseover", (e) => {
    const cardFive =
      e.target.parentElement.parentElement.parentElement.firstElementChild;
    cardFive.style.backgroundPositionX = "0px";
  });
});

Array.from(img4).forEach((item) => {
  item.addEventListener("mouseout", (e) => {
    const cardFive =
      e.target.parentElement.parentElement.parentElement.firstElementChild;
    cardFive.style.backgroundPositionX = "-6px";
  });
});

const img2 = document.querySelectorAll(".container-recipes-2-sides-img");
Array.from(img2).forEach((item) => {
  item.addEventListener("mouseover", (e) => {
    const cardImageOff = e.target.parentElement.firstElementChild;

    cardImageOff.style.backgroundPositionX = "0px";
  });
});

Array.from(img2).forEach((item) => {
  item.addEventListener("mouseout", (e) => {
    const cardImageOff = e.target.parentElement.firstElementChild;

    cardImageOff.style.backgroundPositionX = "-6px";
  });
});

// BACK TO TOP BUTTON -----------------
const backToTopButton = document.querySelector(".scroll-to-top");

window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
  if (window.pageYOffset > 1000) {
    backToTopButton.style.display = "flex";
  } else {
    backToTopButton.style.display = "none";
  }
}

backToTopButton.addEventListener("click", backToTop);

function backToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
