
# Code Yapp 💬

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![GitHub stars](https://img.shields.io/github/stars/shaikhakramshakil/code-yapp?style=social)](https://github.com/shaikhakramshakil/code-yapp)
[![GitHub issues](https://img.shields.io/github/issues/shaikhakramshakil/code-yapp)](https://github.com/shaikhakramshakil/code-yapp/issues)

> **Private & Ephemeral Chat for Developers** - Real-time chat rooms that auto-delete after 2 hours. Share code with automatic syntax highlighting and no trace left behind.

## ✨ Features

- 🔒 **Ephemeral Chat Rooms** - Every room and its contents are permanently deleted 2 hours after creation
- 👤 **Anonymous & Secure** - No sign-up required. Users get random fantasy-themed names
- 💻 **Developer Focused** - Automatic programming language detection and syntax highlighting
- ⚡ **Real-Time** - Live messages, active user lists, and typing indicators
- 👑 **Admin Controls** - First user becomes admin with kick and delete powers
- 📱 **PWA Support** - Installable on mobile and desktop for native-like experience

## 🛠️ Tech Stack

| Layer | Technology |
|-------|------------|
| **Framework** | [Next.js 15](https://nextjs.org/) (App Router) |
| **Database** | [Redis](https://redis.io/) |
| **Real-time** | Server-Sent Events (SSE) |
| **AI** | [Genkit](https://firebase.google.com/docs/genkit) + Google Gemini |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) + [ShadCN UI](https://ui.shadcn.com/) |
| **Deployment** | [Firebase App Hosting](https://firebase.google.com/docs/app-hosting) |

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v20 or later
- [Redis](https://redis.io/) instance (local or cloud)
- [Gemini API Key](https://aistudio.google.com/app/apikey)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/shaikhakramshakil/code-yapp.git
   cd code-yapp
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the root directory:
   ```env
   # Redis connection URL
   REDIS_URL="redis://localhost:6379"
   
   # Gemini API key for AI features
   GEMINI_API_KEY="your-gemini-api-key"
   ```

### Running the Application

You need **two terminal sessions** running concurrently:

**Terminal 1: Start the AI Service**
```bash
npm run genkit:watch
```

**Terminal 2: Start the Development Server**
```bash
npm run dev
```

Open [http://localhost:9002](http://localhost:9002) in your browser.

## 📁 Project Structure

```
code-yapp/
├── src/
│   ├── app/              # Next.js App Router pages & API routes
│   ├── components/       # React components
│   ├── ai/flows/        # Genkit AI flows for code detection
│   └── lib/             # Utilities, types, and store
├── public/              # Static assets
└── .github/             # Issue templates and PR templates
```

## 🤝 Contributing

Contributions are welcome! Please read our [Contributing Guide](CONTRIBUTING.md) and [Code of Conduct](CODE_OF_CONDUCT.md) before submitting a PR.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Shaikh Akram Shakil**

- GitHub: [@shaikhakramshakil](https://github.com/shaikhakramshakil)

---

<p align="center">
  Made with ❤️ for developers who value privacy
</p>
