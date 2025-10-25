# Markdown Guide

Complete reference for Markdown syntax supported by this documentation viewer.

## Headers

```markdown
# H1
## H2
### H3
#### H4
##### H5
###### H6
```

## Emphasis

```markdown
*italic* or _italic_
**bold** or __bold__
***bold italic*** or ___bold italic___
~~strikethrough~~
```

## Lists

### Unordered

```markdown
* Item 1
* Item 2
  * Nested item 2.1
  * Nested item 2.2
```

### Ordered

```markdown
1. First item
2. Second item
3. Third item
```

## Links

```markdown
[Link text](https://example.com)
[Link with title](https://example.com "Title")
[Reference link][ref]

[ref]: https://example.com
```

## Images

```markdown
![Alt text](image.jpg)
![Alt text](image.jpg "Image title")
```

## Code

### Inline Code

```markdown
Use `code` for inline code.
```

### Code Blocks

```markdown
```javascript
function hello() {
  console.log('Hello, world!');
}
```
```

## Tables

```markdown
| Header 1 | Header 2 |
|----------|----------|
| Cell 1   | Cell 2   |
| Cell 3   | Cell 4   |
```

Result:

| Header 1 | Header 2 |
|----------|----------|
| Cell 1   | Cell 2   |
| Cell 3   | Cell 4   |

## Blockquotes

```markdown
> This is a blockquote.
> It can span multiple lines.
```

Result:

> This is a blockquote.
> It can span multiple lines.

## Horizontal Rules

```markdown
---
***
___
```

## HTML Elements

You can use some HTML in Markdown:

```html
<div class="note">
  This is a special note.
</div>
```
