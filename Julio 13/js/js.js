let nombre, u_prod, salario, categoria
const c0 = 1500000;
const c1 = 2000000;
const c2 = 2100000;
const c3 = 2200000;
const c4 = 2400000;
const P_c1 = 0.05;
const P_c2 = 0.07;
const P_c3 = 0.1;
const P_c4 = 0.15;

form1.addEventListener("submit", (e)=>{
    e.preventDefault();
    leer_datos();
    

})

function leer_datos(){
    nombre= document.getElementById("nombre").value
    u_prod= document.getElementById("u_producidas").value
    categoria = document.getElementById("categoria").value
    calcular();
    mensaje();
    
}

function calcular(){
    if(categoria==1){
        if(u_prod > 50){
            salario = c1 + (c1*P_c1)
        }
        else{
            salario = c0+(c0*P_c1)
        }
    }
    else if(categoria==2){
        if(u_prod > 50){
            salario = c2+(c2*P_c2)
        }
        else{
            salario = c0+(c0*P_c2)
        }
    }
    else if(categoria==3){
        if(u_prod > 50){
            salario = c3+(c3*P_c3)
        }
        else{
            salario = c0+(c0*P_c3)  
        }
    }
    else if(categoria==4){
        if(u_prod > 50){
            salario = c4 + (c4*P_c4)
        }
        else{
            salario = c0 +(c0*P_c4)
        }
    }
}

function mensaje(){
    document.getElementById("salario").value = salario
}