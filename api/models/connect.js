const mongoose = require('mongoose');
const config = require('config');

const { host, port, user, pass, name } = config.get('db_config');

mongoose
  .connect(`mongodb://${host}:${port}/${name}`, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    user: user,
    pass: pass,
  })
  .then(() => console.log('DB connected'))
  .catch(() => console.log('DB connected failed'));
