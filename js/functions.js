jQuery(document).ready(function ($) {
  $('a[href^="#areasatuacao"').click(function () {
    $('html, body').animate(
      {
        scrollTop: $('.areasAtuacao').offset().top,
      },
      500,
    )
  })

  $('a[href^="#equipe"').click(function () {
    $('html, body').animate(
      {
        scrollTop: $('.container').offset().top,
      },
      500,
    )
  })

  $('a[href^="#contato"').click(function () {
    $('html, body').animate(
      {
        scrollTop: $('.localizacao').offset().top,
      },
      500,
    )
  })

  $('body').click(function () {
    $('html, body').animate(
      {
        scrollTop: offset().top,
      },
      500,
    )
  })
})

//SCROLL TO TOP
// Get the button:
let mybutton = document.getElementById('myBtn')

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction()
}

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = 'block'
  } else {
    mybutton.style.display = 'none'
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
