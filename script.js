function ScrollToTop() {
  document.querySelector("header").scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "center",
  });
}

const FadeEm = document.querySelectorAll(".Fade");

function TitleLoad(num) {
  FadeEm.forEach((element) => {
    element.style.opacity = num + "%";
  });
  document.querySelector("body").style.opacity = num + "%";
}
