// Add any custom javafuscript here.
//arreglo de usuarios y contraseñas
var URLactual = window.location.href;
var usucontra=[
  {
    "usuario":"sandra.marquez",
    "contra": "bety"
  },
  {
    "usuario":"sergio.nieto",
    "contra":"bombón"
  }
]
//colores para el  mapa
var colors1 = [
  "#c4e1c6",
  "#b0d1b3",
  "#9bc2a1",
  "#87b28f",
  "#74a37c",
  "#60946b",
  "#4d8559",
  "#3a7747",
  "#276836"
];
function myMapColorFunction(indicatorId, goalId) {
  switch(parseInt(goalId)){
    case 1:
      return chroma.brewer.OrRd;
      break;
     case 2:
      return chroma.brewer.OrRd;
      break;
     case 3:
      return colors1;
      break;
     case 4:
      return chroma.brewer.OrRd;
      break;
     case 5:
      return chroma.brewer.OrRd;
      break;
     case 6:
      return chroma.brewer.OrRd;
      break;
     case 7:
      return chroma.brewer.OrRd;
      break;
     case 8:
      return chroma.brewer.OrRd;
      break;
     case 9:
      return colors1;
      break;
     case 10:
      return colors1;
      break;
     case 11:
      return colors1;
      break;
     case 12:
      return colors1;
      break;
     case 13:
      return colors1;
      break;
     case 14:
      return colors1;
      break;
     case 15:
      return colors1;
      break;
     case 16:
      return colors1;
      break;
     case 17:
      return colors1;
      break;
  }
}
function opcUsu(){
  if(document.getElementById("cs").style.display==="block")
  {
    document.getElementById("cs").style.display="none";
  }
  else{
     document.getElementById("cs").style.display="block";
  }
}

function revisaContra() {
  localStorage.clear();
  document.getElementById("ususesion").innerHTML= "";
  var contra= document.getElementById("contra").value
  var usu= document.getElementById("usu").value;
  document.getElementById("sContra").innerHTML="";
  document.getElementById("dContra").style.visibility="hidden";
  document.getElementById("sUsu").innerHTML="";
  document.getElementById("dUsu").style.visibility="hidden";
  if(usu.trim()==="")
  {
    document.getElementById("divContra").style.display="block";
    document.getElementById("sUsu").innerHTML="Usuario requerido";
    document.getElementById("dUsu").style.visibility="visible";
    return;
  }
  if(contra.trim()==="")
  {
    document.getElementById("divContra").style.display="block";
    document.getElementById("sContra").innerHTML="Contraseña requerida";
    document.getElementById("dContra").style.visibility="visible";
    return;
  }
  var result= usucontra.find(({ usuario }) => usuario === usu);
  if (result!= undefined){
      if(usu!=result.usuario){
        document.getElementById("divContra").style.display="block";
        document.getElementById("sUsu").innerHTML="Usuario incorrecto";
        document.getElementById("dUsu").style.visibility="visible";
      }
      else{
        if(contra!=result.contra){
          document.getElementById("divContra").style.display="block";
          document.getElementById("sContra").innerHTML="Contraseña incorrecta";
          document.getElementById("dContra").style.visibility="visible";
        }
        else{
          document.getElementById("divContra").style.display="none";
          document.getElementById("dUsu").style.visibility="hidden";
          document.getElementById("dContra").style.visibility="hidden";
          document.body.style.overflow = "auto";
          localStorage.setItem('usuario', JSON.stringify(usu));
          document.getElementById("ususesion").innerHTML= usu;
        }
      }
    }
 
  else
  {
    document.getElementById("divContra").style.display="block";
    document.getElementById("sUsu").innerHTML="Usuario no registrado";
    document.getElementById("dUsu").style.visibility="visible";
    document.getElementById("dContra").style.visibility="hidden";
  }
}

if(!URLactual.includes("prod")){
  if (URLactual=="https://sdg-odsmexico.github.io/site/"){
    document.body.style.overflow = "hidden";
    localStorage.clear();
    document.getElementById("ususesion").innerHTML= "";
    document.getElementById("divContra").style.display="block";
    document.getElementById("sContra").innerHTML="";
    document.getElementById("dContra").style.visibility="hidden";
    document.getElementById("sUsu").innerHTML="";
    document.getElementById("dUsu").style.visibility="hidden";
    document.getElementById("dUsuar").style.display="block";
  }
  else{
    let datoUsuario = JSON.parse(localStorage.getItem('usuario'));
    //console.log(JSON.parse(localStorage.getItem('usuario')));
    document.getElementById("ususesion").innerHTML= datoUsuario;
    document.body.style.overflow = "auto";
    document.getElementById("dUsuar").style.display="block";
  }
}
else{
  document.getElementById("divContra").style.display="none";
  document.getElementById("dUsuar").style.display="none";
}
