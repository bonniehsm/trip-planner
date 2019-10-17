/** EXPRESS SET UP **/
const express = require('express');
const path = require('path');
const app = express();

//in prod, will run 'npm run build' when you are ready to deploy--use Express server to serve those static files
app.use(express.static(path.join(__dirname, 'build')));

app.get('/test', (req, res) => res.send('testing express setup'));

app.get('/', (req, res) => res.join(__dirname, 'build', 'index.html'));

app.listen(8080);
/*for DEV purposes - added: "proxy": "http://localhost:8080" to package.json
  tells React to proxy API requests to the Node.js server build with Express*/
