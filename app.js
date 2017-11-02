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

server.route({
    method: "GET",
    path: "/account/{username}",
    handler: (request, response) => {
      var accountMock = {};
      if (request.params.username == "ruslanraupov") {
          accountMock = {
              "username": "ruslanraupov",
              "password": "123456",
              "facebook": "https://www.facebook.com/7u514n74up0v",
              "instagram": "https://www.instagram.com/7u514n/",
              "website": "www.ruslanraupov.uz"
          }
      }
      response(accountMock);
    }
});

server.route({
    method: "POST",
    path: "/account",
    config: {
      validate: {
          payload: {
              firstname: joi.string().required(),
              lastname: joi.string().required(),
              timestamp: joi.any().forbidden().default((new Date).getTime())
          },
          query: {
              alert: joi.boolean().default(false)
          }
      }
    },
    handler: (request, response) => {
        console.log(request.query);
        response(request.payload);
    }
});

server.start(error => {
    if (error) {
        throw error;
    }
    console.log("Listening st " + server.info.uri);
})
