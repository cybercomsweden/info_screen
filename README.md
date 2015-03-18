# Cybercom Information Screen
An info screen using node and html technologies for internal use

This is a Node based project. To be able to run this you'll need to install "Node.js" and its package manager, "npm". Because of the .ignore-file the modules needed for projects are discarded in pull/push -s. So, to run this you need to install dependencies with npm and run with node.js.

The slides are fully functional webpages which you put in the `slides/slide_x`-folder. These can have styling, javascript and resources.


How To Run Server:
- move to the directory of the app.js / root
- use `npm install` to install dependencies descriped in package.json.
- run the server with `node app.js`

( - The server is listening for port 3000 at the moment, this can be changed to port 80 as long as the port is not busy. In that case node will require sudo priveliges and also that no other application is using that port (such as apache). Should be changed to 80 when in "production" but for now it's nice not to have too enter the user password to start the node server)

How To View:

- open a browser and go to localhost:port [http://localhost:3000]
