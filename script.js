// document.addEventListener("DOMContentLoaded", function () {
//   const accordionHeaders = document.querySelectorAll(".accordion-header");

//   accordionHeaders.forEach((header) => {
//     header.addEventListener("mousedown", function () {
//       const accordionContent = this.nextElementSibling;
//       accordionContent.classList.toggle("active");
//     });
//   });
// });

document.addEventListener("DOMContentLoaded", function () {
  const accordionHeaders = document.querySelectorAll(".accordion-header");

  accordionHeaders.forEach((header) => {
    header.addEventListener("mousedown", function () {
      const accordionContent = this.nextElementSibling;
      const isActive = accordionContent.classList.contains("active");

      // Close all accordion contents
      const allAccordionContents =
        document.querySelectorAll(".accordion-content");
      allAccordionContents.forEach((content) => {
        content.classList.remove("active");
      });

      // Open the clicked accordion content if it was not active before
      if (!isActive) {
        accordionContent.classList.add("active");
      }
    });
  });
});
