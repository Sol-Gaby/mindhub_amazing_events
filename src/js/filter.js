// let eventos = data.events;

async function captureData()
{
    let urlApi = "https://api-amazingevents.onrender.com/api/amazing-events";
    let fetchResponse = await fetch(urlApi);
    let response = await fetchResponse.json();
    let arrayEventos = response.events;
    let texto = document.getElementById('id_search').value
    let check = Array.from(document.querySelectorAll('.check_class:checked')).map(each => each.value)
    // console.log(texto);
    // console.log(check);
    let filtro = arrayEventos.filter(each =>{
        return (each.name.toLowerCase().includes(texto)) && (check.length === 0 || check.includes(each.category))
    })
    // console.log(filtro);

    if (filtro.length > 0) {
        printEvents(filtro, 'cardEvents_main');
    } else {
        notfound('cardEvents_main');
    }
}

function notfound(x)
{
    let cartaEv = document.getElementById(x);
    let notPage = `<div class="card g-4 p-0 mx-3 mb-2 carta_body">
                    <img src="./src/images/imageNotFound.jpg" class="card-img-top img_fit" alt="cinema">
                        <div class="card-body fondo_cards py-4">
                            <h5 class="card-title my-2">Event Not Found</h5>
                            <p class="card-text my-4">Try again!</p>
                        </div>
                    </div>`
    cartaEv.innerHTML = notPage
}

captureData();