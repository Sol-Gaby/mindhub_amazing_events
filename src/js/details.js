let query = location.search;
let params = new URLSearchParams(query);
let id_query = params.get('id');

function defineDetails(events)
{

    return `<div class="row g-1 carta ancho_details columna" id="details_card">
                <div class="col-md-4">
                    <img src="${events.image}" class="img_details imagen_details" alt="${events.name}">
                    </div>
                        <div class="col-md-7">
                            <div class="card-body text-center">
                                <h5 class="card-title">${events.name}</h5>
                                <p class="table-group-divider text-bg-dark">Description:</p>
                                <p class="card-text p-1">${events.description}</p>
                                <p class="table-group-divider text-bg-dark">Category:</p>
                                <p class="card-text p-1">${events.category}</p>
                                <p class="table-group-divider text-bg-dark">Place and Capacity:</p>
                                <p class="card-text p-1">${events.place} - ${events.capacity}</p>
                                <p class="table-group-divider text-bg-dark">Assistance:</p>
                                <p class="card-text p-1">${events.assistance}</p>
                                <p class="table-group-divider text-bg-dark">Price:</p>
                                <p class="card-text"><small class="text-muted p-1">$ ${events.price}</small></p>
                            </div>
                        </div>
                </div>`
}


async function fetchDetails()
{
    try {
        let urlApi = 'https://api-amazingevents.onrender.com/api/amazing-events';
        let fetchResponseD = await fetch(urlApi);
        let responseDetails = await fetchResponseD.json();
        console.log(responseDetails);
        let container = document.querySelector('#details_card')
        evento = responseDetails.events.find(each => each.id == id_query)
        let details = defineDetails(evento)
        container.innerHTML = details;
    } catch (error) {
        console.log('ocurrio un error en details');
        console.log(error);
    }
}
fetchDetails();