console.log(data);
const eventos = data.events;
console.log(eventos);

let eventCartas=[];

function crearEvents(){
    
    for (let event of eventos){
        let cartaEv = `<div class="card g-4 p-0 mx-3 carta_body">
        <img src="${event.image}" class="card-img-top img_fit" alt="cinema">
            <div class="card-body fondo_cards">
                <h5 class="card-title">${event.name}</h5>
                <p class="card-text">${event.description}</p>
                <a href="details.html" class="btn btn-outline-danger">See more</a>
            </div>
    </div>`
    // todos los estilos que le quiera dar a las tarjetas lo tengo que aplicar aca AuthenticatorAssertionResponse, ya no se toca el html
    eventCartas.push(cartaEv)
    } 
}

console.log(eventCartas);

function printEvents(){
    let cartaEv = document.getElementById('cardEvents_main');
    cartaEv.innerHTML=eventCartas.join('')
}

crearEvents();
printEvents();