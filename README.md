
<h1 align="center">
  <img src="static/logo.png" alt="fetch-as-fvck" width="320px">
</h1>

[![AI Assisted](https://img.shields.io/badge/AI%20Assisted-Claude%20%F0%9F%A7%A0-blue.svg)](https://claude.ai)
[![Python 3.7+](https://img.shields.io/badge/python-3.7+-blue.svg)](https://www.python.org/downloads/)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)

`fetch-as-fvck` extracts real API endpoints from JS files (local or remote) using **semantic AST analysis** — not dumb regex. Uses JavaScript context to intelligently identify endpoints in `fetch()`, `axios`, `$.ajax()` and other HTTP calls. Framework-aware, fast, and accurate with minimal false positives. Perfect for bug bounty, recon, and code audits.

---

## 🚀 Quick Start

### Prerequisites
- Python 3.7 or higher
- Access to the esprima2 library

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/0xdeadbife/fetch-as-fvck.git
   cd fetch-as-fvck
   ```

2. **Create and activate virtual environment:**
   ```bash
   python3 -m venv env
   source env/bin/activate
   ```

3. **Install dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

## 📖 Usage

### Single File Analysis
```bash
# Analyze local JavaScript file
python fetch-as-fvck app.js

# Analyze remote JavaScript file
python fetch-as-fvck https://example.com/js/main.js
```

### Multiple Files
```bash
# Process multiple files at once
python fetch-as-fvck file1.js file2.js file3.js
```

### Batch Processing
```bash
# Process URLs from stdin (optimized for large batches)
cat urls.txt | python fetch-as-fvck -
echo "https://example.com/app.js" | python fetch-as-fvck -

# Advanced batch processing with custom settings
cat large_url_list.txt | python fetch-as-fvck - --workers 20 --timeout 10
python fetch-as-fvck - --json --quiet < urls.txt > endpoints.json
```

### ⚙️ Advanced Options

| Option | Description | Default |
|--------|-------------|---------|
| `--workers N` | Number of concurrent workers | 10 |
| `--timeout N` | Request timeout in seconds | 15 |
| `--json` | Output results in JSON format | False |
| `--quiet` | Minimal output for batch processing | False |

**Examples:**
```bash
# High-performance batch processing
cat large_urls.txt | python fetch-as-fvck - --workers 50 --timeout 5 --quiet --json > results.json

# Custom worker count
cat urls.txt | python fetch-as-fvck - --workers 20

# JSON output
cat urls.txt | python fetch-as-fvck - --json
```

## ✨ Features

### 🧠 Intelligent Detection
- **Semantic Analysis**: Uses AST context to understand when strings are actually API endpoints
- **Context-Aware**: Distinguishes between `/api/users` in `fetch()` vs `/home/user/file.txt` in other contexts
- **Smart Filtering**: Automatically filters out static assets, file paths, and obvious non-endpoints
- **Variable Resolution**: Tracks variable assignments like `const apiUrl = '/api/users'`

### 🎯 Framework & Library Support
- **JavaScript Frameworks**: React, Vue.js, Angular, jQuery
- **HTTP Libraries**: axios, fetch, XMLHttpRequest, superagent, ky, got
- **Modern Patterns**: Template literals, string concatenation, object configurations
- **React Hooks**: useFetch, useQuery, useMutation, useApi

### 🚀 Performance
- **Concurrent Processing**: Multi-threaded URL processing
- **Batch Optimization**: Efficient handling of large URL lists
- **Progress Tracking**: Real-time progress indicators
- **Error Recovery**: Continues processing even if some URLs fail

### 📊 Output Options
- **Rich Console Output**: Beautiful, categorized results
- **JSON Format**: Machine-readable output for automation
- **Quiet Mode**: Minimal output for large batch operations
- **Configurable Timeouts**: Adjustable request timeouts

## 🎯 What It Detects

### ✅ API Endpoints (Context-Aware Detection)
```javascript
// These are correctly identified as API endpoints
fetch('/api/users');                    // Direct fetch call
axios.get('/api/posts/123');           // Axios method
$.ajax({url: '/rest/data'});           // jQuery AJAX
xhr.open('GET', '/graphql/users');     // XMLHttpRequest

// Variable assignments with API context
const userEndpoint = '/api/profile';   // API-related variable name
const config = {url: '/auth/token'};   // Object property

// Template literals and concatenation
fetch(`/api/users/${userId}`);         // Dynamic endpoint
const endpoint = '/api/' + 'users';    // String concatenation
```

### ❌ Non-Endpoints (Intelligently Filtered)
```javascript
// These are correctly ignored
const filePath = '/home/user/file.txt';    // File system path
const image = '/static/images/logo.png';   // Static asset
const title = 'User Profile Page';         // Regular text
const email = 'user@example.com';          // Email address
const jsCode = 'javascript:void(0)';       // JavaScript URL
```

### 📊 Sample Output
```
✓ Found 8 endpoints in 3 categories

API Endpoints (5)
  /api/users
  /api/posts/123
  /api/profile
  /rest/data
  /api/users/${...}

Authentication (2)
  /auth/token
  /oauth/login

GraphQL (1)
  /graphql/users
```

## 📁 Example Files

| File | Description |
|------|-------------|
| `test_sample.js` | Simple test file with basic API calls |
| `comprehensive_test.js` | Complex test file with multiple frameworks and patterns |
| `sample_urls.txt` | Example URL list for batch processing |

## 🔧 How It Works

### Semantic AST Analysis
Unlike traditional regex-based tools, `fetch-as-fvck` parses JavaScript into an Abstract Syntax Tree (AST) and analyzes the semantic context of each string:

1. **Context Tracking**: Maintains a context stack during AST traversal to understand where each string appears
2. **Function Call Analysis**: Identifies when strings are arguments to HTTP-related functions (`fetch`, `axios.get`, etc.)
3. **Variable Resolution**: Tracks variable assignments and resolves them in API contexts
4. **Object Property Detection**: Recognizes strings as endpoints when they're values of URL-related properties
5. **Intelligent Filtering**: Uses both contextual and structural analysis to filter out obvious non-endpoints

### Why This Approach Works Better
- **Precision**: Understands the difference between `'/api/users'` in `fetch()` vs `'/home/users'` in a file path
- **Completeness**: Finds endpoints in variable assignments and object configurations that regex tools miss  
- **Reduced False Positives**: Context-aware filtering eliminates static assets, system paths, and unrelated strings
- **Framework Awareness**: Recognizes patterns specific to popular JavaScript frameworks and libraries

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🐛 Issues

Found a bug? Have a feature request? Please open an issue on GitHub.