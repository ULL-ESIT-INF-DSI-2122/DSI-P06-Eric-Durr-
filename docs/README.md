# PRACTICA 6 - Clases e interfaces genéricas. Principios SOLID

>Informe para la asignatura de Desarrollo de Sistemas Informáticos
>
>>**Autor**: [Eric Dürr Sierra](alu0101027005@ull.edu.es) - **Última modificación**: 21/03/2022

[![Coverage Status](https://coveralls.io/repos/github/ULL-ESIT-INF-DSI-2122/DSI-P06-Eric-Durr-/badge.svg?branch=master)](https://coveralls.io/github/ULL-ESIT-INF-DSI-2122/DSI-P06-Eric-Durr-?branch=master)

***

## [Enlace a la documentacion generada con TypeDoc](http://dsi-p06-code-docs.surge.sh/modules.html)

## Indice

- [PRACTICA 6 - Clases e interfaces genéricas. Principios SOLID](#practica-6---clases-e-interfaces-genéricas-principios-solid)
  - [Enlace a la documentacion generada con TypeDoc](#enlace-a-la-documentacion-generada-con-typedoc)
  - [Indice](#indice)
  - [Introduccion](#introduccion)
  - [Objetivos](#objetivos)
  - [Actividades previas](#actividades-previas)
  - [Ejercicio 1](#ejercicio-1)
    - [El combate definitivo](#el-combate-definitivo)
    - [Jerarquía de clases - ejercicio 1](#jerarquía-de-clases---ejercicio-1)
    - [principios SOLID Single Responsibility y Open-Closed](#principios-solid-single-responsibility-y-open-closed)
    - [Función de efectividad](#función-de-efectividad)
  - [Ejercicio 2](#ejercicio-2)
    - [DSIFlix](#dsiflix)
    - [Jerarquía de clases - ejercicio 2](#jerarquía-de-clases---ejercicio-2)
    - [principio SOLID de Interface segregation](#principio-solid-de-interface-segregation)
  - [Ejercicio 3](#ejercicio-3)
    - [El cifrado indescifrable](#el-cifrado-indescifrable)
    - [Jerarquía de clases - ejercicio 3](#jerarquía-de-clases---ejercicio-3)
    - [principios SOLID cubiertos](#principios-solid-cubiertos)
    - [Sistema de desplazamiento](#sistema-de-desplazamiento)
    - [Mapeo del valor de la clave](#mapeo-del-valor-de-la-clave)
    - [Texto cifrado](#texto-cifrado)
  - [Conclusiones](#conclusiones)
  - [Referencias](#referencias)
  - [Estructura del directorio](#estructura-del-directorio)
  - [Comandos npm del repositorio](#comandos-npm-del-repositorio)

***

## Introduccion

En esta práctica se pretende reforzar, por medio de tres ejercicios distintos, los conceptos de las clases e interfaces genéricas, abstractas y el uso de los principios SOLID para el desarrollo de los mismos.

A lo largo del informe se presentan las configuraciones iniciales y las características del diseño que justifican el uso de los principios SOLID indicados en el guión. También se explican algunas decisiones tomadas para desarrollar la lógica de implementación de cada uno de los componentes de cada ejercicio.

## Objetivos

El objetivo de esta práctica es disponer de un entorno de desarrollo en el que se implementen los tres ejercicios completamente comprobados, desarrollados mediante una filosofía de desarrollo dirigido por pruebas/comportamiento (BDD/TDD) y cuyo cubrimiento de código se refleje en un informe. Estos ejericios también deben cumplir en la medida de lo posible los principios SOLID, como mínimo aquellos indicados en cada apartado del guión.

## Actividades previas

A parte de las actividades comunes al resto de prácticas (asignción Github Classroom, configuración del repositorio, etc.) en esta práctica se debe preparar el entorno para el cubrimiento de código con Istanbul y Coveralls.

La herramienta `nyc` de cubrimiento de código ya es implementada desde la anterior práctica, por eso es que este repositorio cuenta con los mismos comandos para su uso que el publicado en el ejercicio anterios.

La publicación de la cobertura de código a la plataforma de Coveralls, en este caso, se aplica automáticamente desde una Github action implementada en el fichero `runtests.yml` de este repositorio.

Para poder hacer uso de coveralls es necesario vincular la cuenta de Github a la [plataforma de Coveralls](coveralls.io) y seleccionar el repositorio para el cual se visualiza el informe de cubrimiento de código. Dentro de esta misma plataforma, en el apartado de documentación, se explica cómo publicar la cobertura de código mediante CI (Continous Integration) en distintas plataformas. Para el caso de Github Actions, se especifica que el fichero **yaml** del workflow debe incluir el siguiente fragmento:

```YML
  uses: coverallsapp/github-action@master
  with:
    github-token: ${{ secrets.GITHUB_TOKEN }}
```

Sin embargo, es necesario disponer en el repositorio, en el momento de la ejecución de esa línea, de una carpeta **coverage** que incluya el cubrimiento de código generado con ***nyc*** en un formato **lcov**. Para cubrir estas necesidades se ejecutan otras Actions previas a esa que permiten generar los datos en formato **lcov** y ubicarlos en la carpeta correcta.

Otra necesidad latente en el repositorio son los errores señalados por ESLint en la inclusión de módulos de TypeScript mediante imports. Estos errores son imposibles de resolver sin manipular la configuración, ya que colisionan dos reglas relacionadas con los import no resueltos (por no completar todo el path) y con la inclusión de extensión de archivo (no necesaria). Se resuelve incluyendo algunos plugin de extensión de la herramienta, el fichero de configuración se extiende para incluir:

```JSON
{
···
    "extends": [
        "airbnb-base",
        "plugin:import/typescript"
    ],
    ···
    "rules": {
        "no-unused-expressions": "off",
        "import/prefer-default-export": "off",
        "linebreak-style": "off",
        "no-nested-ternary": "off",
        "import/extensions": [
            "error",
            "ignorePackages",
            {
              "js": "never",
              "jsx": "never",
              "ts": "allways",
              "tsx": "never"
            }
          ]
    }
}
```

Por otro lado, debido al numero incrementado de *console.log()* del código para imprimir resultados se incluye la librería ***sinon*** para hacer uso del stub y poder silenciar los logs y disponer de un listado de tests no interrumpido por estas impresiones por pantalla y a la vez poder cubrir estas líneas de código en los test.

## Ejercicio 1

### El combate definitivo

```txt
Partiendo del desarrollo realizado para el Ejercicio 1 de la Práctica 5, supongamos que ahora queremos incluir distintos
tipos de contendientes a la pelea. Por ejemplo, podríamos incluir personajes del universo Marvel, DC Comics, Star Wars
o Dragon Ball entre otros. Puede incluir otros universos y/o personajes que desee.

Para extender el desarrollo anterior se pide:

  - Desarrolle una clase abstracta llamada Fighter que permita hacer que un contendiente pueda luchar.
    Esta clase se considerará la superclase del resto de clases a implementar.
    Para cada universo, desarrolle la clase que lo represente (Pokemon, Marvel, DC, Star Wars, Dragon Ball, etc).

  - Cada contendiente debe ser descendiente de su clase universo. Además, para cada contendiente se debe poder acceder
    a la información requerida para la clase Pokemon de la práctica anterior (nombre, altura, peso, etc).
    Puede incluir información extra que considere oportuna según el universo.

  - La clase Combat ahora permitará que los combates se disputen entre contendientes de distintos universos.
    Todas las combinaciones deben ser posibles, incluso contendientes del mismo universo. Asimismo, la simulación
    de los combates debe ser similar a la realizada en la práctica anterior. Sin embargo, ahora con cada ataque los
    contendientes deberán mostrar alguna catching phrase representativa de su personaje.

  - Actualice los valores de efectividad de los movimientos de los nuevos contendientes de la forma que considere
    oportuna. Contendientes de un universo son más fuertes que los de otro, personajes concretos son más fuertes
    que otros sin importar el universo o una mezcla de ambas. Puede basarse en un criterio similar al empleado en
    las prácticas anteriores sobre los tipos de Pokemon.
  
  - La clase Pokedex deberá actualizarse para incluir también el resto de contendientes. Esto es, deberá ser capaz
    de almacenar personajes de todos los universos considerados dentro de una misma estructura de datos. Además,
    deberá ofrecer todas las funcionalidades previamente requeridas para los nuevos contendientes.

  - Por último, desarrolle este ejercicio empleando los principios SOLID Single Responsability y Open-Closed.

```

### Jerarquía de clases - ejercicio 1

La jerarquía de clases se ha planteado de forma que todo nuevo universo de jugadores cumpla las características de la clase abstracta fighter para poder instanciar cada luchador de cada universo con las mismas características y para poder hacer referencia en clases que usen muchos tipos de luchadores (como Pokedex o Combat) mediante el tipo `Fighter`. Por otro lado se incluyen clases específicas para la impresión de la Pokedex  y para la impresión de los contendientes de cada universo individualmente, ya que tienen tipos distintos de impresión, la impresión de los contendientes también es heredada de una clase abstracta de impresión de contendientes en la cual se incluye un método abstracto `print()` que es implementado desde la interfaz `FighterPrint`.

```txt
             ┌───────┐
           ┌─│Marvel │
┌────────┐ │ └───────┘
│Fighter │─┼─ ···
└────────┘ │ ┌───────┐
           └─│Pokemon│
             └───────┘
             
                   ┌──────────────┐
                 ┌─│MarvelPrinter │
┌──────────────┐ │ └──────────────┘
│FighterPrinter│─┼─ ···
│(Fighter)     │ │
└──────────────┘ │ ┌──────────────┐
                 └─│PokemonPirnter│
                   └──────────────┘
┌──────────┐
│Combat    │
│(Fighter) │
└──────────┘
┌──────────┐
│Pokedex   │
│(Fighter) │
└──────────┘

┌───────────────┐
│PokedexPrinter │
│(Pokedex)      │
└───────────────┘

```

### principios SOLID Single Responsibility y Open-Closed

Para cumplir el principio de Single Responsibility se han separado las clases por su objetivo individual, es decir, la Pokedex sólo gestiona la inclusión y eliminación de luchadores, su búsqueda o el conocimiento de su propio estado; se traslada la impresión de la misma a una clase individual que se encarga de esta tarea. Lo mismo aplica para las implementaciones concretas de cada universo de luchadores. La clase combat se encarga exclusivamente de iniciar el combate entre dos luchadores, se trasladan las acciones de cada luchador como atacar, defenderse y conocer su efectividad a cada luchador individualmente, ya que se supone que es una acción que cada individuo comete.

De igual manera, la herencia entre clases también refleja el principio Open-Closed, las clases se han diseñado ampliando el concepto de Fighter en cada uno de sus universos cada vez que se requiere modificar un aspecto concreto.

### Función de efectividad

La función de efectividad se ha modificado para ser transparente entre combatientes de distintos universos ya que esta clasificación es extremadamente subjetiva y sujeta a múltiples debates que sólo se pueden basar en la percepción individual de qué universo es más poderoso. Sin embargo, dentro de cada uno de los universos se debe disponer de algún sistema de clasificación jerárquica que permita conocer la superioridad entre unos individuos y otro. Esta clasificación puede ser circular como la de los Pokemon o lineal como la de Marvel.

Ambas funciones de efectiviad devuelven un multiplicador de potencia que contempla los valores 1, 0.5 y 2 en función de qué tan efectiva sea. Este multiplicador se computa en un switch que compara el valor del tipo del atacante para seleccionar una opción en la cual se devueelve un resultado que depende del tipo del oponente.

## Ejercicio 2

### DSIFlix

```txt


Imagine que tiene que diseñar el modelo de datos de una plataforma de vídeo en streaming.
A través del catálogo de dicha plataforma se puede acceder a películas, series y documentales:

  - Defina una interfaz genérica Streamable que trate de especificar propiedades y métodos con los que debería contar
    una colección de emisiones concreta como, por ejemplo, una colección de series. Por ejemplo, deberían definirse
    métodos de búsqueda en dicha interfaz, que permitan obtener listados en función de diferentes términos de búsqueda:
    por año o por nombre, entre otros.
  
  - Defina una clase abstracta genérica BasicStreamableCollection que implemente dicha interfaz genérica. En este punto,
    podrá particularizar algunas de las propiedades y métodos de la interfaz Streamable, aunque otros tendrán que
    permanecer como abstractos para ser definidos más abajo en la jerarquía de clases.
    Todo dependerá del diseño que haya llevado a cabo.
  
  - Tendrá que extender dicha clase abstracta para obtener subclases que modelen cada uno de los tres tipos de
    colecciones: series, películas y documentales.
  
  - Trate de aplicar los principios SOLID. Preste especial atención al diseño de la interfaz Streamable. Si cree que debe
    dividirla en interfaces genéricas más pequeñas porque su diseño inicial es muy complejo, hágalo, con el objetivo de
    cumplir con el cuarto principio SOLID Interface segregation.

```

### Jerarquía de clases - ejercicio 2

Surgen dos nexos principales de jerarquías, uno de ellos describe los elementos que incluirán cada una de las colecciones disponibles en el sistma. Las implementaciones concretas de los elementos de las colecciones se implementan extendiendo una clase abstracta que recoge las propiedades y métodos comunes al resto de los elementos (nombre, duración, valoración, etc.). Las implementaciones concretas inlcuyen aspectos que son relativos sólo a ese tipo de contenido, como los capitulos de una serie o el método `toString()` que es abstracto en la clase padre para que cada elemento lo implemente en función del tipo de contenido que representa.

Estos últimos aspectos pretenden justificar los principios SOLID de Single responsibility y Open-closed.

```txt
                    ┌──────────┐
                  ┌─│MovieItem │
                  │ └──────────┘
┌───────────────┐ │ ┌──────────┐
│StreamableItem │─┼─│SeriesItem│
└───────────────┘ │ └──────────┘
                  │ ┌───────────────┐
                  └─│DocumentaryItem│
                    └───────────────┘
                          ┌──────┐
                        ┌─│Movies│
                        │ └──────┘
┌─────────────────────┐ │ ┌──────┐
│StreamableCollection │─┼─│Series│
└─────────────────────┘ │ └──────┘
                        │ ┌─────────────┐
                        └─│Documentaries│
                          └─────────────┘
```

En este caso, a demás de la herencia de clases, las clases de colecciones son genéricas por lo que las interfaces también deben serlo. Para controlar los tipos de datos y operaciones que se incluyen en las clases se usa la restricción de la variable de tipo genérico. Haciendo uso de la sentencia `<T extends StreamableItem>` en la clase StreamableCollection se limita a elementos de este tipo la instancia de esta clase.

Es en cada una de las implementaciones concretas de la clase StreamableCollection (Series, Movies y Documentaries) donde se especifica el tipo de dato al extender la clase padre, por ejemplo, la cabecera de la clase **Series**:

```TypeScript

export class Series extends StreamableCollection<SeriesItem> 
                    implements SeriesSearch<SeriesItem> {
                      · · ·
}
```

De esta manera, al instanciar una clase Series lo que se hace es instanciar una clase StreamableCollection concretando el tipo de dato, cosa que ocurre para las otras dos colecciones también.

### principio SOLID de Interface segregation

Se propone en el enunciado que se incluya una interfaz Streamable que defina las propiedades y métodos de búsqueda, sin embargo el principio de interface segregation sugiere que una interfaz se ocupe de describir un aspecto concreto. Si la complejidad de una interfaz escala demasiado siempre será mejor separarla en múltiples interfaces. Por eso, en este ejercicio se describen las interfaces:

- StreamableProperties: **Define los atributos que debe ser capaz de describir una clase StreamableCollection**

- StreamableActions: **Define los métodos con los que debe contar una clase StreamableCollection**

- StreamableSearch: **Define exclusivamente los métodos de búsqueda con los que debe contar una clase StreamableCollection**

- StreamablePrint: **Define el método print que obliga a una clase a ser una clase de impresión por pantalla de colecciones de StreamableItem**

- SeriesSearch: **Define exclusivamente los métodos de búsqueda con los que debe contar una clase Series**

## Ejercicio 3

### El cifrado indescifrable

```txt
En el Cifrado César, cada letra de un alfabeto se desplaza cierto número de posiciones. Por ejemplo, suponiendo
el alfabeto ABCDEFGHIJKLMNÑOPQRSTUVWXYZ, si fijamos un Cifrado César con desplazamiento d = 5, entonces, la
letra A pasaría a ser la letra F, la letra B pasaría a ser la letra G, la letra Z pasaría a ser la letra E,
y así sucesivamente.

Existe otro tipo de cifrados donde un texto de entrada se encripta utilizando un conjunto de Cifrados César
con desplazamientos variables basados en las letras de una palabra clave. El desplazamiento se obtiene aplicando
Cifrado César a una letra del mensaje utilizando como desplazamiento la posición de la letra correspondiente de
la clave dentro del alfabeto. Por ejemplo, suponiendo el mismo alfabeto anterior y la palabra clave CLAVE:

              "HOLAESTOESUNAPRUEBA"
              "CLAVECLAVECLAVECLAV"

La letra H de la entrada se cifraría con un desplazamiento d = 3 (que correspondería a la letra K), dado que la
letra C de la clave se encuentra en la posición d = 3 dentro del alfabeto. De un modo similar, la letra O de la
entrada se cifraría con un desplazamiento d = 12 (que correspondería a la letra A), dado que la letra L de la clave
se encuentra en la posición d = 12 del alfabeto, y así sucesivamente. Obsérvese que aunque la palabra clave sea más
corta que el mensaje de entrada, dicha palabra clave debe repetirse hasta cubrir todo el mensaje de entrada.Por último,
también tenga en cuenta que un carácter que no pertenezca al alfabeto se codificará como el mismo carácter.

Cree una clase Cifrado que implemente las operaciones de codificación y decodificación ante un alfabeto y palabra clave
arbitrarios, esto es, definidos por el usuario y que, además, pueden ser variables. Trate de aplicar los principios
SOLID en su diseño.

```

### Jerarquía de clases - ejercicio 3

En este ejericio no se ha diseñado una jerarquía de clases con herencia, sin embargo si que se han diseñado las clases de forma que cada una cumpla un propósito concreto.

La clase alfabeto se ocupa de recoger todos los caracteres considerados dentro del encriptado y el texto, cualquier caracter fuera de este alfabeto es transparente a las operaciones de cifrado. Esto es representado por los métodos `value()` y `element()` que devuelven el valor o el elemento del alfabeto, estos son inconclusos para caracteres fuera del contexto.

La clase clave se representa mediante la clase `Key`, que hace uso de un alfabeto para filtrar los caracteres incluidos en la clave, esta clave es capaz de inferir sus valores de desplazamiento individualmente y en forma de conjunto gracias al alfabeto que incluye.

La clase de cifrado `Cypher` se ocupa de generar el texto cifrado a partir de un texto original que se indica en el constructor, también se pasan al constructor la clave y el alfabeto que usa el sistema de encriptación. Esta clase se ocupa exclusivamente de generar el texto cifrado, de mapear la clave y de calcular el desplazamiento total.

Una última clase `CypherInput` se encarga de extender la clase `Cypher` para ampliar las funcionalidades de la original de modo que se construya el cifrado mediante peticiones por consola al usuario.

```txt
┌──────────┐
│Alphabet  │
└──────────┘
┌──────────┐
│Key       │
│(Alphabet)│
└──────────┘
┌───────────┐
│Cypher     │
│(Key)      │
│(Alphabet) │
└───────────┘
┌────────────┐
│CypherInput │
│(Cypher)    │
└────────────┘

```

### principios SOLID cubiertos

Se trata de cumplir el principio de **Single responsibility** al separar las clases por su funcionalidad individual, al mismo tiempo y sin hacer uso de la herencia, se destaca que el principio **Open-Closed** está presente en la definición de la clase `CypherInput` como extensión de la clase `Cypher`.

Se definen las interfaces `CaesarOperations` y `CypherRequest` para definir las operaciones que envuelven el sistema de cifrado, el principio de **Interface segregation** está presente en la separación de estos dos conceptos para dar cabida a una versión más especializada y simple.

### Sistema de desplazamiento

El desplazamiento individual de cada caracter en el alfabeto se sirve de un método que devuelve el caracter desplazado. Este método recibe el caracter original y el caracter actual de la clave correspondiente. Si el caracter se encuentra en el alfabeto se devuelve el desplazamiento, es decir el elemento del alfabeto cuyo valor de posición original se suma al de la clave, mediante el operador **%** se puede restringir a la longitud del alfabeto, por lo que se selecciona un elemento que esté dentro de ese rango. En el caso de no ser un caracter presente en el alfabeto se devuelve undefined.

```TypeScript
shift(char: string, key: string): string | undefined {
  return this.alphabet.value(char) === -1
    ? undefined
    : this.alphabet
      .element((this.alphabet.value(char) + this.key.value(key) - 1)
              % this.alphabet.toArray().length);
}
```

### Mapeo del valor de la clave

El mapeo de la clave se puede hacer de múltiples formas, pero para evitar estar contando elementos y/o creando segundas cadenas de texto donde se repite la clave **X** veces se implementa un método que hace uso de la capacidad de la clave para ser representada como Array.

Una variable de iteración `i` describe la posición actual de la cadena de texto original que está siendo encriptada, pasando esa posición como la posición del elemento del array a extraer y operándola con el módulo de la longitud de la clave, se obtiene siempre una letra de dentro de esta clave, repitiendo la clave tantas veces como posiciones haya en la cadena de texto original.

```TypeScript
mapKey(i: number): string {
  return this.key.toArray()[i % this.key.toString().length];
}
```

### Texto cifrado

El texto encriptado se computa recorriendo cada elemento del texto original y creando un nuevo array con los desplaamientos de cada caracter en función de la clave. Se hace uso de los métodos anteriormente descritos, `mapKey()` para saber qué valor de la clave pasar al `shift()` y este último para conocer el valor de texto a generar, que en caso de ser `undefined` devuelve el caracter de entrada.

```TypeScript
cypherText(): string {
  return this.text
    .split('')
    /* eslint-disable */
    .map((el, i) => this.shift(el, this.mapKey(i)) === undefined
      ? el
      : this.shift(el, this.mapKey(i)))
    /* eslint-enable */
    .join('')
    .toUpperCase();
}
```

## Conclusiones

El desarrollo de los ejercicios, al introducir dependencias y herencias entre clases, requiere de una implicación más detallada del alumno en el diseño de la jerarquía y de cómo se relacionan estas.

Por otro lado también se añade cierta dificultad al desarrollo cuando se exige el cumplimiento de los principios SOLID, cosa que por otro lado también ayuda a que el código sea más sólido, reutilizable y sostenible, hecho que se hace fehaciente a la hora de relacionar las clases, añadir nuevas clases hijas o utilizar este código en el desarrollo de un programa principal.

## Referencias

[Guión de la práctica](https://ull-esit-inf-dsi-2122.github.io/prct06-generics-solid/)

[SOLID principle using TypeScript - Samuele Resca](https://samueleresca.net/solid-principles-using-typescript/)

[Principios SOLID - Apuntes de la asignatura](https://ull-esit-inf-dsi-2122.github.io/typescript-theory/typescript-solid.html)

[SinonJS - Stubs](https://sinonjs.org/releases/latest/stubs/)

[Super Hero Database](https://www.superherodb.com/spider-man/10-133/)

## Estructura del directorio

```txt
P06/
|____.github/         (Github actions workflow files)
| |____workflows/
| | |____deploy.yml
| | |____runtests.yml
|____dist/            (Transpiled JavaScript code)
|____doc/             (Autogenerated TypeDoc documentation files)
|____docs/            (Assingment report folder)
| |_____config.yml
| |____README.md
|____images/          (Pokemon text images folder)
|____src/             (Source files for TypeScript code exercises)
| |____pe103/
| |____ejercicio-2/
| |____ejercicio-1/
| |____ejercicio-3/
|____test/            (Test workbench folder)
| |____pe103/
| |____ejercicio-2/
| |____ejercicio-1/
| |____ejercicio-3/
|____package.json
|____.gitignore
|____.mocharc.json
|____.eslintrc.json
|____typedoc.json
|____tsconfig.json

```

## Comandos npm del repositorio

- npm run caesar-cypher  `inicia la ejecución del cifrado de Cesar interactivo`
- npm test  `ejecuta los test unitarios`
- npm run test:watch `inicia la ejecución de los test unitarios de manera ininterrumpida`
- npm run test:coverage `inicia la ejecución de los test junto con la cobertura de código`
- npm run get:coverage `transforma el informe de la cobertura de código en formato lcov`
- npm run build `ejecuta los test y traduce el código TypeScript a JavaScript`
- npm run docs `Genera la documentación de código con TypeDoc del código fuente`
