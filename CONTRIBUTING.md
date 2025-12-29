# Contributing to Code Yapp

Thank you for your interest in contributing to Code Yapp! This document provides guidelines and instructions for contributing.

## 🚀 Getting Started

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/YOUR_USERNAME/code-yapp.git
   cd code-yapp
   ```
3. **Install dependencies**:
   ```bash
   npm install
   ```
4. **Set up environment variables** (see README.md)

## 🔧 Development Workflow

1. Create a new branch for your feature/fix:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. Make your changes and test locally:
   ```bash
   npm run dev          # Start Next.js dev server
   npm run genkit:watch # Start AI service (in another terminal)
   ```

3. Run type checking:
   ```bash
   npm run typecheck
   ```

4. Commit your changes with a descriptive message:
   ```bash
   git commit -m "feat: add new feature description"
   ```

## 📝 Commit Message Convention

We follow [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` - New features
- `fix:` - Bug fixes
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting, etc.)
- `refactor:` - Code refactoring
- `test:` - Adding or updating tests
- `chore:` - Maintenance tasks

## 🐛 Reporting Bugs

When reporting bugs, please include:

1. A clear, descriptive title
2. Steps to reproduce the issue
3. Expected vs actual behavior
4. Browser/OS information
5. Screenshots if applicable

## 💡 Suggesting Features

Feature suggestions are welcome! Please:

1. Check existing issues first
2. Describe the problem your feature would solve
3. Propose your solution
4. Consider alternatives you've thought about

## 📋 Pull Request Process

1. Update the README.md if needed
2. Ensure all tests pass
3. Request a review from maintainers
4. Address any feedback

## 🤝 Code of Conduct

Please read and follow our [Code of Conduct](CODE_OF_CONDUCT.md).

## 📄 License

By contributing, you agree that your contributions will be licensed under the MIT License.
