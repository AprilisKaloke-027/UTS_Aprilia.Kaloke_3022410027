// ======================
// NAVBAR SCROLL
// ======================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

  navbar.classList.toggle(
    "scrolled",
    window.scrollY > 50
  );

});

// ======================
// CUSTOM CURSOR
// ======================

const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {

  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";

});

// ======================
// REVEAL ANIMATION
// ======================

const reveals = document.querySelectorAll(".reveal");

function revealElements() {

  reveals.forEach((el) => {

    const top = el.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (top < windowHeight - 100) {

      el.classList.add("active");

    }

  });

}

window.addEventListener(
  "scroll",
  revealElements
);

revealElements();

// ======================
// COUNTER ANIMATION
// ======================

const counters =
document.querySelectorAll(".counter");

counters.forEach((counter) => {

  const updateCounter = () => {

    const target =
    +counter.getAttribute("data-target");

    const count =
    +counter.innerText;

    const speed = 100;

    const increment =
    target / speed;

    if (count < target) {

      counter.innerText =
      Math.ceil(count + increment);

      setTimeout(updateCounter, 20);

    } else {

      counter.innerText = target;

    }

  };

  updateCounter();

});

// ======================
// HAMBURGER MENU
// ======================

const hamburger =
document.querySelector(".hamburger");

const navLinks =
document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {

  navLinks.classList.toggle("active");

});

// ======================
// CLOSE MENU AFTER CLICK
// ======================

document.querySelectorAll(
  ".nav-links a"
).forEach((link) => {

  link.addEventListener("click", () => {

    navLinks.classList.remove("active");

  });

});

// ======================
// DARK MODE
// ======================

const themeToggle =
document.getElementById("themeToggle");

const body = document.body;

themeToggle.addEventListener("click", () => {

  body.classList.toggle("light");

  if(body.classList.contains("light")){

    themeToggle.innerHTML =
    `<i class="fa-solid fa-sun"></i>`;

  }else{

    themeToggle.innerHTML =
    `<i class="fa-solid fa-moon"></i>`;

  }

});

// ======================
// PARALLAX PHOTO
// ======================

const photoFrame =
document.querySelector(
  ".parallax-photo-frame"
);

photoFrame.addEventListener(
  "mousemove",
  (e) => {

    const rect =
    photoFrame.getBoundingClientRect();

    const x =
    e.clientX - rect.left;

    const y =
    e.clientY - rect.top;

    const rotateY =
    ((x / rect.width) - 0.5) * 20;

    const rotateX =
    ((y / rect.height) - 0.5) * -20;

    photoFrame.style.transform = `
      perspective(1000px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale(1.03)
    `;

  }
);

photoFrame.addEventListener(
  "mouseleave",
  () => {

    photoFrame.style.transform = `
      perspective(1000px)
      rotateX(0deg)
      rotateY(0deg)
      scale(1)
    `;

  }
);

// ======================
// RIPPLE EFFECT BUTTON
// ======================

const buttons =
document.querySelectorAll(".ripple");

buttons.forEach((button) => {

  button.addEventListener(
    "click",
    function(e){

      const circle =
      document.createElement("span");

      const diameter =
      Math.max(
        this.clientWidth,
        this.clientHeight
      );

      const radius =
      diameter / 2;

      circle.style.width =
      circle.style.height =
      `${diameter}px`;

      circle.style.left =
      `${e.clientX -
      this.offsetLeft -
      radius}px`;

      circle.style.top =
      `${e.clientY -
      this.offsetTop -
      radius}px`;

      circle.classList.add("ripple-effect");

      const ripple =
      this.getElementsByClassName(
        "ripple-effect"
      )[0];

      if(ripple){

        ripple.remove();

      }

      this.appendChild(circle);

    }

  );

});

// ======================
// ACTIVE NAV LINK
// ======================

const sections =
document.querySelectorAll("section");

const navItems =
document.querySelectorAll(
  ".nav-links a"
);

window.addEventListener(
  "scroll",
  () => {

    let current = "";

    sections.forEach((section) => {

      const sectionTop =
      section.offsetTop;

      if(
        pageYOffset >=
        sectionTop - 200
      ){

        current =
        section.getAttribute("id");

      }

    });

    navItems.forEach((a) => {

      a.classList.remove("active-link");

      if(
        a.getAttribute("href") ===
        `#${current}`
      ){

        a.classList.add(
          "active-link"
        );

      }

    });

  }
);

// ======================
// CONTACT FORM
// ======================

const contactForm =
document.getElementById("contactForm");

contactForm.addEventListener(
  "submit",
  (e) => {

    e.preventDefault();

    alert(
      "Message successfully sent ✨"
    );

    contactForm.reset();

  }
);

// ======================
// SKILL BAR ANIMATION
// ======================

const progressBars =
document.querySelectorAll(".progress-fill");

function animateBars(){

  progressBars.forEach((bar) => {

    const value =
    bar.style.width;

    bar.style.width = "0";

    setTimeout(() => {

      bar.style.width = value;

    }, 300);

  });

}

window.addEventListener(
  "load",
  animateBars
);

// ======================
// FLOATING BLOBS ANIMATION
// ======================

const blob1 =
document.querySelector(".blob-1");

const blob2 =
document.querySelector(".blob-2");

window.addEventListener(
  "mousemove",
  (e) => {

    const x =
    e.clientX / window.innerWidth;

    const y =
    e.clientY / window.innerHeight;

    blob1.style.transform = `
      translate(
        ${x * 40}px,
        ${y * 40}px
      )
    `;

    blob2.style.transform = `
      translate(
        ${-x * 40}px,
        ${-y * 40}px
      )
    `;

  }
);