# Installation

Follow these steps to install and run the Documentation Viewer.

## Prerequisites

Before you begin, ensure you have the following installed:

* Node.js (version 14 or higher)
* npm (comes with Node.js)

## Installation Steps

### 1. Clone the Repository

```bash
git clone https://github.com/gitmvp-com/simple-docs-viewer.git
cd simple-docs-viewer
```

### 2. Install Dependencies

```bash
npm install
```

This will install the required packages:

* **express** - Web server framework
* **marked** - Markdown to HTML converter
* **js-yaml** - YAML parser for table of contents

### 3. Run the Server

```bash
npm start
```

The server will start on `http://localhost:3000`.

### 4. Access the Documentation

Open your browser and navigate to:

```
http://localhost:3000
```

You should see the documentation viewer with the default content.

## Development Mode

For development, you can use:

```bash
npm run dev
```

## Troubleshooting

### Port Already in Use

If port 3000 is already in use, you can specify a different port:

```bash
PORT=3001 npm start
```

### Dependencies Not Installing

Try clearing the npm cache:

```bash
npm cache clean --force
npm install
```
