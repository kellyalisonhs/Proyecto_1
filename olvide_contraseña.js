function datosEnviados(){ 
    // se accede al campo de texto username del formulario
    // formIS es el name del form y username es el name del input
    // del que se recupera el valor que ingres el usuario.
      let user = document.formIS.username.value;
      let passwd = document.formIS.passwd.value;
      // getElementById permite acceder a un elemento HTML,
      // en este caso a la sección donde se muestra el nombre de usuario.
      // innerHTML insert contenido HTML al elemento seleccionado
      
      if (user.match(/^[a-zA-Z]+$/) && passwd.match(/^[A-Za-z0-9!?-]{4,8}$/) ) 
         document.getElementById("section-content").innerHTML="Bienvenido "+user;          
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

 