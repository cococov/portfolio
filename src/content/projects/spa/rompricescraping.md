# Price Scraper and Notifications for Ragnarok Mobile

### Links

---

[Repositorio](https://github.com/cococov/rom-price-scraping)

### Tecnologías

---

<div class="list-super-index">
+ Lenguajes:
 - JavaScript
</div>

<div class="list-super-index">
+ Frameworks y Bibliotecas:
 - Node.js
 - inquirer.js
 - node-notifier.js
</div>

### Estado

---

Terminado. (2020)

### Descripción

---

En el ultimo año he estado jugando un videojuego de celular llamado "Ragnarok M: Eternal Love", qué es la versión móvil y modernizada del MMORPG "Ragnarok Online". Y como ya es conocido de los MMORPG, en el existe una economía muy fluctuante y diversa, en donde un "Item" que se ve a un precio un día, en los siguientes puede estar al doble o a la mitad, con un stock y demanda igual de fluctuantes.

<div class="rom-economy-wrapper">
  <span class="rom-economy-left">
    <div class="rom-economy-img-wrapper">
      ![content-game](https://juanlamas.dev/img/content/rom-price-scraping/game.jpg "content-phone-landscape")
    </div>
  </span>
  <span class="rom-economy-right">
    <div class="rom-economy-img-wrapper">
      ![content-game-fall](https://juanlamas.dev/img/content/rom-price-scraping/game-fall.jpg "content-phone-landscape")
    </div>
    <div class="rom-economy-img-wrapper">
      ![content-game-rise](https://juanlamas.dev/img/content/rom-price-scraping/game-rise.jpg "content-phone-landscape")
    </div>
  </span>
</div>

En el contexto anteriormente mencionado, muchas veces uno necesita algún item de un precio considerablemente elevado en una cantidad muy grande o algún arma/item extremadamente caro. Para ello se me ocurrió la idea de desarrollar una herramienta que hiciera scraping a los sistemas ya existentes, donde se muestra el precio actual de los items y un historial de este, y que cuando el item estuviese bajo el precio deseado, se me informara por medio de una notificación.

<span class="rom-center">
  <div class="rom-img-wrapper">
    ![content-game](https://juanlamas.dev/img/content/rom-price-scraping/game-exchange.jpg "content-phone-landscape")
  </div>
</span>

La idea mencionada iba avanzando de forma excelente, pero noté que todo el flujo de información venía de una API en especifico, y luego de algunas pruebas, di con la configuración necesaria para nutrir mi sistema con la información que requería.

<span class="rom-center">
  <div class="rom-img-wrapper">
    ![content-game](https://juanlamas.dev/img/content/rom-price-scraping/init.png "content-phone-landscape")
  </div>
</span>

Una vez dejé el scraping de lado, desarrollé el siguiente ``sistema CLI``, que permite configurar uno o más items para observar su precio y si este va a la baja o subiendo, además de otros datos, como el stock o si el item está en periodo de snap. Sumado a la visualización de información se puede configurar un precio deseado y la herramienta te informará por medio de una notificación cuando este este por debajo de ese precio.

<span class="rom-center">
  <div class="rom-img-wrapper">
    ![content-game](https://juanlamas.dev/img/content/rom-price-scraping/setup.png "content-phone-landscape")
  </div>
  <div class="rom-img-wrapper">
    ![content-game](https://juanlamas.dev/img/content/rom-price-scraping/board.png "content-phone-landscape")
  </div>
  <div class="rom-img-wrapper">
    ![content-game](https://juanlamas.dev/img/content/rom-price-scraping/notification.png "content-phone-landscape")
  </div>
</span>

El sistema está desarrollado en ``Node.js``, haciendo uso de las bibliotecas ``inquirer.js`` para el setup de la aplicación y ``node-notifier.js`` para las notificaciones de escritorio.