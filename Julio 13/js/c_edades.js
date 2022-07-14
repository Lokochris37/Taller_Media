let e_juan, e_mama, e_alberto, e_ana

form1.addEventListener("submit", (e)=>{
    e.preventDefault();
    leer_datos();
    

})

function leer_datos(){
    e_juan = document.getElementById("e_Juan").value
    E_juan = document.getElementById("e_Juan").value
    calculo();
    enviarData();
}

function calculo(){
    e_juan = Number(e_juan)
    e_alberto = Math.round((e_juan/3)*2)
    e_ana = Math.round((e_juan/3)*4)
    e_mama = e_alberto + e_ana + e_juan

}

function enviarData(){

    document.getElementById("E_mama").value = e_mama 
    document.getElementById("E_alberto").value = e_alberto
    document.getElementById("E_juan").value = e_juan
    document.getElementById("E_ana").value = e_ana
    document.getElementById("2/3").value = "2/3 de la de Juan"
    document.getElementById("4/3").value = "4/3 de la de Juan"

}