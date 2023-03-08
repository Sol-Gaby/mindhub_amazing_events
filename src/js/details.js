const eventos = data.events;
console.log(eventos);
// definir la ruta dinamica: lo hice en home
// capturar el dato dinamico
let query = location.search;
let params = new URLSearchParams(query);
let id_query = params.get('id');
console.log(params);
console.log(id_query);
// buscar con find el elemento en el array
// reenderizar corectamente la pagina de los details de eventos

function defineDetails(events){

    return `<div class="row g-1 carta" id="details_card">
                <div class="col-md-4">
                    <img src="${events.image}" class="img_details" alt="${events.name}">
                    </div>
                        <div class="col-md-8">
                            <div class="card-body text-center">
                                <h5 class="card-title">${events.name}</h5>
                                <p class="card-text table-group-divider p-1">${events.description}</p>
                                <p class="card-text table-group-divider p-1">${events.category}</p>
                                <p class="card-text"><small class="text-muted p-1">${events.price}</small></p>
                            </div>
                        </div>
                </div>`
}

function printTemplates(){
    let container = document.querySelector('#details_card')
    evento = eventos.find(each => each._id == id_query)
    console.log(evento);
    let details = defineDetails(evento)
    container.innerHTML = details
}

printTemplates();