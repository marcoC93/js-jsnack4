

var numero_limite = 1000;
var check = true ;
var risultato_potenza = 0 ;

for ( var i = 0 ; check ; i++ ) {

    var  risultato_potenza = Math.pow(2, i ) ;
    
    if  (risultato_potenza < numero_limite) {


        console.log("2 elevato a" + i + " fá " + risultato_potenza);
    } else {
        check = false ;
    }
}
