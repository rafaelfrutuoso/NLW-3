//TIPOS DE DADOS
//String " " ,
// Number 01,
//Object { }
// Boolean true or false
//Array []
// No setView tem um array com duas posiçoes 1 delas e lagitude a segunda e  longitude depois de vicula tem o zoom
//cria um object
const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false,
  };  
  
// const spanLat = document.querySelector('span[data-lat]')
// const spanLng = document.querySelector('span[data-lng]') ou para fica mais limpo

const lat = document.querySelector('span[data-lat]').dataset.lat
const lng = document.querySelector('span[data-lng]').dataset.lng
//create map

const map = L.map("mapid",options).setView([lat,lng], 15);

//cria um tileLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

// create icon
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

//cria a macasao do mapa

L.marker([lat,lng], { icon }).addTo(map);

function selectImage(event){
    //Target significa alvo
    //current significa atual 
    const button = event.currentTarget;
    // remove todas de um botao  classe active
    const buttons = document.querySelectorAll(".images button")
    buttons.forEach((button) =>{
        button.classList.remove("active")
    })
    console.log(buttons)

    //seleciona a imagem clicada 
    const imagem = button.children[0]
    const imagemConteiner = document.querySelector(".orphanage-details > img")

    //autoliza o conteiner de imagem 
    imagemConteiner.src = imagem.src
     

    //adiciona a classe active do batao clicado
    button.classList.add('active') 

}