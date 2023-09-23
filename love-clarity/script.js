const clarityMenu = document.querySelector(".menu");
const clarityMenuItems = document.querySelector(".menu").querySelectorAll("li");
const loveImages = document.querySelector(".love").querySelectorAll("img");
const textBtn = document.querySelector(".textBtn");

const clarityList = [
  {
    level: 1,
    clarity: "144p",
  },
  {
    level: 2,
    clarity: "360p",
  },
  {
    level: 3,
    clarity: "480p",
  },
  {
    level: 4,
    clarity: "720p",
  },
  {
    level: 5,
    clarity: "1080p",
  },
];

textBtn.addEventListener("click", () => {
  if ([...clarityMenu.classList].includes("active")) {
    clarityMenu.classList.remove("active");
  } else {
    clarityMenu.classList.add("active");
  }
});

clarityMenuItems.forEach((item) =>
  item.addEventListener("click", (evevt) => {
    clarityMenu.classList.remove("active");
    const { lovelevel, loveclarity } = evevt.target.dataset;
    // console.log(`evevt.target.dataset:`, evevt.target.dataset);
    [...loveImages].forEach((image) => (image.className = ""));
    [...loveImages][lovelevel - 1].className = "active beat";
    textBtn.innerText = loveclarity;
  })
);
