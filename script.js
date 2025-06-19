document.addEventListener("DOMContentLoaded", function () {
  const words = [
    "Ayansh Thakur ✦ Portfolio",
    "Programmer | Poet | Novelist",
    "Dreamer. Doer. Dominator."
  ];
  let i = 0;
  let j = 0;
  let currentWord = "";
  let isDeleting = false;
  const speed = 100;
  const typingElement = document.querySelector(".typing");

  function type() {
    if (i < words.length) {
      if (!isDeleting && j <= words[i].length) {
        currentWord = words[i].substring(0, j++);
        typingElement.textContent = currentWord;
        setTimeout(type, speed);
      } else if (isDeleting && j >= 0) {
        currentWord = words[i].substring(0, j--);
        typingElement.textContent = currentWord;
        setTimeout(type, speed / 2);
      } else if (!isDeleting && j > words[i].length) {
        isDeleting = true;
        setTimeout(type, 1000);
      } else if (isDeleting && j < 0) {
        isDeleting = false;
        i++;
        if (i === words.length) i = 0;
        setTimeout(type, 500);
      }
    }
  }

  type();
});
