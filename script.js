const boxLinks = document.querySelector(".links")
const boxImageTechs = document.querySelector(".img-techs")

const copiar = (() => {
  let email = document.querySelector(".email")

  navigator.clipboard.writeText('ezepainho@gmail.com')
  email.innerHTML = `<div class="box-notification"> 
            <p> Email: ezepainho@gmail.com </p> 
            <p> Copiado com sucesso </p>
            
        </div>`

  setInterval(() => {
    document.querySelector(".box-notification").style.display = "none"
    email.innerHTML = "Email"

  }, 30000);

})



import { cardInformation } from "./src/information-cards.js"
const boxProjeto = document.querySelector(".box-projetos")
const buttonLinkToTecholigies = document.querySelector(".box-projetos ")

function listener(e) {
  const div = e.target.parentNode
  console.log(div)
  div.querySelector("#tech").classList.toggle("hide")
  div.querySelector("#link").classList.toggle("hide")
}

setTimeout(() => {

  const buttons = document.querySelectorAll(".toogle_link_to_techs")
  buttons.forEach(button => {
    button.addEventListener("click", listener)

  })
  console.log(buttons)

}, 100)
// for (let i = 0; i <= buttonLinkToTecholigies.length; i++) {
//   console.log(i)
// }

function createLink(card, key, value) {

  if (card[key] == undefined) {
    return ""
  }


  return ` 
      <a href=${card[key]} target="_blank">${card[value]} &#x1F517;</a>
  `

}

function createTechImages(card) {
  if (!card.technologiesUsed) {
    return ""
  }

  const techImagesHTML = card.technologiesUsed.map(tech => {
    if (!tech.source) {
      console.log("aqui")
      return ""
    }

    return `
      <img src=${tech.source} class="img-techs " /> `
  }).join("")

  return techImagesHTML

}

function exibitionCards() {

  cardInformation.map(card => {
    // console.log(card)



    const createCard = document.createElement("div")
    createCard.innerHTML = `
      <div class="division-1">
        <h2>${card.projectName}</h2>
        <img src=${card.sourceImage}  />
      </div>

       <div class="division-2"> 
         <p>${card.text}</p>
        <br/> 
        <div id="link">
         ${createLink(card, "linkPlaylist", "namePlaylist")} <br> 
         ${createLink(card, "linkProject", "projectName")} 
         ${createLink(card, "linkGithub", "nameGithub")} <br> 
         ${createLink(card, "linkChannel", "nameChannel")} 
        </div>

        <div id="tech" class="hide">
          ${createTechImages(card)}
        </div>
        <button type="button" class="toogle_link_to_techs" >Mostra tecnologias usada</button>
       </div> 
      
    `


    createCard.className = "cards"
    boxProjeto.appendChild(createCard)
  })
}

exibitionCards()
