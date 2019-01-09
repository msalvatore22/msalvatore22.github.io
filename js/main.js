$(document).ready(function(){
    //toggle face switch
    $('#view-work').hover(function(){
        $('#face').removeClass('far fa-smile').addClass('far fa-laugh-beam')
    })

    $('#view-work').mouseleave(function(){
        $('#face').removeClass('far fa-laugh-beam').addClass('far fa-smile')
    })
})


// scroll to projects section

document.getElementById("view-work").addEventListener('click', (event) => {
	let section = document.getElementById("portfolio")
	section.scrollIntoView({behavior: "smooth"});
});