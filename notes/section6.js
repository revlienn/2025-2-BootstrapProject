// COURSE 40
/*
npm init -y
npm i sass

package.json
    "sass:build": "sass --no-source-map scss:css",
        source map is for debugging, rarely used
        this compile scss to css
    "sass:watch": "sass --no-source-map --watch scss:css"
        recompile everytime you modify the sass file
    npm run sass:build
        now you get the css file
    npm run sass:watch
        so it recompile automatically

index.html
    add stylesheet, styles.css
*/

// COURSE 41
/*

want customise bootstrap

npm i bootstrap
node modules>scss>_variables.scss
    this is where all of your vars are
scss folder, new file, bootstrap.scss
    @import '../node_modules/bootstrap/scss/bootstrap';
    npm run sass:build
        refresh this'll recompile your scss into css
        will create a file called bootstrap.css
index.html
    add styles, bootstrap.css
        basically, you recompile all bootstrap scss into your bootstrap css

bootstrap.scss
    above @import, locate the var you wanna change, then reassign
    npm run sass:build or npm run sass:watch
        this effectively overwrite without modifying the original file

want copy js bootstrap
    from node module>dist>js>copy bootstrap.bundle.min.js
        paste into your js folder, then insert in index.html
    notice in angular may be different, insert into the settings file under script if i recall correctly


*/

// COURSE 42
/*

want install font awesome

npm i @fortawesome/fontawesome-free
scss, new file font-awesome.scss
    import the lines
    npm run sass:build, to create your css
index.html
    insert styles, font-awesome
notice we dont do the steps below in angular
    node-modules>@fortawesome>fontawesome-free
    copy webfonts folder into your root

angular


*/
