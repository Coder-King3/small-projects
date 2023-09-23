const circleItems = document.querySelectorAll(".circle");
const progress = document.querySelector(".progress");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
// active
let stepIndex = 0;
const maxStepIndex = circleItems.length - 1;
const stepWidth = 100 / maxStepIndex;

prev.addEventListener("click", () => {
  stepIndex--;
  if (stepIndex <= 0) {
    stepIndex = 0;
  }
  // console.log("prev", stepIndex);
  update();
});
next.addEventListener("click", () => {
  stepIndex++;
  if (stepIndex >= maxStepIndex) {
    stepIndex = maxStepIndex;
  }
  // console.log("next", stepIndex);
  update();
});

const update = () => {
  // circle
  circleItems.forEach((circle, idx) => {
    if (idx <= stepIndex) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  // progress
  progress.style.width = `${stepIndex * stepWidth}%`;

  // btn
  if (stepIndex == 0) {
    prev.disabled = true;
  } else if (stepIndex == maxStepIndex) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
};
