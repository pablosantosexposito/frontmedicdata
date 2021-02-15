console.log("pruebas ajax");

var miPeticion = new XMLHttpRequest();

miPeticion.onreadystatechange = function(){

    if (miPeticion.readyState === 4){
        let datos = JSON.parse(miPeticion.responseText);
        console.log(datos);
    }

};

miPeticion.open("GET","http://localhost:8085/reportes");

miPeticion.send(null);

function realizarPeticion() {    

    var crearUsuario = new XMLHttpRequest();

    crearUsuario.onreadystatechange = function () {

        if (crearUsuario.readyState === 4){
            let datos = JSON.parse(crearUsuario.responseText);
            console.log(datos);
        }

    };

    crearUsuario.open("POST","http://localhost:8085/usuarios");

    crearUsuario.setRequestHeader("Content-Type", "application/json");

    var sex = "MUJER";

    if(document.getElementById("idSexo").checked){
        sex = "HOMBRE";
    }

    let usuario = new Usuario(document.getElementById("idDni").value,
		document.getElementById("idNombre").value,
        document.getElementById("idApellido1").value,
        document.getElementById("idApellido2").value,
        document.getElementById("idAltura").value,
		sex,
        document.getElementById("idFechaNacimiento").value,        
		document.getElementById("idObservaciones").value        
    );

        console.log(usuario);

    crearUsuario.send(JSON.stringify(usuario));

    document.getElementById("idTabla").innerHTML = "<tr></tr>";
}

