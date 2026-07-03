const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname)));

app.post('/api/login', (req, res) => {
  const { username, password } = req.body || {};
  if (typeof username === 'string' && username.trim().toLowerCase() === 'sweetie' && password === 'lovechandu') {
    return res.json({
      success: true,
      message: 'Welcome back, Sweetie! Your love story with Chandu is waiting.',
      redirect: '/sweetie/index.html'
    });
  }

  return res.status(401).json({
    success: false,
    message: 'Login failed. Enter name Sweetie and password lovechandu to continue.'
  });
});

app.get('/api/profile', (req, res) => {
  res.json({
    herName: 'Sweetie',
    myName: 'Chandu',
    birthday: '31 March 2006',
    friendsSince: 'September 2021',
    relationshipSince: '29 September 2025',
    loveMessage: 'I love you more every day, Sweetie. You are my best friend and my world.'
  });
});

app.listen(port, () => {
  console.log(`Sweetie love site backend running on http://localhost:${port}`);
});
