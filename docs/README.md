# PRACTICA 6 - Clases e interfaces genéricas. Principios SOLID

>Informe para la asignatura de Desarrollo de Sistemas Informáticos
>
>>**Autor**: [Eric Dürr Sierra](alu0101027005@ull.edu.es) - **Última modificación**: 21/03/2022

[![Coverage Status](https://coveralls.io/repos/github/ULL-ESIT-INF-DSI-2122/DSI-P06-Eric-Durr-/badge.svg?branch=master)](https://coveralls.io/github/ULL-ESIT-INF-DSI-2122/DSI-P06-Eric-Durr-?branch=master)

***

## [Enlace a la documentacion generada con TypeDoc](http://dsi-p06-code-docs.surge.sh)

## Indice

- [PRACTICA 6 - Clases e interfaces genéricas. Principios SOLID](#practica-6---clases-e-interfaces-genéricas-principios-solid)
  - [Enlace a la documentacion generada con TypeDoc](#enlace-a-la-documentacion-generada-con-typedoc)
  - [Indice](#indice)
  - [Introduccion](#introduccion)
  - [Objetivos](#objetivos)
  - [Actividades previas](#actividades-previas)
  - [Conclusiones](#conclusiones)
  - [Referencias](#referencias)
  - [Estructura del directorio](#estructura-del-directorio)
  - [Comandos npm del repositorio](#comandos-npm-del-repositorio)

***

## Introduccion

## Objetivos

## Actividades previas

(cobertura de código)

(actions para coveralls)

(ampliar cobertura de código sin ensuciar los test de console.log (sinon JS))

## Conclusiones

## Referencias

[Guión de la práctica](https://ull-esit-inf-dsi-2122.github.io/prct06-generics-solid/)

[SOLID principle using TypeScript - Samuele Resca](https://samueleresca.net/solid-principles-using-typescript/)

[Principios SOLID - Apuntes de la asignatura](https://ull-esit-inf-dsi-2122.github.io/typescript-theory/typescript-solid.html)

[SinonJS - Stubs](https://sinonjs.org/releases/latest/stubs/)

[Super Hero Database](https://www.superherodb.com/spider-man/10-133/)

## Estructura del directorio

```txt
P06/
├───.github         |- Carpeta para las configuraciones de github
│   └───workflows/  |- Carpeta con los workflows a ejecutar en las Github Actions
├───dist/           |- Carpeta contenedora del código JavaScript traducido (autogenerada)
├───doc/            |- Carpeta para la documentación generada por TypeDoc
│   ├───assets/
│   └───modules/
├───node_modules/   |- Carpeta contenedora de los paquetes usados en la práctica (autogenerada)
├───docs/           |- Carpeta para el informe de prácticas
│   └───img/        |- Imágenes del informe de prácticas (divididas por secciones)
│       └───tdd/
├───src/            |- Carpeta contenedora del código fuente en TypeScript
└───test/           |- Carpeta contenedora de los test unitarios
```

## Comandos npm del repositorio

- npm run caesar-cypher  `inicia la ejecución del cifrado de Cesar interactivo`
- npm test  `ejecuta los test unitarios`
- npm run test:watch `inicia la ejecución de los test unitarios de manera ininterrumpida`
- npm run test:coverage `inicia la ejecución de los test junto con la cobertura de código`
- npm run get:coverage `transforma el informe de la cobertura de código en formato lcov`
- npm run build `ejecuta los test y traduce el código TypeScript a JavaScript`
- npm run docs `Genera la documentación de código con TypeDoc del código fuente`
