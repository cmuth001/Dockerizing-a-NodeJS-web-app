# Dockerizing-a-NodeJS-web-app
<p align="center">
    <img
      alt="Node.js"
      src="https://nodejs.org/static/images/logo-light.svg"
      width="400"
    />
</p>

Create a simple nodeJs application and deploy it into a docker container.
 1. Create a working directory
    > mkdir <working_directory_name>
  
 2. Running this command in working directory will initialize your project
    > npm init
  
This will create a **package.json** file in the folder, that file contains app dependency packages.

Replace the following code of package.json file 

    ```js
      // package.json

      {
        "name": "docker_web_app",
        "version": "1.0.0",
        "description": "Node.js deploy on Docker container",
        "author": "cmuth001@odu.edu",
        "main": "server.js",
        "scripts": {
          "start": "node server.js"
        },
        "dependencies": {
          "express": "^4.16.1"
        }
      }
    ```
   2. Running this command will install all the dependencies from package.json 
        > npm install
   3. Lets create a **server.js** file that defines a web-app using an Express framework.
  
  ```js
    // server.js
    'use strict';
    var express = require('express');
    var app = express();
    app.get('/', function (req, res) {
      res.send('Hello World!');
    });
    app.listen(3000, function () {
      console.log('Example app listening on port 3000!');
    });
  
  ```
  4. Lets test the application, run the below command
    > node server.js
  
  <p align="center">
    <img
      alt="Node.js"
      src="image1.png"
      width="400"
    />
</p>
