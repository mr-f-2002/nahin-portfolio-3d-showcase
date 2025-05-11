
export const setupScrollAnimation = () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    },
    { 
      threshold: 0.15,
      rootMargin: "0px 0px -50px 0px" // Trigger animations slightly before elements come into view
    }
  );

  const elements = document.querySelectorAll(".animate-on-scroll");
  elements.forEach((el) => observer.observe(el));

  return () => {
    elements.forEach((el) => observer.unobserve(el));
  };
};
