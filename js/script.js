
/* Descrizione:
Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.

Bonus:
Aggiungere alla pagina un’immagine, presa anch’essa da un data.
 */

const { createApp } = Vue ; 

createApp({
    data (){
        return{
            title : 'Hello Vue!',
            message : '',
            imgSrc : 'https://picsum.photos/200/300?grayscale'
        }
    },
    methods :{
        greetings : function(){
            alert ('Lode a te Vue!')
        }

    }
}).mount('#app')
