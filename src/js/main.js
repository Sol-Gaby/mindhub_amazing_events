// console.log(data);
const eventos = data.events;
console.log(eventos);



function crearEvents(arrayDeEventos){
    let eventCartas=[]; //eventscartas va a ser el array con todos mis templ de cada evento
    for (let event of arrayDeEventos){
        let cartaEv = `<div class="card g-4 p-0 mx-3 carta_body">
        <img src="${event.image}" class="card-img-top img_fit" alt="cinema">
            <div class="card-body fondo_cards py-4">
                <h5 class="card-title my-2">${event.name}</h5>
                <p class="card-text my-4">${event.description}</p>
                <a href="./details.html?id=${event._id}" class="btn btn-outline-danger boton my-0">See more</a>
            </div>
    </div>`
    // todos los estilos que le quiera dar a las tarjetas lo tengo que aplicar aca AuthenticatorAssertionResponse, ya no se toca el html
    eventCartas.push(cartaEv)
    } 
    return eventCartas; //retorno ese array de events 
}

// console.log(eventCartas);

function printEvents(array, x){
    let cartaEv = document.getElementById(x);
    let templates = crearEvents(array)//templates va a guardar el array con todos los templates de cada card
    cartaEv.innerHTML = templates.join('')
}

// crearEvents();
printEvents(eventos, 'cardEvents_main');