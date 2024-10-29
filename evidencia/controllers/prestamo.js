let usuario1, libro1, fechaDevolucion1, devuelto1 = false;
let usuario2, libro2, fechaDevolucion2, devuelto2 = false;


function registrarPrestamo(usuario, libro, fechaDevolucion, usuarioNum) {
    if (usuarioNum === 1) {
        usuario1 = usuario;
        libro1 = libro;
        fechaDevolucion1 = new Date(fechaDevolucion);
        devuelto1 = false;
    } else if (usuarioNum === 2) {
        usuario2 = usuario;
        libro2 = libro;
        fechaDevolucion2 = new Date(fechaDevolucion);
        devuelto2 = false;
    }
    console.log(`Préstamo registrado: ${usuario} ha tomado prestado "${libro}" hasta ${fechaDevolucion}.`);
}


function devolverLibro(usuario, libro) {
    if (usuario === usuario1 && libro === libro1) {
        devuelto1 = true;
        console.log(`El libro "${libro1}" ha sido devuelto por ${usuario1}.`);
    } else if (usuario === usuario2 && libro === libro2) {
        devuelto2 = true;
        console.log(`El libro "${libro2}" ha sido devuelto por ${usuario2}.`);
    } else {
        console.log(`No se encontró el préstamo de "${libro}" por ${usuario}.`);
    }
}


function calcularMultas() {
    const hoy = new Date();
    
    if (!devuelto1) {
        const diasRetraso1 = Math.floor((hoy - fechaDevolucion1) / (1000 * 60 * 60 * 24));
        if (diasRetraso1 > 0) {
            const multa1 = diasRetraso1 * 500;
            console.log(`El usuario ${usuario1} tiene un retraso de ${diasRetraso1} días. Multa total: $${multa1}.`);
        }
    }
    
    if (!devuelto2) {
        const diasRetraso2 = Math.floor((hoy - fechaDevolucion2) / (1000 * 60 * 60 * 24));
        if (diasRetraso2 > 0) {
            const multa2 = diasRetraso2 * 500;
            console.log(`El usuario ${usuario2} tiene un retraso de ${diasRetraso2} días. Multa total: $${multa2}.`);
        }
    }
}


function mostrarEstadoPrestamos() {
    console.log("Estado de los préstamos:");
    console.log(`Usuario: ${usuario1}, Libro: "${libro1}", Estado: ${devuelto1 ? "Devuelto" : "En retraso"}`);
    console.log(`Usuario: ${usuario2}, Libro: "${libro2}", Estado: ${devuelto2 ? "Devuelto" : "En retraso"}`);
}

registrarPrestamo('Juan', 'El Quijote', '2024-10-10', 1);
registrarPrestamo('Maria', 'Cien años de soledad', '2024-10-15', 2);
