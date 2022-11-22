/* Slider */
const slides = document.querySelectorAll('.slide'),
      dots = document.querySelectorAll('.dot');

let index = 0;

const activeSlide = n => {
    for(slide of slides) {
        slide.classList.remove('slide--active');
    }
    slides[n].classList.add('slide--active');
};

const activeDot = n => {
    for(dot of dots) {
        dot.classList.remove('dot--active');
    }
    dots[n].classList.add('dot--active');
};

const prepareCurrentSlide = int => {
    activeSlide(index);
    activeDot(index);
};

const nextSlide = () => {
    if(index == slides.length - 1) {
        index = 0;
        prepareCurrentSlide(index);
    } else {
        index++;
        prepareCurrentSlide(index);
    }
};

dots.forEach((item, indexDot)=> {
    item.addEventListener('click', () => {
        index = indexDot;
        prepareCurrentSlide(index);
    });
});

setInterval(nextSlide, 5000);

/* Spoiler */
const headers = document.querySelectorAll("[data-name='spoiler-title']");

headers.forEach(function (item) {
  item.addEventListener("click", headerClick);
});

function headerClick() {
    if( !!this ) {
        this.nextElementSibling.classList.remove('spoiler-body'); 
    }
    else {
        this.nextElementSibling.classList.add('spoiler-body');
    }
}


const sections = document.querySelectorAll("guarantee__wrapp");
sections.forEach((section) => section.addEventListener('toggle', toggleAcordeon));

function toggleAcordeon() {
  this.open && sections.forEach((section) => {
    if (section !== this && section.open) {
      section.open = false;
    }
  });
}