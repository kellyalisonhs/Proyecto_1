let usuarios = [];

function validar(formulario) {
    let username = formulario.username.value;
    let correo_electronico = formulario.correo_electronico.value;
    let usertype = formulario.usertype.value;
    let password = formulario.password.value;
    let confirmPassword = formulario.confirmPassword.value;
    let recoveryQuestion = formulario.recoveryQuestion.value;
    let answer = formulario.answer.value;

    if (username === "" || correo_electronico === "" || usertype === "" || password === "" || confirmPassword === "" || recoveryQuestion === "" || answer === "") {
        alert("Por favor, llene todos los campos.");
        return false;
    }

    if (password !== confirmPassword) {
        alert("Las contraseñas no coinciden.");
        return false;
    }

    return true;
}

function registrar(formulario) {
 if (validar(formulario)) {
    let username = formulario.username.value;
    let correo_electronico = formulario.correo_electronico.value;
    let usertype = formulario.usertype.value;
    let password = formulario.password.value;
    let recoveryQuestion = formulario.recoveryQuestion.value;
    let answer = formulario.answer.value;

    let nuevoUsuario = {
        username,
        correo_electronico,
        usertype,
        password,
        recoveryQuestion,
        answer
    };

    usuarios.push(nuevoUsuario);
    alert("Usuario registrado con éxito");
    formulario.reset();
 }
}

function ingresar(formulario) {
    let username = formulario.username.value;
    let password = formulario.password.value;

    for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].username === username && usuarios[i].password === password) {
        alert("Usuario autenticado con éxito");
        formulario.reset();
        return true;
        }
    }

    alert("Usuario o contraseña incorrecta");
    return false;
}