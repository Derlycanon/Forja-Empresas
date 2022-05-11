
// bingresa: boton ingreso Login
//modal_primary: 1er alerta
//mpBoton: Boton primer modal


let bingresa = document.getElementById("bingresa");
if(bingresa != null){ 
    bingresa.addEventListener("click", () => {
        let modal_primary = document.getElementById("modal_primary");
        let user = document.getElementById ("user").value;
        let pass = document.getElementById("pass").value;
        if(user === "Admin" && pass === "Kuepa2022"){
           window.location = "dashboard.html";

        }else{
            modal_primary.style.display = "block";
        }
    });

let mpBoton = document.getElementById("mpBoton");
    mpBoton.addEventListener("click",() => {
        modal_primary.style.display = "none";
 });
}

//interacción pacientes - Dashboard
let form=document.getElementById("formConsul");

form.addEventListener("submit",(e)=>{

    var consul = parseInt(document.getElementById("consulta").value);
    console.log(consul);
    e.preventDefault();

    if(consul == 52368795){
        let userOne=document.getElementById("userOne");
        userOne.style.setProperty("display","block");
        let continuar = document.getElementById("continuar")
        continuar.addEventListener("click", ()=>{
        window.location="registro.html";}
        )} 

    else if (consul == 1001235478){
        let userTwo=document.getElementById("userTwo");
        userTwo.style.setProperty("display","block");
        let continuar = document.getElementById("continuar")
        continuar.addEventListener("click", ()=>{
        window.location="registro.html";}
        )} 

    
    else if (consul == 25413574){
        let userThree=document.getElementById("userThree");
        userThree.style.setProperty("display","block");
    }
    else if
        (consul == 1007203506){
        let userFour=document.getElementById("userFour");
        userFour.style.setProperty("display","block");
    }});