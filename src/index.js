import express from 'express';
const server = express();
import connection from './config/db.js';

const port = 3000;

// Use some middleware here
server.use(express.json());

// Use here your routes or even your router

server.get('/', (req, res) => {
  res.json({ message: 'ok' });
});

// Start the express server here
server.listen(port, () => {
  connection.getConnection((err) => {
    if (err) throw err;
  });
  console.log(
    `Example app listening at http://localhost:${port} and connected to mysql database`
  );
});
