const {createApp} = Vue 


createApp({

data(){

    return{

        constArrayBrani : [

            {nome: 'MiHerba', cantante: 'Babaman', genere: 'Dancehall', durata: 4},
            {nome: 'No Woman No Cry' , cantante: 'Bob Marley', genere: 'Raggae', durata: 2.30},
            {nome: 'Ganja Bus', cantante: 'Damian Marley', genere: 'Raggae', durata: 3},
            {nome: 'Indaco dagli occhi del cielo', cantante: 'Zucchero', genere: 'Pop', durata: 2.50},
            {nome: 'Ovunque Sarai', cantante: 'Irama', genere: 'Pop', durata: 3},
            
            ]

    }
}

}).mount("#app")


