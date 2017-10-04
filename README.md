# curso_Angular
Curso de angular (Málaga)
Fecha Octubre 2017

# Configurar por primera vez git:
Echarle un vistazo a este enlace:

https://git-scm.com/book/es/v1/Empezando-Configurando-Git-por-primera-vez

    $ git config --global user.name "John Doe"
    $ git config --global user.email johndoe@example.com


#Configurar nuestro proxy
git config --global http://user:password@proxy.indra.es:8080
npm config set proxy http://user:password@proxy.indra.es:8080
npm config set https-proxy http://user:password@proxy.indra.es:8080

#Primeros pasos con angular-cli
    npm install -g @angular/cli
    ng new PROJECT-NAME
    cd PROJECT-NAME
    ng serve 
Podemos evitar descargar node_modules con
    ng new [nombre proyecto] --skip-install 
o también podemos usar el paramtro abreviado "-si"


#Añadimos bootstrap a la instalación.
    npm -s install bootstrap 
(me añade una dependencia al proyecto con el -s en concreto la de bootstrap)
    npm install 
lee package.json e intala las dependencias en node_modules

Si tenemos enlaces simbolicos evitamos los warnings poniendo lo siguiente.

ng serve --preserve-symlinks

Hemos modificado .angular-cli.json para modificar los scripts. en concreto

# Construcción para generar distribución
    ng build
    ng build -t production

# Generar componentes usando ng
    ng generate component [name] genera el componente con nombre 'name'
también vale con:
     ng g c [name]

También para crear un componente colgando o dentro de un módulo tenemos que indicar la ruta del módulo
por ejemplo:
    ng g c shared\[nombre del componente]

#Consejos de componentenes
Todo lo que no sea inyección de dependencias mejor ponerlo en el onInit

#Crear un módulo:
    ng g m [nombre]

#Siempre se me olvida meter en app.module.ts
import {FormsModule} from '@angular/forms';
para usar formularios binding

#Problema con los events emitter
Se tienen que instanciar antes del ngOnInit. no podemos instanciar ahí, tenemos que hacerlo bien en el constructor o en la declaración.