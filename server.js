const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3001;

app.use(bodyParser.json());

// Add error handling middleware
app.use((err, req, res, next) => {
  if (err.code === 'ECONNRESET') {
    console.error('Connection reset by peer');
    res.status(500).send('Connection was reset');
  } else {
    next(err);
  }
});

let scanLogs = [];

app.post('/log-scan', (req, res) => {
  const { url } = req.body;
  scanLogs.push({ url, timestamp: new Date() });
  res.status(200).send('Scan logged');
});

app.get('/scan-logs', (req, res) => {
  res.json(scanLogs);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});