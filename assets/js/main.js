// skills Data

const skills = [
  { name: "Python", progress: "60" },
  { name: "Docker/Kubernetes", progress: "50" },
  { name: "Team Management", progress: "50" },
  { name: "Apache/Nginx", progress: "50" },
  { name: "MongoDB", progress: "50" },
  { name: "Vector Database", progress: "50" },
  { name: "LLM", progress: "50" },
  { name: "CI/CD, Terraform", progress: "50" },
  { name: "Redis, Elastic Search", progress: "50" },
  { name: "Microservice", progress: "50" },
  { name: "DynamoDB, S3, EC2", progress: "50" },
  { name: "SaaS Architecture", progress: "50" },
  { name: "Gcp / Aws / Azure", progress: "50" },
  { name: "Flask", progress: "50" },
  { name: "Django", progress: "50" },
  { name: "TypeScript", progress: "50" },
  { name: "React.js / Next.js", progress: "50" },
  { name: "FastAPIs", progress: "50" },
];

// projects data
const projectData = [
  {
    image: "assets/img/portfolio/Texture.png",
    url: "https://primecarers.co.uk/",
    alt: "Texture",
    details:
      "Revolutionize your digital strategy with our SAAS project, combining REST APIs and Django templates for effortless text analysis and ad enhancements. Seamlessly integrate API functionalities into your workflow, leveraging Django templates for dynamic content optimization. Elevate advertising precision and streamline text analysis for unparalleled marketing insights. Stay ahead in the competitive landscape with our user-friendly and robust solution",
  },
  {
    image: "assets/img/portfolio/Sharelyze.png",
    url: "https://sharelyze.com/",
    alt: "ShareLyze",
    details:
      "Explore the new way of sharing files, notes &amp; snippets with analytics. Using our platform, you can streamline your sharing journey, gather valuable insights, and collaborate effortlessly. Schedule a personalized demo today to experience the power of ShareLyze firsthand!",
  },
  {
    image: "assets/img/portfolio/portfolio-15.png",
    url: "https://www.feltiv.com/",
    alt: "Feltiv",
    details:
      "Founded in 2022, Feltiv is dedicated to revolutionise the media localisation industry with advanced AI technologies. Our dynamic team is committed towards creating an innovative product that transcends language barriers, fostering global connectivity. We believe using cognitive AI & NLP technologies for localisation business will bring transformational change in the industry.At Feltiv, we also prioritise ethical and responsible use of AI technologies. We adhere to strict ethical guidelines, promoting responsible AI practices to build trust and transparency.",
  },
  {
    image: "assets/img/portfolio/zast.png",
    url: "https://www.feltiv.com/",
    alt: "Zast Solutions",
    details:
      "Django based fully managed web application for logistic server across various modules. Zast has various services like wallet facility, tracking, booking, various types of report and many more.",
  },

  {
    image: "assets/img/portfolio/transcript.png",
    url: "https://www.feltiv.com/",
    alt: "Transcript",
    details:
      "This project generates report cards for students. There are multiple courses and particular courses have technical and non technical tests. In this, we get technical marks from the database and generate non technical tests for individual courses. After submission of the test, the application will count the non technical marks and generate overall reports as pdf.",
  },

  {
    image: "assets/img/portfolio/null-innovation.png",
    url: "https://www.feltiv.com/",
    alt: "Null Innovation",
    details:
      "Django based dynamic company website with all company details and visitor's interactions. This size has product based interconnected sections.",
  },
];

/**
 * Template Name: iPortfolio - v1.2.1
 * Template URL: https://bootstrapmade.com/iportfolio-bootstrap-portfolio-websites-template/
 * Author: BootstrapMade.com
 * License: https://bootstrapmade.com/license/
 */

!(function ($) {
  "use strict";

  // Hero typed
  if ($(".typed").length) {
    var typed_strings = $(".typed").data("typed-items");
    typed_strings = typed_strings.split(",");
    new Typed(".typed", {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000,
    });
  }

  // Smooth scroll for the navigation menu and links with .scrollto classes
  $(document).on("click", ".nav-menu a, .scrollto", function (e) {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      e.preventDefault();
      var target = $(this.hash);
      if (target.length) {
        var scrollto = target.offset().top;

        $("html, body").animate(
          {
            scrollTop: scrollto,
          },
          1500,
          "easeInOutExpo"
        );

        if ($(this).parents(".nav-menu, .mobile-nav").length) {
          $(".nav-menu .active, .mobile-nav .active").removeClass("active");
          $(this).closest("li").addClass("active");
        }

        if ($("body").hasClass("mobile-nav-active")) {
          $("body").removeClass("mobile-nav-active");
          $(".mobile-nav-toggle i").toggleClass(
            "icofont-navigation-menu icofont-close"
          );
        }
        return false;
      }
    }
  });

  $(document).on("click", ".mobile-nav-toggle", function (e) {
    $("body").toggleClass("mobile-nav-active");
    $(".mobile-nav-toggle i").toggleClass(
      "icofont-navigation-menu icofont-close"
    );
  });

  $(document).click(function (e) {
    var container = $(".mobile-nav-toggle");
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      if ($("body").hasClass("mobile-nav-active")) {
        $("body").removeClass("mobile-nav-active");
        $(".mobile-nav-toggle i").toggleClass(
          "icofont-navigation-menu icofont-close"
        );
      }
    }
  });

  // Navigation active state on scroll
  var nav_sections = $("section");
  var main_nav = $(".nav-menu, #mobile-nav");

  $(window).on("scroll", function () {
    var cur_pos = $(this).scrollTop() + 10;

    nav_sections.each(function () {
      var top = $(this).offset().top,
        bottom = top + $(this).outerHeight();

      if (cur_pos >= top && cur_pos <= bottom) {
        if (cur_pos <= bottom) {
          main_nav.find("li").removeClass("active");
        }
        main_nav
          .find('a[href="#' + $(this).attr("id") + '"]')
          .parent("li")
          .addClass("active");
      }
      if (cur_pos < 200) {
        $(".nav-menu ul:first li:first").addClass("active");
      }
    });
  });

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });

  $(".back-to-top").click(function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      1500,
      "easeInOutExpo"
    );
    return false;
  });

  // jQuery counterUp
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 1000,
  });

  // Skills section
  $(".skills-content").waypoint(
    function () {
      $(".progress .progress-bar").each(function () {
        $(this).css("width", $(this).attr("aria-valuenow") + "%");
      });
    },
    {
      offset: "80%",
    }
  );

  // Porfolio isotope and filter
  $(window).on("load", function () {
    var portfolioIsotope = $(".portfolio-container").isotope({
      itemSelector: ".portfolio-item",
      layoutMode: "fitRows",
    });

    $("#portfolio-flters li").on("click", function () {
      $("#portfolio-flters li").removeClass("filter-active");
      $(this).addClass("filter-active");

      portfolioIsotope.isotope({
        filter: $(this).data("filter"),
      });
    });

    // Initiate venobox (lightbox feature used in portofilo)
    $(document).ready(function () {
      $(".venobox").venobox();
    });
  });

  // Testimonials carousel (uses the Owl Carousel library)
  $(".testimonials-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      900: {
        items: 3,
      },
    },
  });

  // Portfolio details carousel
  $(".portfolio-details-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    items: 1,
  });

  // Initi AOS
  AOS.init({
    duration: 1000,
    easing: "ease-in-out-back",
  });
})(jQuery);

// skills data
document.addEventListener("DOMContentLoaded", function () {
  // Populate skills
  skills.forEach((skill) => {
    const skillElement = document.createElement("div");
    skillElement.classList.add("col-lg-6");
    skillElement.setAttribute("data-aos", "fade-up");
    skillElement.innerHTML = `
      <div class="progress">
        <span class="skill">${skill.name} <i class="val">${skill.progress}%</i></span>
        <div class="progress-bar-wrap">
          <div
            class="progress-bar"
            role="progressbar"
            aria-valuenow="${skill.progress}"
            aria-valuemin="0"
            aria-valuemax="100"
            style="width: ${skill.progress}%"
          ></div>
        </div>
      </div>
    `;

    const skillsContent = document.querySelector(".skills-content");
    if (skillsContent) {
      skillsContent.appendChild(skillElement);
    }
  });

  projectData.forEach((project, index) => {
    const projectElement = document.createElement("div");
    projectElement.classList.add(
      "col-lg-4",
      "col-md-6",
      "portfolio-item",
      "filter-web"
    );
    projectElement.innerHTML = `
      <div class="portfolio-wrap">
        <img
          src="${project.image}"
          class="w-100 portfolio-img-hw"
          alt="${project.alt}"
        />
        <div class="portfolio-links">
          <a
            href='${project.image}'
            data-gall="portfolioGallery"
            class="venobox"
            title="Poster"
          >
            <i class="bx bx-search"></i>
          </a>
          <a href="#" class="more-details-link" data-index="${index}" title="More Details">
            <i class="bx bx-link"></i>
          </a>
        </div>
      </div>
    `;
    const portfoliocontainer = document.querySelector(".portfolio-container");

    portfoliocontainer.appendChild(projectElement);
  });

  const modal = document.getElementById("project-modal");
  const modalLabel = document.getElementById("modal-title");
  const modalDetails = document.getElementById("modal-details");
  const modalClose = document.querySelector(".modal-close");

  document.querySelectorAll(".more-details-link").forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const index = this.getAttribute("data-index");
      const project = projectData[index];

      modalLabel.textContent = project.alt;
      modalDetails.textContent = project.details;

      modal.style.display = "flex";
    });
  });

  modalClose.addEventListener("click", function () {
    modal.style.display = "none";
  });

  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});
