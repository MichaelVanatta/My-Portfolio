const quoteLocation = document.getElementById("quote");
let url = `https://zenquotes.io/api/random`;

// fetch(url)
//     .then(response => response.json())
//     .then(data => {
//         console.log(data);
//         //quoteLocation.textContent = 
//     })
//     .catch(e => console.log(e));

let slideIndex = 0;
runSlideshow();

function runSlideshow() {
    let slides = document.getElementsByClassName("slideshow");
    for (let i = 0; i < slides.length; i++) 
    {
        slides[i].style.display = "none";
    }
    slideIndex++;

    if (slideIndex > slides.length) 
    {
        slideIndex = 1
    }

    slides[slideIndex-1].style.display = "block";
    setTimeout(runSlideshow, 3000);
}