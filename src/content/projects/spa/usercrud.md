# CRUD de usuarios

### Links

---

[Repositorio](https://github.com/cococov/user-crud)

### Tecnologías

---

<div class="list-super-index">
+ Lenguajes:
 - JavaScript
</div>

<div class="list-super-index">
+ Frameworks y Bibliotecas:
 - React
 - React Native
 - Node.js
 - Express
</div>

<div class="list-super-index">
+ Otros:
 - SQL
 - SQLite
 - API REST
</div>

### Estado

---

Terminado.

### Descripción

---

Este es un proyecto que surgió como base para idear una solución rápida a un problema de sincronización que tenía en otro proyecto. En la base es un simple ``CRUD``, pero que internamente implementa sincronización en el caso de perder la conexión a internet.

La solución es que cada vez que se envíe información al servidor, la app verifique si es que hay conexión a internet y en el caso de no haber, añade un un listener a la espera de detectar conexión y una vez se conecta, envía todos los request que quedaron en espera.

La solución anteriormente mencionada funciona perfecto, pero hay un problema al cerrar la aplicación, ya que al hacerlo se pierden todos los listener. Para solucionar este problema se hizo uso de una base de datos local con ``SQlite`` en donde cada modificación quedaba guardada con un flag de si está sincronizado o no (el cual cambia una vez se sincroniza). Y al abrir la aplicación nuevamente, se verifica todos los items que no han sido sincronizados y se sincronizan.

<div class="img-content-flex-div">
<div class="img-content-phoneview-div">
![content-user-crud-home](https://juanlamas.dev/img/content/user-crud/user-crud-home.png "content")
</div>
<div class="img-content-phoneview-div">
![content-user-crud-updated](https://juanlamas.dev/img/content/user-crud/user-crud-updated.png "content")
</div>
<div class="img-content-phoneview-div">
![content-user-crud-setuser](https://juanlamas.dev/img/content/user-crud/user-crud-setuser.png "content")
</div>
<div class="img-content-phoneview-div">
![content-user-crud-register](https://juanlamas.dev/img/content/user-crud/user-crud-register.png "content")
</div>
<div class="img-content-phoneview-div">
![content-user-crud-update](https://juanlamas.dev/img/content/user-crud/user-crud-update.png "content")
</div>
<div class="img-content-phoneview-div">
![content-user-crud-user](https://juanlamas.dev/img/content/user-crud/user-crud-user.png "content")
</div>
<div class="img-content-phoneview-div">
![content-user-crud-users](https://juanlamas.dev/img/content/user-crud/user-crud-users.png "content")
</div>
<div class="img-content-phoneview-div">
![content-user-crud-deleted](https://juanlamas.dev/img/content/user-crud/user-crud-deleted.png "content")
</div>
</div>