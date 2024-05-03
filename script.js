let slideIndex = 0;

const showSlide = n => {
    const slides = document.querySelectorAll(".slider img");
    slides.forEach(slide => slide.style.display = "none");
    slideIndex = (n + slides.length) % slides.length;
    slides[slideIndex].style.display = "block";
};

const nextSlide = () => showSlide(slideIndex + 1);

const prevSlide = () => showSlide(slideIndex - 1);

showSlide(slideIndex);
