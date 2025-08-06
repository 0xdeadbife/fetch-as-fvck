# 🔍 JavaScript API Endpoint Extractor

A powerful tool for extracting API endpoints from JavaScript code using the esprima2 parser. Perfect for security analysis, API discovery, and code auditing.

[![Python 3.7+](https://img.shields.io/badge/python-3.7+-blue.svg)](https://www.python.org/downloads/)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)

## 🚀 Quick Start

### Prerequisites
- Python 3.7 or higher
- Access to the esprima2 library

### Installation

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd endpoint-extractor-tool
   ```

2. **Create and activate virtual environment:**
   ```bash
   python3 -m venv env
   source env/bin/activate  # On Windows: env\Scripts\activate
   ```

3. **Install dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

## 📖 Usage

### Single File Analysis
```bash
# Analyze local JavaScript file
python extract_endpoints.py app.js

# Analyze remote JavaScript file
python extract_endpoints.py https://example.com/js/main.js
```

### Multiple Files
```bash
# Process multiple files at once
python extract_endpoints.py file1.js file2.js file3.js
```

### Batch Processing
```bash
# Process URLs from stdin (optimized for large batches)
cat urls.txt | python extract_endpoints.py -
echo "https://example.com/app.js" | python extract_endpoints.py -

# Advanced batch processing with custom settings
cat large_url_list.txt | python extract_endpoints.py - --workers 20 --timeout 10
python extract_endpoints.py - --json --quiet < urls.txt > endpoints.json
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
cat large_urls.txt | python extract_endpoints.py - --workers 50 --timeout 5 --quiet --json > results.json

# Custom worker count
cat urls.txt | python extract_endpoints.py - --workers 20

# JSON output
cat urls.txt | python extract_endpoints.py - --json
```

## ✨ Features

### 🎯 Framework & Library Support
- **JavaScript Frameworks**: React, Vue.js, Angular, jQuery
- **HTTP Libraries**: axios, fetch, XMLHttpRequest, superagent, ky
- **Smart Detection**: Variables, template literals, dynamic URLs

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

## 📁 Example Files

| File | Description |
|------|-------------|
| `test_sample.js` | Simple test file with basic API calls |
| `comprehensive_test.js` | Complex test file with multiple frameworks and patterns |
| `sample_urls.txt` | Example URL list for batch processing |

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