# Dockerizing-a-NodeJS-web-app

Create a simple nodeJs application and deploy it into a docker container.

1. Create a working directory
> mkdir <working_directory_name>
2. Running this command in working directory will initialize your project
> npm init
This will create a **package.json** file in the folder, that file contains app dependency packages.

```js
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

