# NpaMicroFrontMofe

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Creación del Proyecto

Se crea el esqueleto de la app

```
 ng new npa-micro-front-mofe --create-application=false
```

![](https://github.com/potier97/angular-microfront/blob/master/assets/creacion.png)


## Creación del Host 

Conocido como el "CONTENDEDOR" del sitio, normalmente se declara como shell, se configurar las opciones basicas como el routing y los estilos del sitio

```
ng generate application mf-shell --style=scss --routing=true
```

![](https://github.com/potier97/angular-microfront/blob/master/assets/creacion-shell.png)

## Creación de un Microfront 

Contenido de la aplicación, normalmente se crea sin hoja de rutas, se configurar unicamente con los estilos del sitio

```
ng generate application mf-payments --style=scss --routing=false 
ng generate application mf-shopping --style=scss --routing=false 
```

![](https://github.com/potier97/angular-microfront/blob/master/assets/creacion-mf1.png)
![](https://github.com/potier97/angular-microfront/blob/master/assets/creacion-mf2.png)

## Creación de una Lubreria 

Aplicación con la libreria de la aplicación, para compartir los componentes y servicios unicos del sitio

```
ng generate library commons-lib 
```

![](https://github.com/potier97/angular-microfront/blob/master/assets/creacion-library.png)

## Instalación libreriaModule Federation

Libreria para control de la federación de los modulos

```
npm i -D @angular-architects/module-federation
```

![](https://github.com/potier97/angular-microfront/blob/master/assets/dependency-mofe.png)

## Agregar la herramienta a cada Modulo

Se configura los projects en los que ejecutan componentes o shell de Angular

```
ng add @angular-architects/module-federation --project mf-shell --port 4200 --type host
```

![](https://github.com/potier97/angular-microfront/blob/master/assets/mf-configuration.png)

