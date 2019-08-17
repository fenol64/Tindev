const express = require('express');
const DevController = require('./Controllers/DevController');
const likeController = require('./Controllers/likeController');
const dislikeController = require('./Controllers/dislikeController');
const routes = express.Router();

routes.get('/', (req, res) => {
    return res.json({ message: `Hello ${req.query.name}` });
});

routes.post('/devs', DevController.store);
routes.get('/devs', DevController.index);

routes.post('/devs/:devId/likes', likeController.store);
routes.post('/devs/:devId/dislikes', dislikeController.store);


module.exports = routes; 