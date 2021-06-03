// Variables
const BODY = document.querySelector('body')
const PROGRESS_BAR = document.querySelector('.progress')
const HEADER_TAG = document.querySelector('header')
const CLIENT_TAG = document.querySelector('.client')
const PAGE_TAG = document.querySelector('.page')
const PIXEL_TAG = document.querySelector('.pixels')

const THRESHOLDS = document.querySelectorAll('section')

// Events
document.addEventListener('scroll', function() {
  const pageHeight = BODY.getBoundingClientRect().height
  const windowHeight = window.innerHeight
  const topViewport = window.pageYOffset
  const midViewport = topViewport + (windowHeight / 2)
  const scrollableDistance = pageHeight - windowHeight
  const progress = (topViewport / scrollableDistance) * 100

  PROGRESS_BAR.style.width = `${progress}%`
  PIXEL_TAG.innerHTML = topViewport

  THRESHOLDS.forEach( threshold => {
    const topThreshold = threshold.offsetTop
    const midThreshold = topThreshold + (threshold.offsetHeight / 2)
    const distanceToThreshold = midViewport - midThreshold

    const PARALLAX_TAGS = threshold.querySelectorAll(`[data-parallax]`)

    PARALLAX_TAGS.forEach( tag => {
      const speed = parseFloat(SQUARE.getAttribute('data-parallax'))
      SQUARE.style.transform = `translateY(${distanceToThreshold * speed}px)`
    })


    if(threshold.offsetTop - 100 < topViewport) {
      CLIENT_TAG.innerHTML = threshold.getAttribute("data-client")
      PAGE_TAG.innerHTML = threshold.getAttribute("data-page")

      if(threshold.hasAttribute("data-is-dark")) {
        HEADER_TAG.classList.add('white')
        PROGRESS_BAR.classList.add('white')
      } else {
        HEADER_TAG.classList.remove('white')
        PROGRESS_BAR.classList.remove('white')
      }
    }
  })
})
