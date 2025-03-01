# ✈ JetSetGo.com

## Integrantes:
  - Álvaro Rodríguez Miranda
  - Eduardo Gainza Koller
  - Alberto Redondo Álvarez de Sotomayor

JetSetGo es un proyecto pensado para facilitar las vacaciones a nuestros clientes hasta el punto que se les ofrece vuelos, hoteles y transporte. Todo esto pensado para que los clientes no se tengan que preocupar por nada más que elegir el distino y la fecha. También ofrecemos las mejores ofertas del mercado en nuestra web y por último tambien incorporamos muchos de los mejores precios de viajes y hoteles para que nuestro cliente los pueda comparar y elegir el que más se ajuste a su presupuesto.

## Listado de requisitos funcionales

1. **Registro de usuario e inicio de sesión**
   - El sistema debe permitir a los usuarios registrarse proporcionando su correo electrónico.
   - El sistema deberá enviar un correo de verificación al correo proporcionado por el cliente.
  
2. **Busqueda y reserva de vuelos**
   - La página debe permitir la búsqueda de vuelos (ida y vuelta) mediante origen, destino, fecha y personas.
   - El sistema debe mostrar todos los vuelos disponibles con precios y aerolíneas.
   - El sistema debe tener un filtro para filtrar los vuelos.

  
3. **Busqueda y reserva de hoteles**
   - La página debe permitir la búsqueda de hoteles mediante lugar, fecha y número de personas y habitaciones.
   - El sistema debe mostrar todos los hoteles disponibles con precios y marcas.
   - El sistema debe tener un filtro para filtrar los hoteles.
  
  
4. **Alquiler de coches**
   - La página debe permitir el alquiler de coches mediante lugar, fecha de recogida y fecha de dejada.
   - El sistema debe mostrar todos los coches en alquiler disponibles con precio.

  
5. **Proceso de pago**
   - Cuando se vaya a querer pagar un vuelo, hotel o alquilar un coche la página va a redireccionar al cliente a una página de pago segura externa a nuestra web.


6. **Soporte al cliente**
  - Los usuarios deben poder contactar con el soporte mediante un cuadro de texto y enviar ese mensaje al correo de soporte de la web.

## Ubicación de archivo pdf con los mockups y storyboard

En la ruta /pwm-JetSetGo/src/mocks se encuentran tanto los pdfs de los mockups como el de storyboard

## Listado de archivos templates identificados y señalar archivo en el que se cargan

- **/pwm-JetSetGo/src/templates/header.html y /pwm-JetSetGo/src/templates/footer.html** se utilizan en todas las páginas programadas.
- **/pwm-JetSetGo/src/templates/filters.html** se utiliza en /pwm-JetSetGo/src/pages/flightSearch.html, /pwm-JetSetGo/src/pages/carSearch.html, /pwm-JetSetGo/src/pages/hotelSearch.html.
- **/pwm-JetSetGo/src/templates/flights.html** solo se utiliza en /pwm-JetSetGo/src/pages/flightSearch.html
- **/pwm-JetSetGo/src/templates/hotels.html** solo se utiliza en /pwm-JetSetGo/src/pages/hotelSearch.html
- **/pwm-JetSetGo/src/templates/offers.html** se utiliza en /pwm-JetSetGo/src/pages/home.html, /pwm-JetSetGo/src/pages/home-flights.html y /pwm-JetSetGo/src/pages/home-cars.html.
- **/pwm-JetSetGo/src/templates/search-car-bar.html** se utiliza tanto en /pwm-JetSetGo/src/pages/home-cars.html y /pwm-JetSetGo/src/pages/carSearch.html.
- **/pwm-JetSetGo/src/templates/search-fly-bar.html** se utiliza tanto en /pwm-JetSetGo/src/pages/home-flights.html y /pwm-JetSetGo/src/pages/flightSearch.html.
- **/pwm-JetSetGo/src/templates/search-hotel-bar.html** se utiliza tanto en /pwm-JetSetGo/src/pages/home.html y /pwm-JetSetGo/src/pages/hotelSearch.html

## Listado de páginas html del proyecto
- **/pwm-JetSetGo/src/pages/home.html** implementa el mockup Home-Hoteles
- **/pwm-JetSetGo/src/pages/home-flights.html** implementa el mockup Home-Vuelos
- **/pwm-JetSetGo/src/pages/home-cars.html** implementa el mockup Home-Coches
- **/pwm-JetSetGo/src/pages/hotelSearch.html** implementa el mockup Compra-Hoteles
- **/pwm-JetSetGo/src/pages/flightSearch.html** implementa el mockup Compra-Vuelos
- **/pwm-JetSetGo/src/pages/carSearch.html** implementa el mockup Compra-Coches
- **/pwm-JetSetGo/src/pages/logIn.html** implementa el mockup Inicio sesion/Registro
- **/pwm-JetSetGo/src/pages/frequentsQuestions.html** implementa el mockup Preguntas Frecuentes
- **/pwm-JetSetGo/src/pages/customerService.html** implementa el mockup Soporte
- **/pwm-JetSetGo/src/pages/footerSection.html** implementa el mockup Acerca de 

## Otros aspectos del proyecto que tener en consideración en la evaluación

Pues para empezar nosotros hemos organizado el código tal que para cada .html existe un .css y para los templates introducidos en las páginas solo afecta el .css asociado a ese template no el de la página, por otra parte además del script facilitado en la clase práctica hemos creado uno nuevo para meter el número de offerts que queramos en nuestros homes y así no tener que estar metiendo código .html uno a uno, además de implementar que los botónes se linken a otras páginas.

## Enlaces a Fiigma y Trello
[Figma](https://www.figma.com/design/z5DR4Van2335s5e2t51VRY/PWM-JetSetGo-(2)?node-id=0-1&t=Wv3RxED5R3ridfwG-1)
[Trello](https://trello.com/invite/b/67be606cf130fb9355b0611c/ATTIaf22f69344d8496229faf30b1fab0c11888CA7D6/pwm-sprint1)


