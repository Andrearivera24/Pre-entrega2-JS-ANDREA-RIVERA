
console.log("--> SEGUNDA PRE-ENTREGA JS - ANDREA RIVERA - SPANISHBYHISPANICS");


// ---Algoritmo para pedirle los datos al usuario y saludarlo 
class cliente {
constructor(nombre, apellido, mail) {
this.nombre = nombre;
this.apellido = apellido;
this.mail= mail;

}
//devolver nombre y apellido
saludoBienvenida() {
    return this.nombre + " " + this.apellido
}

//devoler solo el nombre
nombre (){
    return this.nombre+ "!"
}

}

let clienteUno = new cliente (
    prompt ("Hello, please enter your name (Just your name, not your last name):"), 
    prompt ("Please enter your last name:"), 
    prompt ("Please enter your mail:"),
    );
 
alert ("Welcome to ' SpanishByHispanics ' " + clienteUno.saludoBienvenida() + ".");
console.log("--> los datos del primer cliente son ", clienteUno + ".");



// --- Algoritmo mostrar una lista de opciones y preguntarle que desea hacer. 

let opciones = [
" 1. I want to take a Quizz. ",
" 2. I want to purchase a package of classes. ",
" 3. I want to schedule a trial class. ", 
];


let eleccion = prompt ("What would you like to do? (Enter just the number) :" + opciones).toString()


//------------ Algoritmo para continuar de acuerdo a la opción que el usuario elija 
switch (parseInt(eleccion)){
//--------->
    case 1: //HACER UN QUIZZ
        alert ("You chose to take a quiz. Let´s start by translating some basic verbs!")
        console.log("--> El usuaro eligió hacer un quizz.");

        //--- Algoritmo de Funcion de Orden Superior "forEach" para iterar sobre cada verbo y aprobar o desaprobar la traducción del ususario
        const verbos = ["To learn", "To live", "To understand", "To repeat" , "To Listen"];
        verbos.forEach ((cadaUno) => {
        let respuesta = prompt ("Please translate the verb ' " + cadaUno + " ' :").toLowerCase();
          
          switch (respuesta) { 
            //--->
            case "aprender":
            alert ("Perfect!")
            break;
            //--->
            case "vivir":
                alert ("Excellent!")
                break;     
            //--->    
            case "entender":
                alert ("Well done!")    
               break;
            //--->   
            case "repetir":
                alert ("That is correct!")   
                break;
            //--->    
            case "escuchar":
                alert ("Nice!")   
                break;
            //--->            
            default: // si el ususario responde incorrectamente 
                alert ("Keep trying!")
            break;
       }//acá termina la iteración de verbos del quizz

        }); //acá termina el algoritmo forEach
            

        alert ("Thank you for participating")
        break;
    
//--------->
    case 2: // COMPRAR UN PAQUETE DE CLASES
    console.log("--> El usuaro eligió comprar un paquete de clases");
    //--- Algoritmo para mostrar lista con opciones de paquetes y sus precios 
          let ocho =  96
          let doce = 120
          let dieciseis = 128
          let descuento1 = ocho * 0.10;
          let descuento2 = doce * 0.15;
          let descuento3 = dieciseis * 0.20;

          packClasses = [ 
            " 1. 8 classes per month: USD $96  ",
            " 2. 12 classes per month: USD $120  ",
            " 3. 16 classes per month: USD $128  ",
          ] 
           chosenPack = 
           prompt ("Please choose the option you would like to purchase (Option 1, 2 or 3).  " 
           + packClasses)
           switch (parseInt(chosenPack)){
            //--->
            case 1:// OCHO CLASES POR MES 
                console.log("--> El usuario escogió 8 clases por mes y tiene que pagar: USD $", ocho);
                //-->Algortimo para obtener descuento del 10%
                let compra1 = prompt ("You chose 8 clases per month. Enter 'Quiero' if you want a 10% discount").toLowerCase()
                if (compra1 === "quiero") {
                    alert ("The total amount to be paid is USD $" + (ocho-descuento1.toFixed(2))+".") 
                    console.log("--> El usuario escogió el descuento del 10% y debe pagar: " ,(ocho-descuento1.toFixed(2)));
                } else {
                  alert ("The total amount to be paid is: USD $"+ ocho )
                  console.log("--> El usuario NO escogió el descuento del 10% y debe pagar: USD $" ,ocho);
                }
                break;

            //--->    
            case 2:// 12 CLASES POR MES 
                console.log("--> El usuario escogió 12 clases por mes y tiene que pagar USD $120");
                //-->Algortimo para obtener descuento del 15%
                let compra2 = prompt ("You chose 12 clases per month. Enter 'Quiero' if you want a 15% discount").toLowerCase()
                if (compra2 === "quiero") {
                    alert ("The total amount to be paid is USD $" + (doce-descuento2.toFixed(2)) + ".")
                    console.log("--> El usuario escogió el descuento del 15% y debe pagar: " , (doce-descuento2.toFixed(2)));
                } else {
                  alert ("The total amount to be paid is: USD $"+ doce )
                  console.log("--> El usuario NO escogió el descuento del 15% y debe pagar: USD $" ,doce);
                }
                break;
            //-->     
            case 3:// 16 CLASES POR MES 
                console.log("--> El usuario escogió 16 clases por mes y tiene que pagar USD $128");
                //-->Algortimo para obtener descuento del 20%
                let compra3 = prompt ("You chose 16 clases per month. Enter 'Quiero' if you want a 20% discount").toLowerCase()
                if (compra3 === "quiero") {
                    alert ("The total amount to be paid is USD $" + (dieciseis-descuento3.toFixed(2)) + ".")
                    console.log("--> El usuario escogió el descuento del 20% y debe pagar: " ,(dieciseis-descuento3.toFixed(2)));
                } else {
                  alert ("The total amount to be paid is: USD $"+ dieciseis +".")
                  console.log("--> El usuario NO escogió el descuento del 20% y debe pagar: USD $" ,dieciseis + ".");
                }                                
                break;        
            //---> 
            default:
                break;
           }
        break;
//--------->
    case 3: // AGENDAR UNA CLASE DE PRUEBA
    console.log("--> El usuaro eligió agendar una clase de prueba.");   
// ---Algoritmo para agendar una clase
class agendar {
constructor(nombreProfesor, dia, hora) {
this.nombreProfesor = nombreProfesor;
this.dia = dia;
this.hora= hora;

}
//Metodo para devolver profesor, día y hora agendada
bookedClass() {
    return this.nombreProfesor + " on " + this.dia + " at " + this.hora 
};

}

let claseAgendada = new agendar (
    prompt ("You chose to schedule a trial class.  Enter the teacher's name.                'Tomas',   'Andrea',   'Lucas' :"), 
    prompt ("Enter the day of the week.   'Monday',   'Tuesday',   'Wednesday',   'Thursday',   'Friday' :  "), 
    prompt ("Enter the time. '17:00',  '19:00',  '21:00' :"),
    );
 
alert ("You successfully scheduled with " + claseAgendada.bookedClass()+ ". See you soon!");
console.log("--> Los datos de la clase agendada son: ", claseAgendada.bookedClass());


        break;
//--------->
    default: // NULL
        break;

} //ACÁ TERMINA EL SWITCH DE LAS ELECCIONES 













