const express = require("express");
const port = process.env.PORT || 4002;
const index = require("./routes/index");
const app = express();


app.use(index);


if(process.env.NODE_ENV === 'production') {
  app.use(express.static('public'));

  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
  });

}


server.listen(port, () => console.log(`Listening on port ${port}`));