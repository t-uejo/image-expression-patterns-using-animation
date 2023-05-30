window.addEventListener("load", () => {
  const cb = function (el, isIntersecting) {
    if (isIntersecting) {
      el.classList.add("is-visible");
    } else {
      el.classList.remove("is-visible");
    }
  };
  const so = new ScrollObserver(".js-scroll-trigger", cb);
});

class ScrollObserver {
  constructor(els, cb, options) {
    this.els = document.querySelectorAll(els);
    const defaultOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0,
      once: true,
    };
    this.cb = cb;
    this.options = Object.assign(defaultOptions, options);
    this.once = this.options.once;
    this._init();
  }
  _init() {
    const callback = function (entries, observer) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.cb(entry.target, true);
          if (this.once) {
            observer.unobserve(entry.target);
          }
        } else {
          this.cb(entry.target, false);
        }
      });
    };

    this.io = new IntersectionObserver(callback.bind(this), this.options);

    this.els.forEach((el) => this.io.observe(el));
  }

  destory() {
    this.io.disconnect();
  }
}
