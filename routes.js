const getState = require('./controller.js');

var appRouter = (app) => {
  app.post("/", (request, response) => {
    var point = [request.body.longitude, request.body.latitude];
    var state = getState(point);
    response.status(200).send("Point is in state: " + state);
  });
}

module.exports = appRouter;
