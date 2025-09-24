      const hamburger = document.querySelector(".hamburger");
      const mobileMenu = document.querySelector(".mobile-menu");

      hamburger.addEventListener("click", () => {
        if (mobileMenu.style.display === "flex") {
          mobileMenu.style.display = "none";
        } else {
          mobileMenu.style.display = "flex";
        }
      });

      // Optional: hide menu on window resize if larger screen
      window.addEventListener("resize", () => {
        if (window.innerWidth > 600) {
          mobileMenu.style.display = "none";
        }
      });