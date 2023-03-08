// console.log(data);
const eventos = data.events;
// console.log(eventos);

// console.log(eventCartas);

function crearPastEv(arrayDeEventos){
    let eventCartas = [];
    let cartaEv;
    console.log(arrayDeEventos);
    for (let event of arrayDeEventos) {
        if (event.date < "2022-01-01") {
            cartaEv = `<div class="card g-4 p-0 mx-3 carta_body">
            <img src="${event.image}" class="card-img-top img_fit" alt="cinema">
                <div class="card-body fondo_cards">
                    <h5 class="card-title">${event.name}</h5>
                    <p class="card-text mb-4">${event.description}</p>
                    <a href="./details.html?id=${event._id}" class="btn btn-outline-danger mb-0">See more</a>
                </div>
            </div>`

            eventCartas.push(cartaEv);
        }
    }
    return eventCartas;
}

function printEvents(array, x){
    let cartaEv = document.getElementById(x);
    let templates = crearPastEv(array);
    cartaEv.innerHTML = templates.join('');
}

// printEvents();
printEvents(eventos, 'cardEvents_main');