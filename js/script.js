const {createApp} = Vue 


createApp({

data(){

    return{

        
        constArrayBrani : [

            {nome: 'MiHerba', cantante: 'Babaman', genere: 'Dancehall', durata: 4, active: false},
            {nome: 'No Woman No Cry' , cantante: 'Bob Marley', genere: 'Raggae', durata: 2.30,active: false},
            {nome: 'Ganja Bus', cantante: 'Damian Marley', genere: 'Raggae', durata: 3,active: false},
            {nome: 'Indaco dagli occhi del cielo', cantante: 'Zucchero', genere: 'Pop', durata: 2.50, active: false},
            {nome: 'Ovunque Sarai', cantante: 'Irama', genere: 'Pop', durata: 3, active: false},
            
            ]

    }
}, 

methods : {

    showItem(ind){

     this.constArrayBrani[ind].active = !this.constArrayBrani[ind].active
  
    }

}

}).mount("#app")


