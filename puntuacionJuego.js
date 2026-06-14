let puntuaciones = [];
let continuarRegistro = true;
while (continuarRegistro == true) {
let menu = "Registro de Puntuaciones ---\n" +
"1. Registrar Nueva Puntuación\n" +
"2. Ver Todas las Puntuaciones\n" +
"3. Eliminar Puntuación por Posición\n" +
"4. Ver Puntuación Más Alta\n" +
"5. Salir\n\n" +
"Ingresa el número de la opción:";
let opcion = parseInt (prompt(menu));
switch (opcion){
case 1: 
let puntuacionNueva = parseInt (prompt ("Registrar Nueva Puntuación:"));
if (!isNaN(puntuacionNueva)){
    puntuaciones.push(puntuacionNueva)
    alert ("Puntuación registrada"); 
} else {
        alert ("Error: Ingresa un número");
}
break;
case 2: 
                        if (puntuaciones.length === 0) {
                alert("No hay puntuaciones registradas.");
            } else {
                let lista = "Tus puntuaciones:\n";
                                puntuaciones.forEach(function(puntos, index) {
                    lista += (index + 1) + ". " + puntos + "\n";
                });
                alert(lista);
            }
            break;
        case 3:
            if (puntuaciones.length === 0) {
                alert("No hay puntuaciones para eliminar.");
            } else {
                let listaEliminar = "Selecciona el número de la puntuación a eliminar:\n";
                puntuaciones.forEach(function(puntos, index) {
                    listaEliminar += (index + 1) + ". " + puntos + "\n";
                });
                                let posicion = parseInt(prompt(listaEliminar)) - 1;

                               if (posicion >= 0 && posicion < puntuaciones.length) {
                    puntuaciones.splice(posicion, 1); 
                    alert("Puntuación eliminada correctamente.");
                } else {
                    alert("Error: Posición no válida.");
                }
            }
            break;
        case 4:
            if (puntuaciones.length === 0) {
                alert("No hay puntuaciones para evaluar.");
            } else {
                let maximo = puntuaciones[0]; 
                puntuaciones.forEach(function(puntos) {
                    if (puntos > maximo) {
                        maximo = puntos; 
                    }
                });
                alert("La puntuación más alta es: " + maximo);
            }
            break;
        case 5:
                       continuarRegistro = false;
            alert("Saliendo del registro de puntuaciones.");
            break;
        default:
            alert("Opción no válida.");
            break;
        }
    }
