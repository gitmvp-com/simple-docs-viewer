# Quick Start Guide

Get up and running with the Documentation Viewer in just a few minutes!

## Step 1: Create Your First Document

Create a new Markdown file in the `docs/` directory:

```bash
touch docs/my-first-doc.md
```

Add some content:

```markdown
# My First Document

This is my first documentation page!

## Features I Love

* Easy to write
* Beautiful output
* Fast rendering
```

## Step 2: Add to Table of Contents

Edit `toc.yml` to include your new document:

```yaml
# Getting started
- href: getting-started.md
- topics:
    - href: installation.md
    - href: quick-start.md
    - href: my-first-doc.md
```

## Step 3: View Your Document

Restart the server if it's running, then navigate to:

```
http://localhost:3000/doc/my-first-doc.md
```

You should see your new document rendered beautifully!

## Next Steps

* Learn more about [Markdown syntax](markdown-guide.md)
* Explore [formatting options](formatting.md)
* Customize the [configuration](configuration.md)

## Tips

**Use headings wisely**: Structure your content with proper heading hierarchy (H1 → H2 → H3)

**Keep it simple**: Focus on clear, concise content

**Test locally**: Always preview your changes before deploying
