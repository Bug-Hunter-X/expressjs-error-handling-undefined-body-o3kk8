const express = require('express');
const app = express();
app.use(express.json());
app.post('/users', (req, res) => {
  try {
    const user = req.body;
    if (!user || !user.name) {
      return res.status(400).json({ error: 'Missing or invalid user data' });
    }
    console.log(user.name);
    res.status(201).send();
  } catch (error) {
    console.error('Error processing request:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
app.listen(3000, () => console.log('Server is listening on port 3000'));