const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files (frontend)
app.use(express.static(path.join(__dirname, 'public')));

// API sample endpoint
app.get('/api/places', (req, res) => {
  const places = [
    { id: 1, name: 'Flinders Street Station', city: 'Melbourne' },
    { id: 2, name: 'Sydney Opera House', city: 'Sydney' },
    { id: 3, name: 'Story Bridge', city: 'Brisbane' }
  ];
  res.json(places);
});

// ✅ Start the server only if not running in test mode
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
}

// ✅ Export app so supertest can use it in tests
module.exports = app;
