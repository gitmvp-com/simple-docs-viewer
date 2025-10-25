# Formatting

Advanced formatting techniques for your documentation.

## Syntax Highlighting

The documentation viewer supports syntax highlighting for code blocks. Specify the language after the opening backticks:

```javascript
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});
```

```python
def hello_world():
    print("Hello, World!")
    return True
```

```bash
npm install
npm start
```

## Tables

Create formatted tables:

| Feature | Description | Status |
|---------|-------------|--------|
| Markdown | Convert MD to HTML | ✅ |
| TOC | Navigation sidebar | ✅ |
| Syntax | Code highlighting | ✅ |
| Search | Find content | ⏳ |

## Admonitions

Use blockquotes for notes and warnings:

> **Note**: This is an important note that readers should pay attention to.

> **Warning**: This action cannot be undone. Proceed with caution.

> **Tip**: Here's a helpful tip to make your life easier!

## Nested Lists

Create complex nested structures:

1. First level
   * Second level
   * Second level
     * Third level
     * Third level
2. First level again
   1. Ordered second level
   2. Ordered second level

## Definition Lists

Term 1
: Definition for term 1

Term 2
: Definition for term 2
: Another definition for term 2

## Links and References

### Internal Links

Link to other documentation pages:

* [Getting Started](getting-started.md)
* [Installation Guide](installation.md)
* [Quick Start](quick-start.md)

### External Links

* [Markdown Guide](https://www.markdownguide.org/)
* [Express.js](https://expressjs.com/)
* [Marked](https://marked.js.org/)

## Keyboard Shortcuts

Show keyboard shortcuts using `<kbd>` tags:

Press <kbd>Ctrl</kbd> + <kbd>C</kbd> to copy.

Press <kbd>Cmd</kbd> + <kbd>V</kbd> to paste.
