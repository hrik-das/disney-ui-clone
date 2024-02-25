const carousel = document.querySelector(".carousel");
let sliders = [];
let slideIndex = 0;

const createSlide = () => {
    if(slideIndex >= movies.length){
        slideIndex = 0;
    }
    // Creating DOM Element
    let slide = document.createElement("div");
    let imageElement = document.createElement("img");
    let content = document.createElement("content");
    let h1 = document.createElement("h1");
    let p = document.createElement("p");
    // Attaching All Elements
    imageElement.appendChild(document.createTextNode(""));
    h1.appendChild(document.createTextNode(movies[slideIndex].name));
    p.appendChild(document.createTextNode(movies[slideIndex].des));
    content.appendChild(h1);
    content.appendChild(p);
    slide.appendChild(content);
    slide.appendChild(imageElement);
    carousel.appendChild(slide);
    // Setting Image Source
    imageElement.src = movies[slideIndex].image;
    slideIndex++;
    // Setting Elements Classname
    slide.className = "slider";
    content.className = "slide-content";
    h1.className = "movie-title";
    p.className = "movie-desc";
    sliders.push(slide);
    // Adding Sliding Effect
    if(sliders.length > 1){
        sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${30 * (sliders.length - 2)}px)`;
    }
}

for(let i=0; i<3; i++){
    createSlide();
}

setInterval(() => {
    createSlide();
}, 3000);

// Video Cards
const videoCards = [...document.querySelectorAll(".video-card")];
videoCards.forEach(element => {
    element.addEventListener("mouseover", () => {
        let video = element.children[1];
        video.play();
    });
    element.addEventListener("mouseleave", () => {
        let video = element.children[1];
        video.pause();
    });
});
// Card Sliders
let cardContainers = [...document.querySelectorAll(".card-container")];
let preButton = [...document.querySelectorAll(".pre-btn")];
let nextButton = [...document.querySelectorAll(".next-btn")];
cardContainers.forEach((item, index) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    preButton[index].addEventListener("click", () => {
        item.scrollLeft -= containerWidth + 200;
    });

    nextButton[index].addEventListener("click", () => {
        item.scrollLeft += containerWidth - 200;
    });
});