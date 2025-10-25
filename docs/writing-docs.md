# Writing Documentation

Learn how to write effective documentation using this system.

## Markdown Basics

Markdown is a lightweight markup language that's easy to read and write. Here are the basics:

### Headings

```markdown
# H1 Heading
## H2 Heading
### H3 Heading
```

### Text Formatting

* **Bold text**: `**bold**`
* _Italic text_: `_italic_`
* `Code`: `` `code` ``

### Lists

Unordered lists:

```markdown
* Item 1
* Item 2
  * Nested item
```

Ordered lists:

```markdown
1. First item
2. Second item
3. Third item
```

### Links

```markdown
[Link text](url)
[Internal link](other-doc.md)
```

### Code Blocks

```markdown
```javascript
const hello = 'world';
```
```

## Best Practices

### Structure Your Content

* Start with an H1 heading (one per page)
* Use H2 for main sections
* Use H3 for subsections
* Keep nesting logical and consistent

### Write Clear Titles

* Be descriptive
* Use action words when appropriate
* Keep titles concise

### Use Examples

Code examples help readers understand concepts quickly:

```javascript
// Good example
const server = express();
server.listen(3000);
```

### Keep It Concise

* Short paragraphs
* Clear sentences
* Focus on one topic per page

## Organizing Content

### File Structure

Keep your documentation organized:

```
docs/
  getting-started/
    intro.md
    installation.md
  guides/
    guide-1.md
    guide-2.md
  reference/
    api.md
```

### Table of Contents

Organize your `toc.yml` to match your file structure:

```yaml
- href: getting-started/intro.md
- topics:
    - href: getting-started/installation.md
```
