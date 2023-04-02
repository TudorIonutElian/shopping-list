const express = require('express');
const server = express();

const port = 3000;

// Use some middleware here
server.use(express.json());

// Use here your routes or even your router
server.get('/', (req, res) => {
  res.json({ message: 'ok' });
});

// Start the express server here
server.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
