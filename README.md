# Repo para el sitio del periodico online del liceo nibaldo sepúlveda fernandez.

Este repositorio esta hecho para que los alumnos del liceo nibaldo de portezuelo, aprendan sobre desarrollo web con HTML + CSS + Javascript.

En el futuro agregaremos flujos de trabajo que incluyan librearías externas, como normalize, bootstrap, jquery o alpineJS. Luego agregaremos flujos de trabajo que automatizen los servicios de compilación, un servidor de desarrollo, optimización de imágenes, optimización de css.

Luego aprenderemos sobre frameworks de desarrollo modernos como React, Angular, Vue o Astro.

Por el momento el sitio web cuenta con un servicio estático de desarrollo web e irá avanzando en este proceso utilizando git, para que aprendan a colaborar con otros desarrolladores en un equipo de trabajo.

## Herramientas usadas>

1. Cosas super sencillas por el momento: HTML, CSS y JS
2. Una hoja externa de Normalize.css
3. Un servidor http sencillo con función de live reload.

## Servidor HTTP Que?? Como colaboramos con el diario profe?

Los pasos a seguir para arrancar el servidor (y empezar a colaborar en el proyecto) son los siguientes:

1. Crearse una cuenta de Github
2. Entrar a este repositorio y hacerle un fork (es como tener una propia copia del proyecto)
3. Clonar el fork (de ustedes) a su propio computador con el comando `git clone <url_del_fork>` en la <url_del_fork> deben escribir la dirección que esta en su perfil de github.
4. Instalar Node y NPM (lo necesitaran más adelante, en clases se les explicará que es esto)
5. Una vez clonado, ingresar en la carpeta y escribir dentro de la terminal de windows
   `npm i`
6. Luego escribir `npm run dev`
7. Esto generará unos textos en la consola, y si todo sigue bien, deberían ingresar a la URL localhost:1234 y el diario se deberia ver.
8. Si hacen un cambio en su codigo, se recargará automáticamente la página! Es magia 🧙‍♂️🧙‍♂️... (La verdad es que no, pero luego explicaremos que es esto de NPM y eso de localhost y el 1234).

## Pendientes>

1. Como primera tarea de Javascript, hay que implementar una fecha para que se muestre en la parte superior.
