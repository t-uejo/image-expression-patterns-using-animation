import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  document.querySelectorAll(".js-scrub-trigger").forEach((el) => {
    const body = document.body;
    // const img = el.querySelector(".js-scrub-trigger img");
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: body,
        start: "top top",
        end: "bottom bottm",
        scrub: true,
      },
    });
    tl.to(el, { y: -80, ease: "none", duration: 1.5 });
  });
});
