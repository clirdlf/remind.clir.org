// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

// https://github.com/michalsnik/aos/tree/v2
// import AOS from 'aos'
// import 'aos/dist/aos.css'

// https://animate.style/#usage
// import 'animate.css'

// https://github.com/biati-digital/glightbox?tab=readme-ov-file#usage
// import GLightbox from 'glightbox'

// https://github.com/dixonandmoe/rellax
import Rellax from 'rellax'

// https://github.com/ganlanyuan/tiny-slider?tab=readme-ov-file#usage
// import { tns } from '/node_modules/tiny-slider/src/tiny-slider'

// AOS.init({
//   ease: 'slide',
//   once: true
// })

var rellaxHero = new Rellax('.rellaxHero', { breakpoints: [576, 768, 1201] })
var rellax = new Rellax('.rellax', {
  center: true,
  breakpoints: [576, 768, 1201]
})

// const lightbox = GLightbox({
//   touchNavigation: true,
//   loop: true,
//   autoplayVideos: true
// })
