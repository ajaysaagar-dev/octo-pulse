<div align="center">

# 🐙 OctoPulse

**A fast terminal CLI tool for Git repository health diagnostics, commit velocity analysis, and project telemetry.**

[![CI](https://github.com/ajaysaagar-dev/octo-pulse/actions/workflows/ci.yml/badge.svg)](https://github.com/ajaysaagar-dev/octo-pulse/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Node: >=18.0.0](https://img.shields.io/badge/node-%3E%3D18.0.0-brightgreen.svg)](https://nodejs.org/)

</div>

---

## 📖 Overview

**OctoPulse** evaluates repositories against modern open-source standards, checks security hygiene for exposed secrets/configurations, calculates commit velocity metrics, and outputs actionable health scores directly in your terminal or as structured JSON for CI ingestion.

---

## ✨ Features

- **🏥 Health Score Analyzer**: Evaluates repository health against 7 core criteria (README, License, Contributing guide, Security policy, Gitignore, CI workflows, Unit test suite).
- **🛡️ Security Hygiene Scanner**: Scans working directories for untracked environment secrets and credentials.
- **⚡ Velocity Telemetry**: Analyzes commit frequency, sprint velocity, and cadence tiers.
- **📊 CI & Automation Ready**: Built-in `--json` flag for easy integration into automated pipelines and status badges.

---

## 📦 Installation

```bash
git clone https://github.com/ajaysaagar-dev/octo-pulse.git
cd octo-pulse
npm install
npm link # To use globally as 'octo-pulse'
```

---

## 🚀 Usage

### 1. Analyze Current Repository Health
```bash
node bin/octo-pulse.js analyze
```

### 2. Security Hygiene Scan
```bash
node bin/octo-pulse.js scan
```

### 3. Output as JSON for CI/CD
```bash
node bin/octo-pulse.js analyze --json
```

---

## 🧪 Testing

OctoPulse uses Node.js native test runner:

```bash
npm test
```

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! See [CONTRIBUTING.md](CONTRIBUTING.md) for details.

---

## 📄 License

Distributed under the [MIT License](LICENSE).
