import "./style.scss"
import Cytaty from "./data.json"
import { fonts } from "./fonts"

const AddPopup =() => {
  const container =document.createElement("div")
  container.classList.add("PAPAJ_DEFIETLY_NOT_AN_ADWARE_CONTAINER")
  //close button
  container.append((() =>{
    const btnWrapper =document.createElement("div")
    btnWrapper.classList.add("papierzowy-guziczko-zawijacz")
    
    const minBtn =document.createElement("button")
    minBtn.classList.add("papierz-wspiera-stiv_jobsa-min")
    minBtn.setAttribute("papierzu-nie-chowaj-sie","hura-panie-papierzu")

    const maxBtn =document.createElement("button")
    maxBtn.classList.add("papierz-wspiera-stiv_jobsa-max")
    maxBtn.setAttribute("pan-papierz-wchodzi-na-scene","onie-papierz-sie-przewrocil")    

    const cloBtn =document.createElement("button")
    cloBtn.classList.add("papierz-wspiera-stiv_jobsa-close")

    const minimize =() => {
      minBtn.setAttribute("papierzu-nie-chowaj-sie","dlaczego-sie-pan-howa")
      container.classList.add("PAPIERZZ-SIE-SHOWAU")
    }
    const unMinimize =() => {
      minBtn.setAttribute("papierzu-nie-chowaj-sie","hura-panie-papierzu")
      container.classList.remove("PAPIERZZ-SIE-SHOWAU")
    }

    const maximize =() => {
      container.classList.add("DUZY_PAPIERZZ")
      maxBtn.setAttribute("pan-papierz-wchodzi-na-scene","ale-piekny-skok")
    }
    const unMaximize =() => {
      container.classList.remove("DUZY_PAPIERZZ")
      maxBtn.setAttribute("pan-papierz-wchodzi-na-scene","onie-papierz-sie-przewrocil")
    }



    minBtn.onclick =() => {
      unMaximize()
      switch( minBtn.getAttribute("papierzu-nie-chowaj-sie") ) {
        case "hura-panie-papierzu": minimize(); break;
        case "dlaczego-sie-pan-howa": unMinimize(); break;
        default: return
      }
    }

    maxBtn.onclick =() => {
      unMinimize()
      switch( maxBtn.getAttribute("pan-papierz-wchodzi-na-scene") ) {
        case "onie-papierz-sie-przewrocil": maximize(); break;
        case "ale-piekny-skok": unMaximize(); break;
        default: return
      }
    }
    cloBtn.onclick =() => container.remove()

    cloBtn.textContent ="J"
    minBtn.textContent ="P"
    maxBtn.textContent ="2"

    btnWrapper.append(cloBtn)
    btnWrapper.append(minBtn)
    btnWrapper.append(maxBtn)

    btnWrapper.append((()=>{
      const macOS =document.createElement("span")
      macOS.classList.add("papierzu-masz-wlasny-system-operacyjny")
      macOS.textContent ="papaOS"

      return macOS
    })())

    return btnWrapper
  })())
  //header
  container.append((()=>{
    const header =document.createElement("header")
    header.classList.add("papierz-mabardzo-mondrom-glowe")
    header.style.fontFamily =fonts[Math.floor( Math.random() *fonts.length )]

    header.textContent =Cytaty[Math.floor( Math.random()*Cytaty.length )]

    return header
  })())
  //image
  container.append((()=>{
    const imgContainer =document.createElement("div")
    imgContainer.classList.add("pojemnik-na-twasz-papierza")
    imgContainer.append((()=>{
      const img =document.createElement("img")
      img.classList.add("papierzu-masz-bardzo-ladno-twasz")
      img.height =200
      img.src =chrome.runtime.getURL(`assets/franu_${Math.floor( Math.random()*21 )}.jpg`)
      
      //importanto!!!
      img.onload =() => document.body.append(container)

      return img      
    })())

    return imgContainer
  })())
  //footer
  container.append((()=>{
    const footer =document.createElement("div")
    footer.classList.add("papierzowe-stopy")
    footer.style.fontFamily =fonts[Math.floor( Math.random() *fonts.length )]
    footer.innerHTML ="Jorge Mario Bergoglio &#169;2021"

    return footer
  })())

  container.style.backgroundColor =`hsl(${Math.random()*360},50%,50%)`
  container.style.setProperty("--x",`${Math.random() *window.innerWidth *0.6}px`)
  container.style.setProperty("--y",`${Math.random() *window.innerHeight *0.5}px`)

}

// AddPopup()

chrome.runtime.onMessage.addListener(
  (req, sender) =>{
	  const { command } =req
	  if ( command === "DISPLAY THE PAPA" ) AddPopup()
  }
)