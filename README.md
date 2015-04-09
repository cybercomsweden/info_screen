# Cybercom Information Screen

snabbinfo}}
An information portal using node and html technologies for internal use.
The portal will have acces to specialized websites which will also be available in a slideshow feature.

## Technologies used
This is a Node based project. To be able to run this you'll need to install "Node.js" and its package manager, "npm". Because of the .ignore-file the modules needed for projects are discarded in pull/push -s. So, to run this you need to install dependencies with npm and run with node.js.

The slides are fully functional webpages which you put in the `public/pages/{category}/slide_x`-folder. These can have styling, javascript and resources.

## How to use the server
In order to use the server you'll need the tools Node, its package manager and a running instance of MongoDB.

### Node
Node and NPM (Node Package Manager) need to be installed to use this server (you figure it out- google it!). When this is installed you start the server by:
* __Install dependencies__ by `cd` into the root folder and running `npm install`
* __Run server__ by running the `node server.js` command. If the port specified in the `server.js file` is 80 (or something else heavily used) then you will need to run as `sudo`.


### MongoDB
The server will draw documents from the Mongo database adn so it will also need to be installed. The documents in the database need to be created apart from the content-pages which will be created.
Possibly an init-database-file will be appended at a later time.
* __Just install Mongo__
* __Start__ the server by running the command `mongod`

#### Try it!
__To view in browser__ go to url `localhost:3000` or just `localhost` if using port 80.
