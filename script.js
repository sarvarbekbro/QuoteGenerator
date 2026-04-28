const apiUrl = "https://api.allorigins.win/raw?url=https://zenquotes.io/api/random"
 const quote = document.getElementById('quote')
 const author = document.getElementById('author')
 const btn = document.getElementById('btn')
const addTweet = document.getElementById('tweeter')

addTweet.addEventListener('click' , getQuote)

btn.addEventListener('click' , getQuote)

async function getQuote() {
  try {
    const response = await fetch(apiUrl)
    const data = await response.json()

    quote.innerHTML = data[0].q
    author.innerHTML = data[0].a

  } catch (err) {
    quote.innerHTML = "Error loading quote 😢"
    console.error(err)
  }
}
getQuote()

function tweet(){
  window.open("https://twitter.com/intent/tweet?text=" + quote.innerHTML + "---- by " + author.innerHTML, "Tweet Window")
}