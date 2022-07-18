const $ = (element) => document.querySelector(element)

const textarea = $('.textarea')
const ch = $('.ch')
const wd = $('.wd')

ch.innerHTML = 0
wd.innerHTML = 0

textarea.addEventListener('input', (e) => {
  ch.innerHTML = e.target.value.length

  const numberOfWords = e.target.value
    .split(' ')
    .filter((item) => item !== '').length

  wd.innerHTML = numberOfWords
})
