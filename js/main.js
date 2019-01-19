$(document).ready(function(){
    //toggle face switch
    $('#view-work').hover(function(){
        $('#face').removeClass('far fa-smile').addClass('far fa-laugh-beam')
    })

    $('#view-work').mouseleave(function(){
        $('#face').removeClass('far fa-laugh-beam').addClass('far fa-smile')
    })

    // skill bar animation
    $('.skillbar').each(function(){
		$(this).find('.skillbar-bar').animate({
			width: $(this).attr('data-percent')
		},5000);
	});
})

// scroll to projects section

document.getElementById("view-work").addEventListener('click', (event) => {
	let section = document.getElementById("portfolio")
	section.scrollIntoView({behavior: "smooth"});
});

// handle modal open and close

let btns = document.querySelectorAll('.modal-btn')

btns.forEach((btn) => {
    btn.onclick = () => {
        let modalId = btn.getAttribute('data-modal')
        document.getElementById(modalId).style.display = 'block'
    }
})

let closeBtns = document.querySelectorAll('.close')

closeBtns.forEach((btn) => {
    btn.onclick = () => {
        let modal = btn.closest('.modal-container')
        modal.style.display = 'none'
    }
})

window.onclick = (event) => {
    if(event.target.className === 'modal-container'){
        event.target.style.display = 'none'
    }
}
