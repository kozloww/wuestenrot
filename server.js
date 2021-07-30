const express = require('express');
const app = express();

app.use(express.static('./dist/wuerostenr'));

app.get('/*', function(req, res) {
  res.sendFile('index.html', {root: 'dist/wuerostenr/'}
  );
});

app.listen(process.env.PORT || 8080);
