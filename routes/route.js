'use strict';

exports.setRoutes = function(app){

  app.use('/', require('./routers/index'));
  app.use('/user', require('./routers/user'));
  app.use('/events', require('./routers/events'));
  app.use('/login', require('./routers/login'));
  app.use('/logout', require('./routers/logout'));
  app.use('/message', require('./routers/message'));
  app.use('/profile', require('./routers/profile'))

};
