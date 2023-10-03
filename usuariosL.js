let listaUsuarios = [];
let error = 0;

function getAllUsers(a) {
    const url = 'usuarios.json';
    const http = new XMLHttpRequest();  // Objeto para configurar la petición
    http.open('GET', url); // método GET para obtener el archivo
    http.onreadystatechange = function () { // función que procesa la respuesta
        if (this.readyState == 4 && this.status == 200) {
            if (a!=1)
                listaUsuarios = JSON.parse(this.responseText); // recupera la respuesta en un objeto Javascript
                    
            let tabla = document.querySelector("#lista");            
                let row, col1, col2;
                console.log(listaUsuarios);

            /* Se añade título de la tabla */            
                    
            listaUsuarios.forEach(objeto => {           
                row = document.createElement('tr');     
                col1 = document.createElement('td');
                col2 = document.createElement('td');
                col1.innerHTML=`${objeto.user}`;
                col2.innerHTML=`${objeto.email}`;
                row.appendChild(col1);
                row.appendChild(col2);
                tabla.appendChild(row);
            });
        }
    };
    http.send();
}

function setUser(user){
    
    if (user != null) {      
        listaUsuarios.push(user);   
        alert (listaUsuarios[3].user);
        error = 0;      
    }  
        else
        error = 1;
    return error;
}

function registerUser(){
    let userF = {
        user:"Juan Pablo",
        email:"juan.pablo@dominio.mx",
        question:"Lugar favorito",
        answer:"a48f7dfe488185fe9b9c8c723d318c66",
        passwd:"2ff3eb9deea5be1c49585e8fa3a1f6c1"        
    } 

    let strUser = JSON.stringify(userF);
    let res = setUser(strUser);     
    if (res === 0) {
        alert(`Usuario ${userF.user} registrado`);
    }  
    else
        alert(`Error al registrar el usuario`);
}