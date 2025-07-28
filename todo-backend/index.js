// index.js
const app = require('./app');
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log('Runner test triggered on UAT branch.');
});

