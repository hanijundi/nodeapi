import {
  addNewMeter,
  getMeters,
  getMeterWithID,
  updateMeter,
  deleteMeter
} from '../controllers/crmController';

const routes = (app) => {
  app.route('/meter')
    .get((req, res, next) => {
      // Middleware
      console.log(`Request type: ${req.method}`)
      console.log(`Request URL: ${req.originalUrl}`)
      console.log(`Request IP: ${req.ip}\n`)
      next();
    }, getMeters)

    // post endpoint
    .post((req, res, next) => {
      // Middleware
      console.log(`Request type: ${req.method}`)
      console.log(`Request URL: ${req.originalUrl}`)
      console.log(`Request IP: ${req.ip}\n`)
      next();
    }, addNewMeter);

  app.route('/meter/:meterId')

    // get specific Meter
    .get((req, res, next) => {
      // Middleware
      console.log(`Request type: ${req.method}`)
      console.log(`Request URL: ${req.originalUrl}`)
      console.log(`Request IP: ${req.ip}\n`)
      next();
    }, getMeterWithID)

    // put requset
    .put((req, res, next) => {
      // Middleware
      console.log(`Request type: ${req.method}`)
      console.log(`Request URL: ${req.originalUrl}`)
      console.log(`Request IP: ${req.ip}\n`)
      next();
    }, updateMeter)

    // delete requset
    .delete((req, res, next) => {
      // Middleware
      console.log(`Request type: ${req.method}`)
      console.log(`Request URL: ${req.originalUrl}`)
      console.log(`Request IP: ${req.ip}\n`)
      next();
    }, deleteMeter)
}



export default routes;
