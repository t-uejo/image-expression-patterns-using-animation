window.onload = () => {
  const loader = document.querySelector("#loading-wrapper");

  setTimeout(() => {
    loader.classList.add("completed");
  }, 1500);
};
