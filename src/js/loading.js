window.addEventListener("load", () => {
  const loader = document.querySelector("#loading-wrapper");

  setTimeout(() => {
    loader.classList.add("completed");
  }, 500);
});
