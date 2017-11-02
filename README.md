# Rest API with hapijs framework
- This repo is a sample Rest API with the Hapi framework:
  - [hapi](https://github.com/hapijs/hapi)
  - [Joi](https://github.com/hapijs/joi)

## Install
```shell
git clone https://github.com/ruslanraupov/hapijs-rest-api.git
cd hapijs-rest-api
npm install
```
## Run
```shell
npm start
```
## Usage
* Created a app.js file using this code:
```javascript
  const hapi = require("hapi");
  const joi = require("joi");

  const server = new hapi.Server();

  server.connection({
      "host": "localhost",
      "port": 3000
  });

  server.route({
      method: "GET",
      path: "/",
      handler: (request, response) => {
        response("Hello World!");
      }
  });

  ...

  server.start(error => {
      if (error) {
          throw error;
      }
      console.log("Listening st " + server.info.uri);
  })
```


Built with  :heart:  by [Ruslan Raupov](https://github.com/ruslanraupov)
