const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  // Serve the HTML file
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/.well-known/acme-challenge/1rnl7BVBB769bTIj9aD4wDTN4F2pQXGCdQ5oV9DrGeU
', (req, res) => {
  const filename = req.params.filename;
  const challengeData = "1rnl7BVBB769bTIj9aD4wDTN4F2pQXGCdQ5oV9DrGeU.LTnAWEJUYniHrAKqAEPZXLIgFFhgasiXPugUOQSUQIA";
  res.send(challengeData);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
