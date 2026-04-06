const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve all static files from the root directory
app.use(express.static(path.join(__dirname)));

// Serve index.html at root if it exists, otherwise list available pages
app.get('/', (req, res) => {
  const indexPath = path.join(__dirname, 'index.html');
  if (fs.existsSync(indexPath)) {
    res.sendFile(indexPath);
  } else {
    // No index.html — redirect to the first available HTML file
    const htmlFiles = fs.readdirSync(__dirname).filter(f => f.endsWith('.html'));
    if (htmlFiles.length > 0) {
      res.redirect('/' + htmlFiles[0]);
    } else {
      res.status(404).send('No HTML files found.');
    }
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
