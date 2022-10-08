const circles = document.querySelectorAll('.circle')
const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')

let activeCurrent = 1;

next.addEventListener('click', ()=>{
    activeCurrent++;
    if (activeCurrent > circles.length) {
        activeCurrent = circles.length
    }

    update();
})

prev.addEventListener('click', ()=>{
    activeCurrent--;
    if (activeCurrent < 1) {
        activeCurrent = 1
    }

    update();
})

function update() {
    circles.forEach ((circle,idx) => {
        if (idx < activeCurrent) {
            circle.classList.add('active');
        }else {
            circle.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll('.active')

    progress.style.width = ((actives.length - 1)/(circles.length - 1)) * 100 + "%"

    if (actives.length == 1) {
        prev.disabled = true;
    } else if (actives.length == circles.length) {
        next.disabled = true;
    } else {
        prev.disabled = false
        next.disabled = false
    }
}