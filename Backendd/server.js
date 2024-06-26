const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 5000;
const usersFilePath = path.join(__dirname, 'users.json');

app.use(bodyParser.json());
app.use(cors());

const readUsers = () => {
  const data = fs.readFileSync(usersFilePath);
  return JSON.parse(data);
};

const writeUsers = (users) => {
  fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));
};

app.post('/signup', (req, res) => {
  const { email, password } = req.body;
  const users = readUsers();
  if (users.some(user => user.email === email)) {
    return res.status(400).json({ message: 'User already exists' });
  }
  users.push({ email, password });
  writeUsers(users);
  res.status(201).json({ message: 'User created' });
});

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  const users = readUsers();
  if (users.some(user => user.email === email && user.password === password)) {
    return res.status(200).json({ message: 'Login successful' });
  }
  res.status(401).json({ message: 'Invalid credentials' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
