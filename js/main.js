$(document).ready(function(){
    //toggle face switch
    $('#view-work').hover(function(){
        $('#face').removeClass('far fa-smile').addClass('far fa-laugh-beam')
    })

    $('#view-work').mouseleave(function(){
        $('#face').removeClass('far fa-laugh-beam').addClass('far fa-smile')
    })

    // skill bar animation
    $('.skillbar').waypoint(()=> {
        $('.skillbar').each(function(){
            $(this).find('.skillbar-bar').animate({
                width: $(this).attr('data-percent')
            },5000);
        });
    }, {
        offset: '80%'
    })
    
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
        document.getElementById(modalId).classList.add('open');
    }
})

let closeBtns = document.querySelectorAll('.close')

closeBtns.forEach((btn) => {
    btn.onclick = () => {
        let modal = btn.closest('.modal-container')
        modal.classList.remove('open')
    }
})

window.onclick = (event) => {
    if(event.target.className === 'modal-container open'){
        event.target.classList.remove('open');
    }
}

function onScrollAnimate( elements ) {
    elements.each( function() {
      var elem = $(this),
          animationClass = elem.attr('data-animation'),
          animationDelay = elem.attr('data-delay');

          elem.css({
            '-webkit-animation-delay':  animationDelay,
            '-moz-animation-delay':     animationDelay,
            'animation-delay':          animationDelay
          });


          elem.waypoint(function() {
            elem.addClass('animated').addClass(animationClass);
            },{
                offset: '80%'
          });
    });
  }

onScrollAnimate($('.waypoint'))

// disable hover on scroll

var body = document.body,
    timer;

window.addEventListener('scroll', function() {
  clearTimeout(timer);
  if(!body.classList.contains('disable-hover')) {
    body.classList.add('disable-hover')
  }
  
  timer = setTimeout(function(){
    body.classList.remove('disable-hover')
  },500);
}, false);


