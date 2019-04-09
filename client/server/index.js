const express = require('express');
const { createServer } = require('http');
const next = require('next');
const path = require("path");

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler();

const PORT = process.env.PORT || 4000;

app.prepare().then(() => {

  const server = express();

  server.use(express.static(path.join(__dirname, '../static')));

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(PORT, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${PORT}`)
  });
})