import "./styles/main.scss";

const toggle = document.querySelector('.header__toggle')
const nav = document.querySelector('.header__nav')

toggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('is-open')
  toggle.setAttribute('aria-expanded', open)
})

const form = document.querySelector('.form')
const status = document.querySelector('.form__status')

form?.addEventListener('submit', (e) => {
  e.preventDefault()
  form.reset()
  status.textContent = '¡Gracias! Hemos recibido tu mensaje.'
})