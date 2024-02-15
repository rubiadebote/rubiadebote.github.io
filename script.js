document.getElementById('btnDescargar').addEventListener('click', function() {
    // Crear un elemento 'a' en el DOM
    var enlace = document.createElement('a');

    // Establecer el atributo 'href' con la ubicación del archivo que quieres descargar
    enlace.setAttribute('href', 'felicidadesTsuba.mp4');

    // Establecer el atributo 'download' con el nombre que deseas para el archivo descargado
    enlace.setAttribute('download', 'felicidadesTsuba.mp4');

    // Ocultar el elemento 'a' creado
    enlace.style.display = 'none';

    // Añadir el elemento 'a' al DOM
    document.body.appendChild(enlace);

    // Simular un clic en el elemento 'a'
    enlace.click();

    // Eliminar el elemento 'a' del DOM
    document.body.removeChild(enlace);
});