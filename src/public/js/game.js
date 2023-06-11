const en = document.querySelector('.en')
const uz = document.querySelector('.uz')

const answer = (bool) => {
    if (bool) {
        uz.className = 'uz'
    } else {
        en.className = 'en'
    }
}