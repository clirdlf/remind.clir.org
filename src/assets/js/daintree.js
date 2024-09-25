// Import our custom CSS
import '../scss/daintree.scss'

import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { preloader } from './preloader'

// register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

// preload the images
preloader()

// All path elements in the page
const paths = [...document.querySelectorAll('path.path-anim')]

// Smooth scrolling initialization (using Lenis https://github.com/darkroomengineering/lenis)
const lenis = new Lenis()

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

// Animate the d attribute (path initial ) to the value in data-path-to;
// start when the top of its SVG reaches the bottom of the viewport and
// end when the bottom of its SVG reaches the top of the viewport
paths.forEach((el) => {
  const svgEl = el.closest('svg')
  const pathTo = el.dataset.pathTo

  gsap
    .timeline({
      scrollTrigger: {
        trigger: svgEl,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      }
    })
    .to(el, {
      ease: 'none',
      attr: { d: pathTo }
    })
})

// audio

const soundfiles = ['/assets/audio/forest.mp3']
const divIds = ['mushrooms']

const els = soundfiles.map((filename, index) => {
  const el = document.createElement('audio')
  el.setAttribute('preload', 'auto') // preload audio
  // el.src = "/" + filename;
  el.src = filename
  document.body.appendChild(el)
  console.log('el', el)
  return el
})

const playing = new Array(divIds.length).fill(false)
window.addEventListener('scroll', (e) => {
  const scroll = e.target.body.scrollTop
  const rects = divIds.map((id) =>
    document.getElementById(id).getBoundingClientRect()
  )
  const tops = rects.map((rect) => rect.top)
  tops.forEach((top, ind) => {
    if (
      !playing[ind] &&
      top <= (rects[ind].height * 2) / 3 &&
      top > (-rects[ind].height * 1) / 3
    ) {
      els[ind].play()
      playing[ind] = true
    } else if (
      playing[ind] &&
      (top > (rects[ind].height * 2) / 3 || top < (-rects[ind].height * 1) / 3)
    ) {
      els[ind].pause()
      playing[ind] = false
    }
  })
})

// check browser compatibility
document.documentElement.className = 'js'
var supportsCssVars = function () {
  var e,
    t = document.createElement('style')
  return (
    (t.innerHTML = 'root: { --tmp-var: bold; }'),
    document.head.appendChild(t),
    (e = !!(
      window.CSS &&
      window.CSS.supports &&
      window.CSS.supports('font-weight', 'var(--tmp-var)')
    )),
    t.parentNode.removeChild(t),
    e
  )
}
supportsCssVars() || alert('Please view this demo in a modern browser')
