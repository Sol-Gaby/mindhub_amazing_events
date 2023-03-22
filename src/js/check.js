let category = []
data.events.forEach(each =>{
    if (!category.includes(each.category)) {
        category.push(each.category)
    }
})
console.log(category);

function printCheck(array_tipos)
{
    let container = document.querySelector('#id_check')
    console.log(array_tipos);
    array_tipos = array_tipos.map(each =>
    {
        return `<div> <input onclick="captureData()" class="form-check-input check_class" type="checkbox" value="${each}">
                    <label class="form-check-label" for="${each}">${each}</label> </div>`
    })
    array_tipos.push(`<div> <form class="d-flex p-1 busqueda_int" role="search">
                        <input onkeyup="captureData()" id="id_search" class="form-control" type="search" placeholder="Search" aria-label="Search">
                        </form>
                     </div>`)
    container.innerHTML = array_tipos.join('');
}
// la clase check_class esta para poder capturar los datos de los checks al igual que con el id_search que le vamos a dar a la barra de busqueda para que capture el texto que se le introduzca
//con onclick capturamos el evento click que le vamos a recolectar, a el le asignamos una funcion donde ira el nombre de la funcion donde capturamos los datos, en nuestro caso captureData
//para el caso de la barra de busqueda tenemos que usar otro tipo de evento que no sea el onclick, como onkeyup que captura cada vez que se levanta una tecla, mas recomendada que enter

printCheck(category);