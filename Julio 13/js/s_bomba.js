let b_seleccionada


form1.addEventListener("submit", (e)=>{
    e.preventDefault();
    leer_datos();
    

})

function leer_datos(){
    b_seleccionada = document.getElementById("t_bomba").value
    seleccionar();
    form1.reset();
}

function seleccionar (){
    if(b_seleccionada >= 0 && b_seleccionada <= 4){
        b_seleccionada = Number(b_seleccionada)
        switch(b_seleccionada){
            case 0: 
                console.log("No hay un valor establecido para el tipo de bomba");
                break
            case 1:
                console.log("La bomba es una bomba de agua");
                break
            case 2:
                console.log("La bomba es una bonba de gasolina");
                break
            case 3:
                console.log("La bomba es una bonba de hormigon");
                break
            case 4:
                console.log("La bomba es una bonba de pasta alimenticia");
                break
             
        }
    }
    else{
        alert("No existe un valor valido para tipo de bomba")
    }
}