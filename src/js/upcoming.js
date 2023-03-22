// console.log(data);
// const eventos = data.events;
// console.log(eventos);

// console.log(eventCartas);

function crearUpEv(arrayDeEventos){
    let eventCartas = [];
    for (let event of arrayDeEventos) {
        if (event.date > "2021-12-31") {
            let cartaEv = `<div class="card g-4 p-0 mx-3 carta_body">
            <img src="${event.image}" class="card-img-top img_fit" alt="cinema">
                <div class="card-body fondo_cards">
                    <h5 class="card-title">${event.name}</h5>
                    <p class="card-text">${event.description}</p>
                    <a href="./details.html?id=${event.id}" class="btn btn-outline-danger mb-0">See more</a>
                </div>
            </div>`

            eventCartas.push(cartaEv);
        }
    }
    return eventCartas;
}

function printEvents(array, x){
    let cartaEv = document.getElementById(x);
    let templates = crearUpEv(array); 
    cartaEv.innerHTML = templates.join('')
}

async function fetchApiUp(){
    try{
        let urlApi = 'https://api-amazingevents.onrender.com/api/amazing-events?time=upcoming';
        let fetchRespFuture = await (await fetch(urlApi));
        console.log(fetchRespFuture);
        let resp = await fetchRespFuture.json();
        console.log(resp);
        printEvents(resp.events, 'cardEvents_main' );
        console.log(printEvents);
        return resp;
    }catch(error){
        console.log('ocurrio un error en upcomings');
        console.log(error);
    }
}

fetchApiUp();
// printEvents(eventos, 'cardEvents_main');