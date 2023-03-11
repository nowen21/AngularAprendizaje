Lo que busca en este repositorio es ir almacenando todo lo aprendido del framawork y poder reutilizarlo en el momento que se necesite

COMANDOS UTILIZADOS

1. npm -v // Obtener versión npm
2. node -v // Obtener versión de node
3. ng v // Obtener versión de Angular
4. npm install @angular/cli -g // Instalar Angular CLI
5. npm install @angular/cli@next o npm install --save-dev @angular/cli@latest // instalar siguiente versión de Angular CLI
6. ng help // Obtener ayuda en la terminal
7. ng new nuevoproyecto // Crear nuevo proyecto de angular
8. ng new nuevoproyecto --skip-install // Crear nuevo proyecto omitiendo dependencias externas
9. ng serve o ng s // Ejecutar proyecto Angular
10. ng generate component nuevoComponente o ng g c nuevoComponente // Crear componente
11. ng generate component nuevoComponente --flat // Evitar crear carpeta al crear un nuevo componente
12. ng build // Crear una construcción
13. ng build --dev // Compilar proyecto en el entorno dev
14. ng ng test // Ejecutar caso de test
15. ng e2e // Ejecutar prueba de un extremo a otro
16. ng set // Cambiar el archivo de configuració angular-cli.json
17. ng generate directive miDirectiva o ng g d miDirectiva // Crear nueva directiva
18. ng generate service miServicio o ng g s miServicio // Crear un servio
19. ng generate class miClase o ng g cl miClase // crar una clase
20. ng generate interface miInterface o ng g i miInterface // crar una interfaz
21. ng generate pipe miPipe o ng g p miPipe // crar una tubería
22. ng generate enum enumDato o ng g e enumDato // Crar enum
23. ng generate module miModulo o ng g m miModulo
24. ng generate guard miVigilante // Crear un Guard en la ruta
25. rm -rf node_modules // Eliminar un módulo
26. npm uninstall --save-dev @angular/cli o npm uninstall -g angular/cli @angular/cli // Desinstalar Angular CLI
27. ng update @angular/cli o ng update @angular/core // Actualizar Angular CLI
28. npm cache clean // Limpiar caché
29. npm install -g typescript@latest // Instalar última versión de TypeScript
30. npm install -g karma-jasmine@latest // Intalar última version de Jasmine/Karma
31. npm install typescript@VERSION_NUMBER // Instalar versión específica de TypeScript
32. npm install -g jasmine@VERSION_NUMBER // Instalar versión específica de Jasmine
33. npm install -g karma@VERSION_NUMBER // Instalar versiún específica de Karma


COMPONENTE:

Un componente controla una parte en pantalla llamada vista

El decorador @Component identifica la clase inmediatamente debajo de ella como una clase de componente y especifica sus metadatos.

Los metadatos de un componente le dicen a Angular dónde obtener los bloques de construcción principales que necesita para crear y presentar el componente y su vista. En particular, asocia una plantilla con el componente, ya sea directamente con el código en línea o por referencia. Juntos, el componente y su plantilla describen una vista.

PARTES:

* selector: Un selector de CSS que le dice a Angular que cree e inserte una instancia de este componente siempre que encuentre la etiqueta correspondiente en la plantilla HTML. Por ejemplo, si el HTML de una aplicación contiene <app-hero-list></app-hero-list>, entonces Angular inserta una instancia de la vista HeroListComponent entre esas etiquetas.
* templateUrl: La dirección relativa al módulo de la plantilla HTML de este componente. Alternativamente, puede proporcionar la plantilla HTML en línea, como el valor de la propiedad template. Esta plantilla define la vista host del componente.

* proveedores: Un array de proveedores para los servicios que requiere el componente. En el ejemplo, esto le dice a Angular cómo proporcionar la instancia de HeroService que el constructor del componente usa para obtener la lista de héroes para mostrar.

Fuente: https://docs.angular.lat/guide/architecture-components

MODULO:

Los NgModules son contenedores para un bloque cohesivo de código dedicado a un dominio de aplicación, un flujo de trabajo o un conjunto de capacidades estrechamente relacionadas. Pueden contener componentes, proveedores de servicios y otros archivos de código cuyo alcance está definido por el NgModule que los contiene.

Una aplicación al menos tiene un módulo que es el módulo raiz

PARTES DEL MÓDULO

* declarations: Los componentes, directivas, y pipes que pertenecen a este NgModule.
* exports: El subconjunto de declaraciones que deberían ser visibles y utilizables en las plantillas de componentes de otros NgModules.
* imports: Otros módulos cuyas clases exportadas son necesarias para las plantillas de componentes declaradas en este NgModule.
* providers: Creadores de servicios que este NgModule aporta a la colección global de servicios; se vuelven accesibles en todas las partes de la aplicación. (También puedes especificar proveedores a nivel de componente, que a menudo es preferido).
* bootstrap: La vista principal de la aplicación, llamado el componente raíz, que aloja todas las demás vistas de la aplicación. Sólo el NgModule raíz debe establecer la propiedad bootstrap.

Fuente: https://docs.angular.lat/guide/architecture-modules

EJERCICIOS CREADOS

AngularAprendizaje
* |----> pruebalo 
* |--------> se realiza el ejercio de crear el proyecto, crar el componente lista de productos, pasar data a un componente hijo y pasar información a un componente padre. Se realiza modificación utilizando una tabla bootstrap y se le da formato a los botones
* |--------> se raliza configuración de una plantilla html para darle mejor formato al proyecto
* |--------> Se agregan las rutas desde el nuevo módulo creado(LayoutsModule)

SERVICIOS: https://docs.angular.lat/guide/architecture-services