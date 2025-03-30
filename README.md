# ✈ JetSetGo.com

# SPRINT 2

## Integrantes:
  - Álvaro Rodríguez Miranda
  - Eduardo Gainza Koller
  - Alberto Redondo Álvarez de Sotomayor

## 🚀 Sprint 2 - Desarrollo de funcionalidades clave

El **SPRINT 2** consta de tres partes principales:

### 1️⃣ Carga dinámica de contenido con JavaScript
Se ha implementado la carga dinámica del contenido final del sitio web utilizando **vanilla JavaScript**.  
Para ello, los datos se almacenan en **ficheros JSON**, estructurados de manera similar a una base de datos, con el objetivo de que en el futuro puedan ser exportados desde un servidor remoto.  
Actualmente, estos archivos JSON están alojados localmente junto con los ficheros HTML, CSS y JavaScript del proyecto.

### 2️⃣ Implementación y validación de formularios
Se ha incorporado varios **formularios** en el sitio web, validado en el **lado cliente** mediante la funcionalidad nativa de **HTML5**.  
Se ha desarrollado un formulario de **registro y autenticación de usuarios**, lo que permite a los usuarios registrados modificar sus datos y cerrar la sesión.

### 3️⃣ Aplicación de Responsive Web Design (RWD)
Para mejorar la accesibilidad y experiencia del usuario, se ha optimizado el diseño de las páginas mediante **Responsive Web Design (RWD)**.  
Se han desarrollado **tres versiones del diseño** para cada template, adaptándolo a distintos tamaños de pantalla:  

- **Dispositivos grandes**

  Se ha utilizado el tamaño por defecto de un Desktop.

- **Dispositivos medianos**

  iPad
  Width: 801px a 1024px 

- **Dispositivos pequeños**

  iPhone 13 
  Width: hasta 800px

## 📂 Estructura actualizada del proyecto

<pre>
pwm-JetSetGo/
├── .idea/               # Configuración del entorno de desarrollo
├── public/              # Archivos públicos accesibles desde el navegador
│   ├── index.html       # Página principal del proyecto
│
├── src/                 # Código fuente del proyecto
│   ├── assets/          # Recursos estáticos
│   │   ├── css/         # Estilos CSS del proyecto
│   │   ├── Images/      # Imágenes utilizadas en la aplicación
│   │   ├── js/          # Scripts de JavaScript
│   │   ├── Json/        # Archivos JSON para datos
│   │
│   ├── mocks/           # Mockups
│   ├── pages/           # Páginas de la aplicación
│   ├── templates/       # Plantillas reutilizables
</pre>

<pre>
├── src/                 # Código fuente del proyecto
│   ├── assets/          # Contiene recursos estáticos como imágenes y archivos JSON
│   │   ├── jsons/       # Ficheros JSON, estructurados de manera similar a una base de datos
│   │   │   ├── cars.json          # Información sobre automóviles disponibles
│   │   │   │   ├── precio         # Precio del automóvil
│   │   │   │   ├── marca          # Marca del automóvil (ej. BMW, Audi, Tesla)
│   │   │   │   ├── modelo         # Modelo específico del automóvil
│   │   │   │   ├── descripcion    # Breve descripción del automóvil
│   │   │   │   ├── valoracion     # Puntuación promedio basada en reseñas
│   │   │   │   ├── imagen         # URL de la imagen del automóvil
│   │   │   │
│   │   │   ├── flights.json       # Información sobre vuelos disponibles
│   │   │   │   ├── origen         # Ciudad o aeropuerto de origen
│   │   │   │   ├── destino        # Ciudad o aeropuerto de destino
│   │   │   │   ├── fecha_de_salida # Fecha de salida del vuelo (YYYY-MM-DD)
│   │   │   │   ├── fecha_de_llegada # Fecha de llegada del vuelo (YYYY-MM-DD)
│   │   │   │   ├── hora_de_salida # Hora de salida del vuelo (HH:MM)
│   │   │   │   ├── hora_de_llegada # Hora de llegada del vuelo (HH:MM)
│   │   │   │   ├── duracion       # Duración total del vuelo (en horas o minutos)
│   │   │   │   ├── precio         # Costo del vuelo
│   │   │   │   ├── imagen_destino # URL de una imagen representativa del destino
│   │   │   │
│   │   │   ├── flights_offerts.json   # Información sobre vuelos disponibles de oferta
│   │   │   │   ├── origen        # Ciudad o aeropuerto de origen
│   │   │   │   ├── destino             # Ciudad o aeropuerto de destino
│   │   │   │   ├── hora_de_salida  # Hora de salida del vuelo (HH:MM)
│   │   │   │   ├── hora_de_llegada    # Hora de llegada del vuelo (HH:MM)
│   │   │   │   ├── duracion        # Duración total del vuelo (en horas o minutos)
│   │   │   │   ├── precio          # Costo del vuelo
│   │   │   │   ├── imagen_destino  # URL de una imagen representativa del destino
│   │   │   │
│   │   │   ├── hotels.json        # Información sobre hoteles disponibles
│   │   │   │   ├── nombre_del_hotel  # Nombre del hotel
│   │   │   │   ├── precio         # Precio por noche
│   │   │   │   ├── valoracion     # Puntuación promedio basada en reseñas
│   │   │   │   ├── estrellas_del_hotel # Clasificación del hotel en estrellas (ej. 3, 4, 5)
│   │   │   │   ├── imagen_hotel   # URL de la imagen del hotel
│   │   │   │   ├── localizacion   # Información de la ubicación del hotel
│   │   │   │   │    ├── ciudad    # Ciudad donde se encuentra el hotel
│   │   │   │   │    ├── pais      # País donde se encuentra el hotel
│   │   │   │   │    ├── calle     # Dirección específica del hotel
</pre>

## 📂 Mockups

- **Ubicación largeDevicesMockups**: `src/mocks/ y de aquí los que no se les especifica ningún device delante del nombre`
- **Ubicación mediumDevicesMockups**: `src/mocks/ y de aquí los mockups que tienen iPad 11 Pro delante`
- **Ubicación smallDevicesMockups**: `src/mocks/ y de aquí los mockups que tienen iPhone 13 delante`

## ➕ Otros aspectos

El registro y el inicio de sesión se están realizando actualmente en **localStorage**, pero en el sprint3 se implementarán mediante el uso de una base de datos real.

Para poder usar el inicio de sesión antes habrá que registrar un usuario. Además, se realiza una validación de formulario 
en  todos los campos de inicio de sesión y de registro los JavaScripts encargados de hacer esto son logIn.js y singUp.js,
por otra parte hemos sustituido el método de carga de templates y estructuras dadas en clase el xlu por nuestros nuevos scripts
y usando el método fetch como se indicó en este sprint. Esos scripts son: loadGeneralStructure.js, loadTemplate.js y loadJsonData.js
Por otro lado al iniciar sesión hemos creado un script que diferencia si la sesión está iniciada para cambiar el header este
script es detectUserLogging.js y cuando tienes la sesión iniciada puedes picar en el perfil del header y hacer logOut, el
logout se hace en el script loadGeneralStructure.js, también hemos implementado otro envio de formulario en la pagina
customesService.html en el cuál si le das a enviar con alguno de los campos sin rellenar te da un aviso y no te deja enviar.

Hemos añadido una nueva página llamada aboutUs la cual se puede acceder en el footer y hace referencia al mockup:
Sobre Nosotros.pdf y también es responsive por otra parte tiene un script el cual es aboutUs.js y coge del github nuestros 
perfiles. Nuestros breakpoints estan definidos de 0px a 800px se aplica el smallDevicesMockups de 800px a 1024px se 
aplica el mediumDevicesMockups y de 1025px en adelante se aplica el largeDevicesMockups. Y por último cargamos el contenido
de los Json mediante loadJsonData.js

## Links
[Figma](https://www.figma.com/design/z5DR4Van2335s5e2t51VRY/PWM-JetSetGo-(2)?node-id=0-1&t=Wv3RxED5R3ridfwG-1)
[Trello](https://trello.com/b/e7qGrfFJ/pwm-sprint2)
