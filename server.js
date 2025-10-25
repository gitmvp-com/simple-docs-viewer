const express = require('express');
const fs = require('fs');
const path = require('path');
const { marked } = require('marked');
const yaml = require('js-yaml');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files
app.use('/static', express.express.static('public'));
app.use(express.static('public'));

// Load TOC from toc.yml
function loadTOC() {
  try {
    const tocPath = path.join(__dirname, 'toc.yml');
    if (fs.existsSync(tocPath)) {
      const tocContent = fs.readFileSync(tocPath, 'utf8');
      return yaml.load(tocContent);
    }
  } catch (error) {
    console.error('Error loading TOC:', error);
  }
  return [];
}

// Read markdown file and convert to HTML
function getMarkdownContent(filePath) {
  try {
    const fullPath = path.join(__dirname, 'docs', filePath);
    if (fs.existsSync(fullPath)) {
      const content = fs.readFileSync(fullPath, 'utf8');
      return marked(content);
    }
  } catch (error) {
    console.error('Error reading markdown:', error);
  }
  return '<p>Content not found</p>';
}

// Generate TOC HTML
function generateTOCHTML(toc, level = 0) {
  let html = '<ul class="toc-list">';
  
  for (const item of toc) {
    if (item.href) {
      html += `<li><a href="/doc/${item.href}" class="toc-link">${item.href.split('/').pop().replace('.md', '')}</a>`;
    }
    
    if (item.topics && item.topics.length > 0) {
      html += generateTOCHTML(item.topics, level + 1);
    }
    
    html += '</li>';
  }
  
  html += '</ul>';
  return html;
}

// Home page
app.get('/', (req, res) => {
  const toc = loadTOC();
  const tocHTML = generateTOCHTML(toc);
  
  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Documentation Viewer</title>
  <link rel="stylesheet" href="/style.css">
</head>
<body>
  <div class="container">
    <aside class="sidebar">
      <h2>Documentation</h2>
      <nav>${tocHTML}</nav>
    </aside>
    <main class="content">
      <h1>Welcome to Documentation Viewer</h1>
      <p>Select a topic from the navigation menu to get started.</p>
      <div class="features">
        <h2>Features</h2>
        <ul>
          <li>📝 Markdown to HTML conversion</li>
          <li>🗂️ Table of contents navigation</li>
          <li>🎨 Clean, readable interface</li>
          <li>⚡ Fast and lightweight</li>
        </ul>
      </div>
    </main>
  </div>
</body>
</html>
  `;
  
  res.send(html);
});

// Document page
app.get('/doc/*', (req, res) => {
  const docPath = req.params[0];
  const toc = loadTOC();
  const tocHTML = generateTOCHTML(toc);
  const content = getMarkdownContent(docPath);
  
  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${docPath.split('/').pop().replace('.md', '')} - Documentation</title>
  <link rel="stylesheet" href="/style.css">
</head>
<body>
  <div class="container">
    <aside class="sidebar">
      <h2><a href="/">Documentation</a></h2>
      <nav>${tocHTML}</nav>
    </aside>
    <main class="content">
      <article class="markdown-body">
        ${content}
      </article>
    </main>
  </div>
</body>
</html>
  `;
  
  res.send(html);
});

app.listen(PORT, () => {
  console.log(`📚 Documentation server running at http://localhost:${PORT}`);
});
