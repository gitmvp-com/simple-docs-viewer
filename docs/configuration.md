# Configuration

Learn how to configure the Documentation Viewer for your needs.

## Directory Structure

The documentation system uses this structure:

```
simple-docs-viewer/
├── docs/              # Your markdown files
├── public/            # Static assets (CSS, images)
│   └── style.css      # Stylesheet
├── toc.yml            # Table of contents
├── server.js          # Web server
└── package.json       # Dependencies
```

## Table of Contents (toc.yml)

The `toc.yml` file defines the navigation structure:

```yaml
# Section title
- href: file.md
- topics:
    - href: nested-file.md
    - href: another-file.md

# Another section
- href: section-2.md
- topics:
    - href: topic-2-1.md
```

### TOC Format

* **href**: Path to markdown file (relative to `docs/` directory)
* **topics**: Nested items (optional)
* Comments start with `#`

## Server Configuration

### Port

Change the port by setting the `PORT` environment variable:

```bash
PORT=8080 npm start
```

Or modify `server.js`:

```javascript
const PORT = process.env.PORT || 3000;
```

### Base Path

If you want to serve from a subdirectory:

```javascript
app.use('/docs', express.static('public'));
```

## Styling

Customize the appearance by editing `public/style.css`.

### Color Scheme

Main colors:

* Primary: `#3498db` (blue)
* Dark: `#2c3e50` (dark blue)
* Light: `#ecf0f1` (light gray)
* Background: `#f5f5f5`

### Sidebar Width

Adjust in `style.css`:

```css
.sidebar {
  width: 280px;  /* Change this value */
}

.content {
  margin-left: 280px;  /* Match sidebar width */
}
```

## Markdown Extensions

The viewer uses the `marked` library with default settings. You can customize markdown rendering in `server.js`:

```javascript
const { marked } = require('marked');

// Configure marked options
marked.setOptions({
  gfm: true,  // GitHub Flavored Markdown
  breaks: true,  // Convert \n to <br>
  headerIds: true,  // Add IDs to headers
});
```

## Environment Variables

| Variable | Description | Default |
|----------|-------------|----------|
| `PORT` | Server port | `3000` |
| `NODE_ENV` | Environment | `development` |

## Production Deployment

### Option 1: Node.js Server

```bash
NODE_ENV=production npm start
```

### Option 2: Static Site Generation

You can extend the system to generate static HTML files:

```bash
npm run build
```

## Tips

* Keep documentation files in the `docs/` directory
* Use relative links between documents
* Test locally before deploying
* Update `toc.yml` when adding new pages
