const express = require('express');
const app = express();
app.use(express.json());
app.post('/users', (req, res) => {
  const user = req.body;
  // Missing error handling for cases where req.body is invalid or missing
  console.log(user.name); // Potential error if user.name is undefined
  res.status(201).send();
});
app.listen(3000, () => console.log('Server is listening on port 3000'));