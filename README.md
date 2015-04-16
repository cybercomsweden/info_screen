# Cybercom Information Screen

Cyber Portal (name not decided in any way)-
is a new information portal which will be available to all employees at Cybercom (Malmö). The portal will provide useful resources of custom websites and employee registers. There is also a slideshow feature that will be used for screens in the workplace.

## Technologies used
The server is all the parts of MEAN which stands for MongoDB, Express, AngularJS and Node.js. Some parts of the application use socket.io to connect the clients to a realtime structure.
The content-pages and also the sites used in the application uses standard HTML 5 (HTML, JavasScript and CSS), jquery etc. 

## How to use the server
In order to use the server you'll need the tools Node, its package manager and a running instance of MongoDB.

## How to use the server
In order to use the server you'll need the tools Node, its package manager and a running instance of MongoDB.

### Node
Node and NPM (Node Package Manager) need to be installed to use this server (you figure it out- google it!). When this is installed you start the server by:
* __Install dependencies__ by `cd` into the root folder and running `npm install`
* __Run server_ by running the `node server.js` command. If the port specified in the `server.js file` is 80 (or something else heavily used) then you will need to run as `sudo`.

### MongoDB
The server will draw documents from the Mongo database adn so it will also need to be installed. The documents in the database need to be created apart from the content-pages which will be created.
Possibly an init-database-file will be appended at a later time.
* __Just install Mongo__
* __Start__ the server by running the command `mongod`


__To view in browser__ go to url `localhost:3000` or just `localhost` if using port 80.

## Structure

The main script / entry point is the `server.js` file. From there the server uses the files in `app`, `config` and `views`:

### app
In app we have the actual server logic and features.
#### logic
The stuff we want the server to actively 'do'
#### models
Models are defined using mongoose and is used to communicate with the Mongo Database. A model is a "json" (ish) object which will get a collection in the database with the same name as the model.
#### modules
Custom Resources created and used in this project, such as the clock and reading reading the html-folder-structures.
#### routes
This is were Express handles the middleware in the application. Handles the GETs, POSTs etc. Also this is were the rest-api is.

### Config
Constant values at the moment it just contains the database reference.

### Views
Views are the applications / webpages that the server will send as a response (see the routes/middle). These can be with or without Angular, up to you.

### Public

In public we have all the files, scripts etc. that the browser on the client side will need access to; css, js, images etc.
- Backgrounds are photos that can be added to the database and used as backgrounds in slides.
- CSS is the styling
- Images, the images
- resources, other files needed. As of now, a font.

#### JS
Becasue we are using Angular we have some extra structure and files here.

##### Logic
With or without Angular, this is were we put functional scripts. In Angular applications we define our modules here.

##### Controllers
The controllers are the angular- (ng-) controllers used in the html/app. We have these seperated for readability. The controllers get information from the services and handle how the information should be displayed.

##### Services
The Services fetch data from the server/database. They use simple http rest-api-calls.

#### Pages
In pages we have a structure of `pages/<category>/<title>/`. In here we place our html file (must be called `index.html` right now) and (probably) any html structure we want to help us design our page. The pages available are somewhat of a template that can be used and duplicated. 

## Our project
Don't be afraid to change structures and modify. This is created by a total layperson and somethings might be less than optimal ;)
