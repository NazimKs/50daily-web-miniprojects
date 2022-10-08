const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll',Maj)

Maj()

function Maj() {
    const Top = window.innerHeight / 5 * 4;

    boxes.forEach(box =>{
        const topBox = box.getBoundingClientRect().top

        if (topBox <= Top) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })
}
