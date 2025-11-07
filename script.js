document.getElementById('dotaForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const datos = {
        nombre: document.getElementById('nombre').value,
        password: document.getElementById('password').value,
        fecha: document.getElementById('fecha').value,
        heroe: document.getElementById('heroe').value,
        modo: document.querySelector('input[name="modo"]:checked')?.value,
        rol: document.querySelector('input[name="rol"]:checked')?.value,
    };

    console.log("Datos del formulario Dota 2:", datos);
    alert("¡Registro exitoso! Revisa la consola para ver los datos.");
});
