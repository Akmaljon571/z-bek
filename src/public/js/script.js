const opacity = document.querySelector('.header-modal')
const modal = document.querySelector('.header_modal')

const closeModal = () => {
    if (modal.className == 'header_modal') {
        opacity.className = 'header-modal none'
        modal.className = 'header_modal none'
    }
}

const openModal = () => {
    if (modal.className == 'header_modal none') {
        opacity.className = 'header-modal'
        modal.className = 'header_modal'
    }
}