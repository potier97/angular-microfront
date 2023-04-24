# NpaMicroFrontMofe

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.4.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Creación del Proyecto

Se crea el esqueleto de la app
![Basado en](https://www.youtube.com/watch?v=12x2QpDCsfk&ab_channel=LogiDev)

```
 ng new npa-micro-front-mofe --create-application=false
```

![](https://github.com/potier97/angular-microfront/blob/master/assets/creacion.PNG)


## Creación del Host 

Conocido como el "CONTENDEDOR" del sitio, normalmente se declara como shell, se configurar las opciones basicas como el routing y los estilos del sitio

```
ng generate application mf-shell --style=scss --routing=true
```

![](https://github.com/potier97/angular-microfront/blob/master/assets/creacion-shell.PNG)

## Creación de un Microfront 

Contenido de la aplicación, normalmente se crea sin hoja de rutas, se configurar unicamente con los estilos del sitio

```
ng generate application mf-payments --style=scss --routing=false 
ng generate application mf-shopping --style=scss --routing=false 
```

![](https://github.com/potier97/angular-microfront/blob/master/assets/creacion-mf1.PNG)
![](https://github.com/potier97/angular-microfront/blob/master/assets/creacion-mf2.PNG)

## Creación de una Lubreria 

Aplicación con la libreria de la aplicación, para compartir los componentes y servicios unicos del sitio

```
ng generate library commons-lib 
```

![](https://github.com/potier97/angular-microfront/blob/master/assets/creacion-library.PNG)

## Instalación libreriaModule Federation

Libreria para control de la federación de los modulos

```
npm i -D @angular-architects/module-federation
```

![](https://github.com/potier97/angular-microfront/blob/master/assets/dependency-mofe.PNG)

## Agregar la herramienta a cada Modulo

Se configura los projects en los que ejecutan componentes o shell de Angular
Se configura para el Shell
 - Project -> Nombre del micro
 - Port -> Puerto en el que corre
 - Type host -> Siempre seran host para la shells

```
ng add @angular-architects/module-federation --project mf-shell --port 4200 --type host
```

![](https://github.com/potier97/angular-microfront/blob/master/assets/mf-configuration.PNG)

Configuración Microfronends
Se debe tener en cuenta:
 - Project -> Nombre del micro
 - Port -> Puerto en el que corre
 - Type remote -> Siempre seran remote para los micros

```
ng add @angular-architects/module-federation --project mf-payments --port 4208 --type remote
ng add @angular-architects/module-federation --project mf-shopping --port 4210 --type remote
```

![](https://github.com/potier97/angular-microfront/blob/master/assets/mf-configuration-1.PNG)
![](https://github.com/potier97/angular-microfront/blob/master/assets/mf-configuration-2.PNG)

Posterior a la modificación de los microfront con el CLI se hace la configuración del shell en el webcongif para configurar los puertos definidos


![](https://github.com/potier97/angular-microfront/blob/master/assets/puertos-shell.PNG)


## Generar Modulos dentro de los MF

Se ejecutan los comandos normalmente como se hace en cualquier proyecto de angular, pero se incluye el nombre del proyecto

```
ng generate module products --project mf-shopping
```

![](https://github.com/potier97/angular-microfront/blob/master/assets/modulos.PNG)


## Generar Archivo de Rutas dentro de los MF

Se ejecutan los comandos normalmente como se hace en cualquier proyecto de angular, pero se incluye el nombre del proyecto

```
ng generate module app-routing --flat --module=app --project mf-shopping
```

![](https://github.com/potier97/angular-microfront/blob/master/assets/routes.PNG)


## Generar Archivo de Componentes dentro de los MF

Se ejecutan los comandos normalmente como se hace en cualquier proyecto de angular, además se le indica el nombre del micro y el nombre del modulo

```
ng generate component products  --module=products --project mf-shopping   
```

![](https://github.com/potier97/angular-microfront/blob/master/assets/components.PNG)

Componentes anidados

```
ng generate component products  --module=products --project mf-shopping   
```
![](https://github.com/potier97/angular-microfront/blob/master/assets/nested-components.PNG)

---------------------------------------------------------------------

## Commons Lib

Se debe tratar como una dependencia más del proyecto, por ende se debe de compilar previamente, es la unica que tiene  un package.json adicional, por lo tanto si se comparten las mismas dependencias con el proyecto general y la libreria, se debe´ra de instalar la misma versión.

Se configura el alias del tsconfig para hacer referencia a esta y poder ser llamada desde los micros

![](https://github.com/potier97/angular-microfront/blob/master/assets/alias-library.PNG)

Se debe de configurar cada Micro para que acepte las configuraciones de los alias

![](https://github.com/potier97/angular-microfront/blob/master/assets/alias-modules.PNG)
