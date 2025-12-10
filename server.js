const express = require('express');
const app = express();
const PORT = 3000;

// CHANGE THIS STRING to test your pipeline!
const message = "Hello from Nutanix! This is User02 speaking!"; 

app.get('/', (req, res) => {
  res.send(message);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
