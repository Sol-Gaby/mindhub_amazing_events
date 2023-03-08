console.log(data);
const eventos = data.events;
console.log(eventos);

let eventCartas = [];
console.log(eventCartas);

function printEvents()
{
    for (let event of eventos) {
        if (event.date > "2021-12-31") {
            let cartaEv = `<div class="card g-4 p-0 mx-3 carta_body">
            <img src="${event.image}" class="card-img-top img_fit" alt="cinema">
                <div class="card-body fondo_cards">
                    <h5 class="card-title">${event.name}</h5>
                    <p class="card-text">${event.description}</p>
                    <a href="details.html" class="btn btn-outline-danger mb-0">See more</a>
                </div>
            </div>`
            eventCartas.push(cartaEv)

        }
    }
}


function printSelected()
{
    let cartaEv = document.getElementById('cardEvents_up');
    cartaEv.innerHTML = eventCartas.join('')
}
console.log(eventCartas);

printEvents();
printSelected();