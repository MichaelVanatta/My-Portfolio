let url = `https://thequoteshub.com/api`;
let slideIndex = 0;
runSlideshow();

fetch(url)
    .then(response => response.json())
    .then(data => {
        document.getElementById("quote").textContent = data["text"];
        document.getElementById("quote_author").textContent = "- " + data["author"];
    })
    .catch(e => console.log(e));


    
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