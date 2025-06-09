document.addEventListener("DOMContentLoaded", function () {
  // Feature Cards Animation
  const featureObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target.classList.contains("feature-fade-in")) {
            entry.target.style.animation = "fadeIn 0.8s ease forwards";
            entry.target.style.opacity = "1";
          } else {
            entry.target.style.animation = "fadeInUp 0.6s ease forwards";
            entry.target.style.opacity = "1";
          }
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: "0px 0px -10% 0px",
    }
  );

  document.querySelectorAll(".feature-card").forEach((card, index) => {
    card.style.transitionDelay = index * 100 + "ms";
    featureObserver.observe(card);
  });

  document.querySelectorAll(".feature-fade-in").forEach((element) => {
    featureObserver.observe(element);
  });

  // Work Steps Animation
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.animation = "fadeInUp 0.6s ease forwards";
          entry.target.style.opacity = "1";
          const index = Array.from(
            document.querySelectorAll(".work-step")
          ).indexOf(entry.target);
          const progress = document.querySelector(".work-progress");
          if (progress) {
            progress.style.width = (index + 1) * (100 / 6) + "%";
            progress.style.transition = "width 0.6s ease";
          }
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  document.querySelectorAll(".work-step").forEach((step, index) => {
    step.style.opacity = "0";
    step.style.animationDelay = index * 200 + "ms";
    observer.observe(step);
  });

  // FAQ Accordion
  const faqButtons = document.querySelectorAll(".faq-button");
  faqButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const content = this.nextElementSibling;
      const icon = this.querySelector(".faq-icon");
      if (content.classList.contains("hidden")) {
        content.classList.remove("hidden");
        icon.classList.remove("ri-add-line");
        icon.classList.add("ri-subtract-line");
      } else {
        content.classList.add("hidden");
        icon.classList.remove("ri-subtract-line");
        icon.classList.add("ri-add-line");
      }
    });
  });

  // Animated Tabs for Policies Section
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabPanes = document.querySelectorAll('.tab-pane');
  const underline = document.getElementById('tab-underline');
  function updateUnderline() {
    const activeBtn = document.querySelector('.tab-btn.active');
    if (activeBtn && underline) {
      underline.style.width = activeBtn.offsetWidth + 'px';
      underline.style.left = activeBtn.offsetLeft + 'px';
    }
  }
  tabBtns.forEach(btn => {
    btn.addEventListener('click', function () {
      tabBtns.forEach(b => b.classList.remove('active', 'text-primary', 'border-primary'));
      this.classList.add('active', 'text-primary', 'border-primary');
      tabPanes.forEach(pane => pane.classList.remove('active'));
      document.getElementById(this.getAttribute('data-tab')).classList.add('active');
      updateUnderline();
    });
  });
  window.addEventListener('resize', updateUnderline);
  updateUnderline();
}); 