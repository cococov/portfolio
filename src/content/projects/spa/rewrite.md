# Rewrite

### Links

---

[Repositorio](https://github.com/cococov/rewrite)<br/>
[GNU Bison](https://en.wikipedia.org/wiki/GNU_Bison)<br/>
[Yacc](https://en.wikipedia.org/wiki/Yacc)

### Tecnologías

---

<div class="list-super-index">
+ Lenguajes:
 - C
</div>

<div class="list-super-index">
+ Frameworks y Bibliotecas:
 - Yacc
 - GNU Bison
</div>

### Estado

---

Terminado. (2017)

### Descripción

---

Rewrite es un pequeño lenguaje de programación, que escribí hace algunos años como proyecto final para la asignatura ``Lenguajes de programación`` en la universidad.

El compilador de Rewrite compila a código ``jasmin`` que luego es compilado a ``JVM bytecode`` que puede ser ejecutado sin problemas en la ``JVM``. El lenguaje cuenta con todo lo básico para funcionar como lenguaje de programación: ciclos, declaración de variables, inicialización de variables, operaciónes matemáticas básicas, imprimir en consola, etc.

Para lo que es la construcción de el lenguaje de programación y su compilador, utilicé el lenguaje de programación ``C`` junto a las herramientas ``Yacc`` y su implementación ``GNU Bison``.

Código de ejemplo:

```
REWRITE_START
	REWRITE_STRING str
{
	str = "Hello World !"
	printString(str)
} REWRITE_END
```

Compilar el compilador:

```sh
bison -d rewrite.y && flex rewrite.l
```
```sh
gcc rewrite.tab.c lex.yy.c symtab.c node.c gencode.c -o Rewrite
```

Compilar un programa escrito en Rewrite:

```sh
./Rewrite [path] [program name] && java -jar jasmin.jar [program name].j
```

Ejecutar un programa escrito en Rewrite:

```sh
java [program name]
```