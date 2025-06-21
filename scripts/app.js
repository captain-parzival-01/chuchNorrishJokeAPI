let jokeTextArea = document.querySelector('.js-display-joke')
let loadJokeBtn = document.querySelector('.js-load-btn')

loadJokeBtn.addEventListener('click', async ()  => {
  loadJokeBtn.textContent = 'Loading Joke...'
  jokeTextArea.textContent = 'Loading Joke...'
  
  loadJokeBtn.style.color = "#f5426c"
  
  loadJokeBtn.disabled = true;
  
  let data = await fetch('https://api.chucknorris.io/jokes/random', {
    headers : {
      Accept : 'application/json'
    }
  })
  let joke = await data.json()
  
  jokeTextArea.textContent = joke.value;
  loadJokeBtn.textContent = "Load More Joke"
  loadJokeBtn.style.color = "#e5e7eb"
  loadJokeBtn.disabled = false;

})

