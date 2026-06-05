const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Soundlnk is live! Ready for development.');
});

app.listen(port, () => {
  console.log(`Soundlnk server running on port ${port}`);
});
