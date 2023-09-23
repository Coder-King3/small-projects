const cardItems = document.querySelectorAll(".card");
cardItems.forEach((card) => {
  card.addEventListener("click", () => {
    for (let i = 0; i < cardItems.length; i++) {
      cardItems[i].classList.remove("active");
    }
    card.classList.add("active");
  });
});
