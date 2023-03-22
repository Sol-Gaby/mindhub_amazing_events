
async function tablaData()
{
    try {
        const urlApi = 'https://api-amazingevents.onrender.com/api/amazing-events?time=past';
        let fetchResponseT = await fetch(urlApi);
        let responseTable = await fetchResponseT.json();
        // console.log(responseTable);
        let eventos = responseTable.events;
    
        function eventosPorcent(){
            let evPorcentajes = eventos.map(evento => {
                var percentaje = (evento.assistance/evento.capacity)*100
                var percentaje = percentaje.toFixed(2);
                let eventPor = {
                    name: evento.name,
                    percentaje: percentaje
                }
                return eventPor;
            })
            return evPorcentajes;
        }
        let eventPorcentaje = eventosPorcent();
        let eventP = eventPorcentaje.sort(function(ev1, ev2) {return ev1.percentaje - ev2.percentaje});
        console.log(eventP);
        eventos = eventos.sort(function(ev1, ev2) {return ev1.capacity - ev2.capacity});
        document.getElementById('tabla1').innerHTML = `<tr>
                                                            <td>Events whith the highest percentage of attendance</td>
                                                            <td>Events with the lowest percentage of attendance</td>
                                                            <td>Events with larger capacity</td>
                                                        </tr>
                                                        <tr>
                                                            <td>${eventP[eventP.length-1].name}</td>
                                                            <td>${eventP[0].name}</td>
                                                            <td>${eventos[eventos.length-1].name}</td>
                                                        </tr>
                                                        <tr>
                                                        <td>${eventP[eventP.length-1].percentaje}%</td>
                                                        <td>${eventP[0].percentaje}%</td>
                                                        <td>${eventos[eventos.length-1].capacity}</td>
                                                        </tr>`


        const urlApiFuture = 'https://api-amazingevents.onrender.com/api/amazing-events?time=upcoming';
        let fetchResponseTF = await fetch(urlApiFuture);
        let responseTableF = await fetchResponseTF.json();
            // console.log(responseTableF);
        let eventosFuture = responseTableF.events;

        let categories = []
        eventosFuture.forEach(each =>{
            if (!categories.includes(each.category)) {
                categories.push(each.category)
            }
        })
        // console.log(categories);
        document.getElementById('tabla2').innerHTML = `<tr>
                                    <td>Categories</td>
                                    <td>Revenues</td>
                                    <td>Percentage of attendance</td>
                                </tr>`
                                // console.log(categories);
            categories.forEach(cat => {
            let eventoFutureCat = eventosFuture.filter(evento => evento.category === cat);
            console.log(eventoFutureCat);

            let Estimado = 0;
             eventoFutureCat.forEach((each) => {
                // console.log(each);
                let asistencia = each.estimate;
                let precio = each.price;
                let precioEs =  asistencia * precio;
                Estimado += precioEs;
                // aca va estimado por precio
            }) 
            // console.log(valorInicial);            
            console.log(Estimado);
            let estimados = 0;
            let capacidad = 0;
            // let totalEv = 0;
            // let porcentajeAsist = 0;
            eventoFutureCat.forEach((each) => {
               // console.log(each);
               estimados += Number(each.estimate);
               capacidad += Number(each.capacity);
            //    totalEv++;
               // aca va estimado por precio
            }) 
            let Porcentaje = (estimados / capacidad) * 100;

            // porcentajeAsist =  Porcentaje / totalEv;
            
            document.getElementById('tabla2').innerHTML +=  `<tr>
            <td>${cat}</td>
            <td>${Estimado}</td>
            <td>${Porcentaje.toFixed(2)}%</td>
            </tr>`
            
        })
        
    } catch (error) {

    }
}

tablaData();

// sacar mlo de estatus check