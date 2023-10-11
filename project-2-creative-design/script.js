document.querySelectorAll('.story-btn').forEach((btn, i) => {
    btn.addEventListener('click', function () {
        this.classList.toggle('change')
        this.nextElementSibling.classList.toggle('change')
    })
})