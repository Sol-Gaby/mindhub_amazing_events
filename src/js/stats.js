
async function tablaData()
{
    try {
        //_______ Primer Tabla: muestra la estadistica general________//
        const urlApi = 'https://api-amazingevents.onrender.com/api/amazing-events?time=past';
        let fetchResponseT = await fetch(urlApi);
        let responseTable = await fetchResponseT.json();
        // console.log(responseTable);
        let eventos = responseTable.events;
    
        function eventosPorcent(){
            let evPorcentajes = eventos.map(evento => {
                // var percentaje = ((evento.assistance+evento.estimate)/evento.capacity)*100

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
        let eventPorcent = eventPorcentaje.sort(function(ev1, ev2) {return ev1.percentaje - ev2.percentaje});
        console.log(eventPorcent);
        eventos = eventos.sort(function(ev1, ev2) {return ev1.capacity - ev2.capacity});
        document.getElementById('tabla1').innerHTML = `<tr>
                                                            <td><strong>Events whith the highest percentage of attendance<strong></td>
                                                            <td><strong>Events with the lowest percentage of attendance</strong></td>
                                                            <td><strong>Events with larger capacity</strong></td>
                                                        </tr>
                                                        <tr>
                                                            <td>${eventPorcent[eventPorcent.length-1].name}</td>
                                                            <td>${eventPorcent[0].name}</td>
                                                            <td>${eventos[eventos.length-1].name}</td>
                                                        </tr>
                                                        <tr>
                                                        <td>${eventPorcent[eventPorcent.length-1].percentaje}%</td>
                                                        <td>${eventPorcent[0].percentaje}%</td>
                                                        <td>${eventos[eventos.length-1].capacity}</td>
                                                        </tr>`

        //_______Segunda Tabla: muestra una estadistica de los eventos futuros________ //
        const urlApiFuture = 'https://api-amazingevents.onrender.com/api/amazing-events?time=upcoming';
        let fetchResponseTF = await fetch(urlApiFuture);
        let responseTableF = await fetchResponseTF.json();
        let eventosFuture = responseTableF.events;
        console.log(eventosFuture);

        let categories = []
        eventosFuture.forEach(each =>{
            if (!categories.includes(each.category)) {
                categories.push(each.category)
            }
        })

        document.getElementById('tabla2').innerHTML = `<tr>
                                                            <td><strong>Categories</strong></td>
                                                            <td><strong>Revenues</strong></td>
                                                            <td><strong>Percentage of attendance</strong></td>
                                                        </tr>`
            categories.forEach(cat => {
            let eventoFutureCat = eventosFuture.filter(evento => evento.category === cat);
            console.log(eventoFutureCat);

            let Estimado = 0;
             eventoFutureCat.forEach((each) => {
                let asistencia = each.estimate;
                let precio = each.price;
                let precioEs =  asistencia * precio;
                Estimado += precioEs;
            }) 

            let estimados = 0;
            let capacidad = 0;
            eventoFutureCat.forEach((each) => {
               estimados += Number(each.estimate);
               capacidad += Number(each.capacity);
            }) 
            let Porcentaje = (estimados / capacidad) * 100;

            document.getElementById('tabla2').innerHTML +=  `<tr>
                                                                <td>${cat}</td>
                                                                <td>${Estimado}</td>
                                                                <td>${Porcentaje.toFixed(2)}%</td>
                                                            </tr>`            
        })

        //  //_______Tercera Tabla: muestra una estadistica de los eventos pasado________ //
         const urlApiPast = 'https://api-amazingevents.onrender.com/api/amazing-events?time=past';
         let fetchResTabPast = await fetch(urlApiPast);
         let responseTabPast = await fetchResTabPast.json();
         let eventosPasados = responseTabPast.events;
         console.log(eventosPasados);
 
         let categoriesP = []
         eventosPasados.forEach(eachPast =>{
             if (!categoriesP.includes(eachPast.category)) {
                 categoriesP.push(eachPast.category)
             }
         })
 
         document.getElementById('tabla3').innerHTML = `<tr>
                                                         <td><strong>Categories</strong></td>
                                                         <td><strong>Revenues</strong></td>
                                                         <td><strong>Percentage of attendance</strong></td>
                                                     </tr>`
             categoriesP.forEach(cate => {
             let eventoPastCat = eventosPasados.filter(eventoP => eventoP.category === cate);
             console.log(eventoPastCat);
 
             let asistenciaPas = 0;
              eventoPastCat.forEach((eachP) => {
                 let asistenciaP = eachP.assistance;
                 let precioP = eachP.price;
                 let precioEstim =  asistenciaP * precioP;
                 asistenciaPas += precioEstim;
             }) 
             console.log(asistenciaPas);

             let asistenciaP = 0;
             let capacidadP = 0;
             eventoPastCat.forEach((eachP) => {
                asistenciaP += Number(eachP.assistance);
                capacidadP += Number(eachP.capacity);
             }) 
             let PorcentajeP = (asistenciaP / capacidadP) * 100;
 
             document.getElementById('tabla3').innerHTML +=  `<tr>
                                                                 <td>${cate}</td>
                                                                 <td>${asistenciaPas}</td>
                                                                 <td>${PorcentajeP.toFixed(2)}%</td>
                                                             </tr>`            
         })
        
    } catch (error) {
        console.log('ups, ocurrio un error en la tabla');
        console.log(error);
    }
}

tablaData();

// sacar mlo de estatus check