const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Atualiza o botão ativo
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    const selectedFilter = button.dataset.filter;

    // Mostra ou esconde os cards conforme a categoria
    projectCards.forEach((card) => {
      const categories = card.dataset.category.split(" ");
      if (selectedFilter === "todos" || categories.includes(selectedFilter)) {
        card.classList.remove("hidden");
      } else {
        card.classList.add("hidden");
      }
    });
  });
});