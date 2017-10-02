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


#Añadimos bootstrap a la instalación.
    npm -s install bootstrap 
(me añade una dependencia al proyecto con el -s en concreto la de bootstrap)
    npm install 
lee package.json e intala las dependencias en node_modules

Si tenemos enlaces simbolicos evitamos los warnings poniendo lo siguiente.

ng serve --preserve-symlinks

Hemos modificado .angular-cli.json para modificar los scripts. en concreto