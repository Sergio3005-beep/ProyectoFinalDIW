import "./styles/main.scss";

const toggle = document.querySelector('.header__toggle')
const nav = document.querySelector('.header__nav')

toggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('is-open')
  toggle.setAttribute('aria-expanded', open)
})
