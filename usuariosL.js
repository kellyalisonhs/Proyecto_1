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
                let row, col1, col2, col3;
                console.log(listaUsuarios);

            /* Se añade título de la tabla */
            listaUsuarios.forEach(objeto => {           
                row = document.createElement('tr');     
                col1 = document.createElement('td');
                col2 = document.createElement('td');
                col3 = document.createElement('td');
                col1.innerHTML = `${objeto.user}`;
                col2.innerHTML = `${objeto.email}`;
                col3.innerHTML = `${objeto.url()}`
                row.appendChild(col1);
                row.appendChild(col2);
                row.appendChild(col3);
                tabla.appendChild(row);
            });
        }
    };
    http.send();
}