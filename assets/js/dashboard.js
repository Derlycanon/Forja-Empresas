

var form=document.getElementById("formConsul");
var consul = parseFloat(document.getElementById("consulta").value);
console.log(consul);
form.addEventListener("submit",(e)=>{
   var consul = parseInt(document.getElementById("consulta").value);
   console.log(consul);
    e.preventDefault();
    if(consul == 25413574){
        alert("h")
    }
    }
);