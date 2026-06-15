let invitados = [];
let continuarGestion = true;
while (continuarGestion === true) {
    let opcion = parseInt(prompt(
        "Gestor de Invitados:\n" +
        "1. Agregar Invitado\n" +
        "2. Ver Lista de Invitados\n" +
        "3. Eliminar Invitado\n" +
        "4. Contar Total de Invitados\n" +
        "5. Salir\n" +
        "Ingresa el número de la opción:"
    ));
    switch (opcion) {
        case 1:
            let nuevoInvitado = prompt("Ingresa el nombre del invitado:");
            if (nuevoInvitado !== null && nuevoInvitado.trim() !== "") {
                invitados.push(nuevoInvitado);
                alert("¡" + nuevoInvitado + " ha sido agregado a la lista!");
            } else {
                alert("Error: No ingresaste un nombre válido.");
            }
            break;
        case 2:
            if (invitados.length === 0) {
                alert("La lista de invitados está vacía.");
            } else {
                let lista = "Lista de Invitados:\n";
                invitados.forEach(function(nombre, index) {
                    lista += (index + 1) + ". " + nombre + "\n";
                });
                alert(lista);
            }
            break;
        case 3:
            if (invitados.length === 0) {
                alert("No hay invitados en la lista para eliminar.");
            } else {
                let listaEliminar = "Selecciona el número del invitado a eliminar:\n";
                invitados.forEach(function(nombre, index) {
                    listaEliminar += (index + 1) + ". " + nombre + "\n";
                });
                let numeroEliminar = parseInt(prompt(listaEliminar)) - 1;
                if (numeroEliminar >= 0 && numeroEliminar < invitados.length) {
                    let invitadoBorrado = invitados.splice(numeroEliminar, 1);
                    alert("¡" + invitadoBorrado + " ha sido eliminado de la lista!");
                } else {
                    alert("Error: Número de invitado no válido.");
                }
            }
            break;
        case 4:
            alert("Total de invitados: " + invitados.length);
            break;
        case 5:
            continuarGestion = false;
            alert("Saliendo del gestor de invitados.");
            break;
        default:
            alert("Opción no válida.");
            break;
    }
}