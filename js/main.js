document.querySelector(".projects-btn").addEventListener('click', (event) => {
	let section = document.getElementById("projects")
	section.scrollIntoView({behavior: "smooth"});
});

document.addEventListener("scroll", (event) => {
    let slideShow = document.querySelectorAll(".slides")
    

    slideShow.forEach(slide => {
        if(window.scrollY > 580) {
            slide.classList.add("slidesAnimate")
        }
    })

})

document.addEventListener("scroll", (event) => {
    let about = document.querySelectorAll(".about-main")[0]
    
    if(window.scrollY > 1200) {
        about.classList.add("about-main-animate")
    }
})

document.addEventListener("scroll", (event) => {
    let michael = document.querySelectorAll(".michael")[0]


    if(window.scrollY > 1200) {
        michael.classList.add("michael-animate")
    } 
})

document.addEventListener("scroll", (event) => {
    let aboutHeading = document.querySelectorAll(".about-heading")[0]

    if(window.scrollY > 1200) {
        aboutHeading.classList.add("about-heading-animate")
    } 
})



var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("slides");
    if (n > x.length) {slideIndex = 1} 
    if (n < 1) {slideIndex = x.length} ;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none"; 
    }
    x[slideIndex-1].style.display = "block"; 
}



