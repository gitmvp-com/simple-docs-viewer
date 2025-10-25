# Simple Docs Viewer

> MVP version of a documentation site inspired by [OutSystems/docs-odc](https://github.com/OutSystems/docs-odc)

A lightweight, easy-to-use documentation viewer that converts Markdown files to beautiful HTML pages with navigation.

## ✨ Features

- 📝 **Markdown Support** - Write documentation in simple Markdown format
- 🗂️ **Table of Contents** - Hierarchical navigation via YAML configuration
- 🎨 **Clean Interface** - Distraction-free reading experience
- ⚡ **Lightweight** - Minimal dependencies, fast performance
- 🚀 **Easy Setup** - Get started in minutes

## 🚀 Quick Start

### Installation

```bash
# Clone the repository
git clone https://github.com/gitmvp-com/simple-docs-viewer.git
cd simple-docs-viewer

# Install dependencies
npm install

# Start the server
npm start
```

Open your browser and navigate to `http://localhost:3000`

## 📁 Project Structure

```
simple-docs-viewer/
├── docs/              # Your markdown documentation files
│   ├── getting-started.md
│   ├── installation.md
│   └── ...
├── public/            # Static assets
│   └── style.css      # Styles for the viewer
├── toc.yml            # Table of contents configuration
├── server.js          # Express server
└── package.json       # Dependencies
```

## 📝 Writing Documentation

1. **Create a Markdown file** in the `docs/` directory:

```bash
touch docs/my-guide.md
```

2. **Add content** using standard Markdown:

```markdown
# My Guide

This is my documentation page.

## Features

* Easy to write
* Beautiful output
```

3. **Update toc.yml** to add navigation:

```yaml
- href: my-guide.md
```

4. **Restart the server** and view your documentation!

## 🔧 Configuration

### Customizing the Port

```bash
PORT=8080 npm start
```

### Table of Contents Format

The `toc.yml` file defines your documentation structure:

```yaml
# Section Title
- href: intro.md
- topics:
    - href: chapter-1.md
    - href: chapter-2.md

# Another Section
- href: advanced.md
```

## 📦 Dependencies

- **express** (^4.18.2) - Web server framework
- **marked** (^9.1.6) - Markdown to HTML converter
- **js-yaml** (^4.1.0) - YAML parser for table of contents

## 🎨 Customization

Edit `public/style.css` to customize the look and feel:

- Sidebar colors and width
- Typography and spacing
- Code syntax highlighting
- Responsive breakpoints

## 🔗 Links

- [Live Demo](http://localhost:3000) (after starting server)
- [Documentation Guide](http://localhost:3000/doc/writing-docs.md)
- [Markdown Reference](http://localhost:3000/doc/markdown-guide.md)

## 📄 License

MIT

## 🙏 Acknowledgments

Inspired by [OutSystems/docs-odc](https://github.com/OutSystems/docs-odc) - A comprehensive documentation system for OutSystems Developer Cloud.

## 🤝 Contributing

Contributions are welcome! Feel free to:

- Add new features
- Improve documentation
- Fix bugs
- Suggest enhancements

---

**Built with ❤️ as an MVP version of a documentation viewing system**
