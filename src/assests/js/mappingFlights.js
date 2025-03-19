document.addEventListener('DOMContentLoaded', async () => {
    await loadTemplatesWithData([
        {
            id: 'ofertas-container',
            templatePath: '../templates/offers.html',
            dataPath: '../Json/flights.json', // Ruta a tu JSON
            repeat: true,
            dataMapping: {
                'destino': '.oferta-destino',
                'duracion': '.oferta-detalles',
                'precio': '.oferta-precio strong',
                'imagen_destino': '.oferta-img-container img'
            },
            dataTransform: (item) => {
                return {
                    destino: item.destino,
                    duracion: `Duración del vuelo: ${item.duracion}, Vuelo desde ${item.origen}`,
                    precio: `${item.precio.toFixed(2)} €`,
                    imagen_destino: item.imagen_destino
                };
            }
        }
    ]);
});