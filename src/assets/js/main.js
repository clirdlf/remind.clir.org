// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

import AOS from 'aos'
import 'aos/dist/aos.css'

// https://github.com/biati-digital/glightbox?tab=readme-ov-file#usage
import GLightbox from 'glightbox'

import Rellax from 'rellax'

//github.com/ganlanyuan/tiny-slider?tab=readme-ov-file#usage
import { tns } from '/node_modules/tiny-slider/src/tiny-slider'

AOS.init({
  ease: 'slide',
  once: true
})

var rellaxHero = new Rellax('.rellaxHero')
var rellax = new Rellax('.rellax', { center: true })

const lightbox = GLightbox({
  touchNavigation: true,
  loop: true,
  autoplayVideos: true
})
