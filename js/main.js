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
    
    // hambuger menu open and close
    $('#hamburger-menu-wrapper').click(()=>{
        $('.hamburger').toggleClass('close');
        $('#hamburger-menu').toggleClass('open');
    });

    // close menu on nav click
    $('.hamburger-nav').click(()=> {
        $('.hamburger').toggleClass('close');
        $('#hamburger-menu').toggleClass('open');
    })

})

// scroll to view work

document.getElementById("view-work").addEventListener('click', (event) => {
	let section = document.getElementById("portfolio");
	section.scrollIntoView({behavior: "smooth", block: 'start'});
});

// scroll to home section

document.getElementById("to-top").addEventListener('click', (event) => {
	let section = document.getElementById("home")
	section.scrollIntoView({behavior: "smooth", block: 'start'});
});

// scroll to sections from hamburger menu

let navBtns = document.querySelectorAll('.hamburger-nav');

navBtns.forEach((btn) => {
    btn.onclick = () => {
        let sectionId = btn.getAttribute('data-nav');
        let section = document.getElementById(sectionId);
        section.scrollIntoView({behavior: 'smooth', block: 'start'});
    }
})


// handle modal open and close

let btns = document.querySelectorAll('.modal-btn');

btns.forEach((btn) => {
    btn.onclick = () => {
        let modalId = btn.getAttribute('data-modal');
        document.getElementById(modalId).style.display = 'block';
    }
})

let closeBtns = document.querySelectorAll('.close')

closeBtns.forEach((btn) => {
    btn.onclick = () => {
        let modal = btn.closest('.modal-container')
        modal.style.display = 'none';
    }
})

window.onclick = (event) => {
    if(event.target.className === 'modal-container'){
        event.target.style.display = 'none';
    }
}

// handle hamburger open and close
