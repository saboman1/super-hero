const SUPERHERO_TOKEN = "5868972389793553"
const BASE_URL=`https://www.superheroapi.com/api.php/${SUPERHERO_TOKEN}`
const heroİmage = document.getElementById("hero-image")
const searchButton = document.getElementById("search-button")
let searchInput = document.getElementById("search-input")
console.log(searchInput)

let getSuperHero = (id,name) => {
  fetch(`${BASE_URL}/${id}`)
  .then(response => response.json())
  .then(json => {
    const superHero = json
  showHeroInfo(superHero)
    })
}

const statToEmoji = {
  intelligence: '🧠',
  strength: '💪',
  speed: '⚡',
  durability: '🏋️‍♂️',
  power: '📊',
  combat: '⚔️',
}

const showHeroInfo = (character) => {
   const name = `<h2>${character.name}</h2>`
   const img =`<img src="${character.image.url}" height=200 width=200/>`
   const stats =Object.keys(character.powerstats).map(stat =>{
   return `<p>${statToEmoji[stat]} ${stat.toUpperCase()}:${character.powerstats[stat]}</p>`
   
 }).join('')
   console.log (name)
   heroİmage.innerHTML = `${name}${img}${stats}`
}

const getSearchSuperHero = (name) => {
  console.log(searchInput.value)
  
   fetch(`${BASE_URL}/search/${name}`)
  .then(response => response.json())
  .then(json => {
     let hero = json.results[0]
    // console.log(hero) 
  showHeroInfo(hero)
  })
}

let randomNumber = () => Math.floor(Math.random() *730)
let randomHero = document.getElementById ("random-hero") ;
randomHero.onclick = () => getSuperHero(randomNumber());
searchButton.onclick = () => getSearchSuperHero(searchInput.value)