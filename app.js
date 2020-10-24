const card = document.querySelector('.card')
const container = document.querySelector('.container')
const title = document.querySelector('.title')
const sneaker = document.querySelector('.sneaker img')
const purchase = document.querySelector('.purchase button')
const description = document.querySelector('.info h3')
const sizes = document.querySelector('.sizes')

// Rotate card on mousemove in container
container.addEventListener('mousemove', (event) => {
  let xAxis = (window.innerWidth / 2 - event.pageX) / 24
  let yAxis = (window.innerHeight / 2 - event.pageY) / 24
  card.style.transform = `rotateX(${yAxis}deg) rotateY(${xAxis}deg)`
})

// Mouseenter transition
container.addEventListener('mouseenter', () => {
  card.style.transition = 'all 0.1s ease'
  title.style.transform = 'translateZ(100px)'
  sneaker.style.transform = 'translateZ(100px) scale(1.2)'
  description.style.transform = 'translateZ(50px)'
  sizes.style.transform = 'translateZ(50px)'
  purchase.style.transform = 'translateZ(50px)'
})

// Smooth reset card on mouseleave
container.addEventListener('mouseleave', () => {
  card.style.transition = 'all 0.5s ease'
  card.style.transform = 'rotateX(0deg) rotateY(0deg)'
  title.style.transform = 'translateZ(0px)'
  sneaker.style.transform = 'translateZ(0px) rotateZ(0deg)'
  description.style.transform = 'translateZ(0px)'
  sizes.style.transform = 'translateZ(0px)'
  purchase.style.transform = 'translateZ(0px)'
})
