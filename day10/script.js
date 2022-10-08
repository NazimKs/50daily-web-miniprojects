const jokeEl = document.getElementById('jokeEl')
const btn = document.getElementById('jokeBtn')

generateJokes()

btn.addEventListener('click', generateJokes)


async function generateJokes() {
    const res = await fetch('https://icanhazdadjoke.com/', { headers: {
        Accept:'application/json',
    },})
    const data = await res.json()
    jokeEl.innerText = data.joke
}
