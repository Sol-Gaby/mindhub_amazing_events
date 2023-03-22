// console.log(data);
// const eventos = data.events;
// console.log(eventos);

// console.log(eventCartas);

function crearPastEv(arrayDeEventos){
    let eventCartas = [];
    let cartaEv;
    // console.log(arrayDeEventos);
    for (let event of arrayDeEventos) {
        if (event.date <= "2022-01-01") {
            cartaEv = `<div class="card g-4 p-0 mx-3 carta_body">
            <img src="${event.image}" class="card-img-top img_fit" alt="cinema">
                <div class="card-body fondo_cards">
                    <h5 class="card-title">${event.name}</h5>
                    <p class="card-text mb-4">${event.description}</p>
                    <a href="./details.html?id=${event.id}" class="btn btn-outline-danger">See more</a>
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

async function fetchApiPast(){
    try{
        let urlApi = 'https://api-amazingevents.onrender.com/api/amazing-events?time=past';
        let fetchRespPast = await (await fetch(urlApi));
        let responseP = await fetchRespPast.json();
        // json decodifica la respuesta del fetcheo en un json para transformar de js a json y al revez podemos usar los metodos JSON.parse() y JSOn.stringify()
        printEvents(responseP.events, 'cardEvents_main' );
        return responseP;
    }catch(error){
        console.log('ocurrio un error en past events');
        console.log(error);
    }
}

fetchApiPast();