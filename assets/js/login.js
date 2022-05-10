
// bingresa: boton ingreso Login
//modal_primary: 1er alerta
//mpBoton: Boton primer modal


let bingresa = document.getElementById("bingresa");
let modal_primary = document.getElementById("modal_primary");

    bingresa.addEventListener("click", () => {
        let user = document.getElementById("user").value;
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

