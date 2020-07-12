# Portafolio

### Links

---

[Repositorio](https://github.com/cococov/portfolio)<br/>
[Página de mi portafolio](https://juanlamas.dev/)

### Tecnologías

---

<div class="list-super-index">
+ Lenguajes:
 - JavaScript
</div>

<div class="list-super-index">
+ Frameworks y Bibliotecas:
 - React
 - React Context
 - Material-UI
</div>

<div class="list-super-index">
+ Otros:
 - Markdown
</div>

### Estado

---

En desarrollo.

### Descripción

---

Este es un proyecto que surgió con motivo de dar a conocer mis habilidades como programador, perfil profesional y los proyectos que he hecho de forma personal, además de alguno que haya hecho en el trabajo, del cual tenga permiso para hablar.

Quería que el diseño fuera algo original y no una simple 'landing page', por lo que se me ocurrió imitar la interfaz gráfica de ``VsCode``, ya que es algo que me identifica bien como programador y lo encuentro bastante estético para este fin.

El proyecto inicialmente estaba pensado ser desarrollado con ``React``, usando clases, ``bootstrap`` y ``MobX``, cosa que fue cambiando a medida que fui aprendiendo nuevas cosas y tuve tiempo para ir implementándolas. Actualmente para manejar estados estoy haciendo uso de ``React-Context`` en vez de ``MobX`` y substituí el uso de clases por componentes funcionales y hooks, además últimamente remplacé lo que hice con ``bootstrap`` por ``CSS3`` y ``JSS``.

<div class="img-content-div">
![content-profile](https://juanlamas.dev/img/content/portfolio/portfolio-profile.png "content")
</div>

Uno de los problemas a los que me vi enfrentado, fue el cómo crear contenido de una forma dinámica y no tener que desarrollar una vista completamente nueva cada vez que requiera agregar un proyecto o sección nueva, para lo cual se me ocurrió como solución el crear un componente que interprete documentos de tipo ``Markdown`` y los renderice con los estilos utilizados en el proyecto. Esto me permitirá almacenar los documentos en una base de datos y que a medida que vaya agregando contenido, sin tocar una línea de código, este sea visible inmediatamente en la página web.

<div class="img-content-div">
![content-profile-md](https://juanlamas.dev/img/content/portfolio/portfolio-profilemd.png "content")
</div>

Para lo que es el control de versiones utilicé ``GitHub``. Además en un inicio hice uso de la herramienta ``GithubPages`` para desplegar mi aplicación con un dominio personal, lo que hace un tiempo cambié a ``Vercel``, por las ventajas que esta plataforma ofrecía.

<div class="img-content-div">
![content-portfolio-github](https://juanlamas.dev/img/content/portfolio/portfolio-github.png "content")
</div>

Para lo que es el flujo de trabajo, tareas e ideas, hice uso de la plataforma ``Trello``.

<div class="img-content-div">
![content-portfolio-trello](https://juanlamas.dev/img/content/portfolio/portfolio-trello.png "content")
</div>

Una de las cosas de las que me he preocupado mucho en este proyecto, es el rendimiento de la aplicación y el seguir buenas prácticas. Lo que se puede apreciar en el siguiente screenshot del reporte ofrecido por lighthouse de Google Chrome:

<div class="img-content-div">
![content-portfolio-lighthouse](https://juanlamas.dev/img/content/portfolio/portfolio-lighthouse.png "content")
</div>