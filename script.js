// script.js

const header =
  document.querySelector(".site-header");


function updateHeader() {

  header.classList.toggle(
    "scrolled",
    window.scrollY > 30
  );

}


window.addEventListener(
  "scroll",
  updateHeader,
  { passive: true }
);


updateHeader();



/* reveal blocks when scrolling */

const revealItems =
  document.querySelectorAll(".reveal");


const observer =
  new IntersectionObserver(

    entries => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          entry.target
            .classList
            .add("visible");

          observer.unobserve(
            entry.target
          );

        }

      });

    },

    {
      threshold: 0.12,
      rootMargin: "0px 0px -8% 0px"
    }

  );


revealItems.forEach(
  item => observer.observe(item)
);



/* footer year */

document
  .getElementById("year")
  .textContent =
    new Date().getFullYear();
    
    /* reset Vimeo videos after playback */

document
  .querySelectorAll('.vimeo-frame iframe[src*="player.vimeo.com"]')
  .forEach(iframe => {

    const player = new Vimeo.Player(iframe);

    player.on("ended", async function () {

      await player.setCurrentTime(0);
      await player.pause();

    });

  });
