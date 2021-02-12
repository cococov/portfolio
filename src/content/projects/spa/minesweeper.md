# Busca Minas

### Links

---

[Repositorio](https://github.com/cococov/Busca-Minas)<br/>
[Flood fill algorithm](https://en.wikipedia.org/wiki/Flood_fill)

### Tecnologías

---

<div class="list-super-index">
+ Lenguajes:
 - Java
</div>

<div class="list-super-index">
+ Frameworks y Bibliotecas:
 - Swing
 - Canvas
</div>

### Estado

---

Terminado. (2017)

### Descripción

---

Este fue mi primer proyecto personal de programación, para probarme a mi mismo lo que aprendí en la universidad ese semestre.

El juego básicamente utiliza una ``matriz`` para representar el tablero y con una serie de códigos se define el estado de cada casilla:

<div class="minesweeper-container">
  <span class="minesweeper-span-1">
    | código  |    significado   |
    | ----------- | ----------------- |
    | 0  | no hay mina y a la casilla no se le ha hecho click |
    | 1  | una mina cerca |
    | 2  | dos minas cerca |
    | 3  | tres minas cerca |
    | 4  | cuatro minas cerca |
    | 5  | cinco minas cerca |
    | 6  | seis minas cerca |
    | 7  | siete minas cerca |
    | 8  | ocho minas cerca |
    | 9  | hay mina y a la casilla no se le ha hecho click |
    | 10 | no hay mina y a la la casilla se le ha hecho click |
    | 11 | hay mina y a la casilla se le ha hecho click |
    | 12 | no hay mina y se ha puesto bandera |
    | 13 | hay mina y se ha puesto bandera |
    | 14 | casilla con mina y se perdió el juego |
  </span>
    <span class="minesweeper-span-2">
    <div class="minesweeper-sub-container">
      <span class="minesweeper-sub-div">
      ![main-minesweeper](https://juanlamas.dev/img/content/minesweeper/main.png "content")
      </span>
      <span class="minesweeper-sub-div">
      ![win-minesweeper](https://juanlamas.dev/img/content/minesweeper/win.png "content")
      </span>
      <span class="minesweeper-sub-div">
      ![lose-minesweeper](https://juanlamas.dev/img/content/minesweeper/lose.png "content")
      </span>
    </div>

    Para representar la ``matriz`` de forma gráfica (las casillas) utilicé el ``canvas`` de ``java`` y ``java swing`` para lo que es la ``UI`` del juego.
    Todas las imágenes fueron hechas por mí, esa misma noche, usando ``paint``.

    Aún tengo entre mis planes la actualización de este juego a los conocimientos que tengo hoy en día en ``java``, corrigiendo así todas las malas prácticas y anti-patrones utilizados en esta versión del juego, además de implementar algún algoritmo como ``flood fill algorithm`` para la detección expandida de casillas sin minas. E incluso agregar selección de dificultad y una lista de records.

  </span>
</div>