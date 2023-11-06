//Funcion para buscar el usuario
function olvid_contraseña(){ 
      let user = document.formIS.username.value;
      //Comparación entre los dos valores
      for(i = 0; i < listaUsuarios.length; i++)
      {
        if(user == listaUsuarios[i])
        {
          alert("Usuario encontrado que deseas realizar.");
        } else {
          alert("Usuario no encontrado.");
        }
      }         
   };
   
   function displayFormIS(){
    const formIS = document.querySelector("#section-form #formIS");
    const formConC = document.querySelector("#section-form #formConC");
    formConC.style.display="none";
    formIS.style.display = "block";  
  }

  function displayFormConC(){
    const formConC = document.querySelector("#section-form #formConC");
    const formIS = document.querySelector("#section-form #formIS");
    formIS.style.display = "none";
    formConC.style.display="block";
  }
  
  function displayFormCon(){
    const formCon = document.querySelector("#section-form #formCon");
    const formConC = document.querySelector("#section-form #formConC");
    formConC.style.display = "none";
    formCon.style.display="block";
  }

  

 