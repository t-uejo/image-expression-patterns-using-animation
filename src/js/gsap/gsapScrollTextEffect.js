import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  const els = document.querySelectorAll(".js-text-split");

  els.forEach((el) => {
    const str = el.innerHTML.trim().split("");
    el.innerHTML = str.reduce((accu, curr) => {
      curr = curr.replace(" ", "&nbsp");
      return accu + `<span class="char">${curr}</span>`;
    }, "");
  });

  gsap.set(".js-text-split .char", {
    opacity: 0.3,
    scale: 0.7,
  });

  els.forEach((el) => {
    gsap.to(el.children, {
      scrollTrigger: {
        trigger: el,
        start: "top bottom-=20%",
        end: "bottom bottom-=20%",
        scrub: true,
        // markers: true,
      },
      opacity: 1,
      scale: 1,
      stagger: 0.03,
      ease: "poser2.out",
    });
  });
});
