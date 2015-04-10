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

```
__To view in browser__ go to url `localhost:3000` or just `localhost` if using port 80.
