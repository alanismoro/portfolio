/*open e close menu*/
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

/*click on item of menu*/
const links = document.querySelectorAll('nav ul il a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

/*CARROSSEL PROJETOS BY OTAVIO MIRANDA*/
const controls = document.querySelectorAll('.control')
let currentItem = 0
const items = document.querySelectorAll('.item')
const maxItems = items.length

controls.forEach(control => {
  control.addEventListener('click', e => {
    isLeft = e.target.classList.contains('arrow-left')

    if (isLeft) {
      currentItem -= 1
    } else {
      currentItem += 1
    }

    if (currentItem >= maxItems) {
      currentItem = 0
    }

    if (currentItem < 0) {
      currentItem = maxItems - 1
    }

    items.forEach(item => item.classList.remove('current-item'))

    items[currentItem].scrollIntoView({
      behavior: 'smooth',
      inline: 'center'
    })

    items[currentItem].classList.add('current-item')
  })
})
