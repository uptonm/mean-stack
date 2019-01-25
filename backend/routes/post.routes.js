const actions = require('../controllers/post.controller');

module.exports = app => {
  app.get('/api/posts', actions.getAll);
  app.get('/api/posts/:id', actions.getOne);
  app.post('/api/posts', actions.postOne);
  app.put('/api/posts/:id', actions.putOne);
  app.delete('/api/posts/:id', actions.deleteOne);
}