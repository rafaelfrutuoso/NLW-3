const map = L.map('mapid').setView([-27.222633,-49.6455874], 16);

//cria um tileLayer
L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
    .addTo(map);
    
// create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58,68],
    iconAnchor: [29,68]
  
})
let marker;

// cria uma macasao 
map.on('click', (event)=>{
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;
    
    // envia os dados para o input
    document.querySelector('[name=lat]').value = lat
    document.querySelector('[name=lng]').value = lng

    // remove marker
    marker &&  map.removeLayer(marker)
    

   // add marker icon
   // mais primeiro tem de remove para nao fica um mote de icon
   marker = L.marker([lat,lng], {icon}).addTo(map)
   console.log(L.marker([lat,lng], {icon}))
   console.log(L.marker([lat,lng]))
 
})

 //adiciona o campo de fotos
 function addPhotoField(){


     // pega o conteine de fotos #images
     const conteiner = document.querySelector('#images')

     // pega o conteine para dublicar .new-upload
     const fieldConteiner = document.querySelectorAll('.new-upload')
     // realiza o clone da imagem
     const newFieldConteiner = fieldConteiner[fieldConteiner.length - 1].cloneNode(true)
     //limpa o campo antes de adiciona ao conteiner
    const input =  newFieldConteiner.children[0]
    // verifica se o campo ta vazio
    if(input.value == ''){
        return
    }

    input.value = ''
    
    
    // envia os dados para o input
   
     // adiciona o clone ao conteiner #images
     conteiner.appendChild(newFieldConteiner)
     


     
 }
 function deleteField(event){
    const span = event.currentTarget
    const fieldConteiner = document.querySelectorAll('.new-upload')
    if(fieldConteiner.length <2){
        // limpa o  valor do campo
        span.parentNode.children[0].value=""
        return
    }
    // deleta o campo
    span.parentNode.remove()
    
     

 }
//  troca do sim ou nao

function selectButton(event){
        
        // remove todas de um botao  classe active
        const buttons = document.querySelectorAll(".button-select button")
        buttons.forEach((button) =>{
            button.classList.remove("active")
        })
    // pega o bottao clicado
    const button = event.currentTarget;
        //adiciona a classe active do batao clicado
        button.classList.add('active') 

    
        // autualiza o  input hidden com o valor selecionado
        const input = document.querySelector("[name=open_on_weekends]")
        input.value = button.dataset.value
        
        

}
 function vazio(){
         event.preventDefault(),
        alert("preencha os campo do map") 
    }

function validate(event){
    // validar se lat e lng estao preenchidos
    let lat = document.querySelector('[name=lat]')

   // IF TERNARIO
    lat.value == "" ? ( event.preventDefault(), alert("preencha os campo do map") ):
     console.log(lat,"nao esta vazio")
   // IF NOMAL
   /* if(lat.value == "" ){ event.preventDefault()
        alert("preencha os campo do map")
        console.log(lat,"vazio")
    }
    else{
        console.log(lat,"nao esta vazio")
        
    }*/
    //IF TERNARIO MAIS LIMPO
   
   
}
 
