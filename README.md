# OpenClaw Agent Status Monitoring System - Frontend

<div align="center">

![OpenClaw Logo](./public/vite.svg)

**A lightweight, open-source agent status monitoring platform**

[Live Demo](http://47.109.47.116/) | [Report Bug](https://github.com/flik2002/openclaw-monitor-frontend/issues) | [Request Feature](https://github.com/flik2002/openclaw-monitor-frontend/issues)

</div>

---

## 📖 Overview

OpenClaw Monitor is a lightweight web application designed for agent (intelligent agent) monitoring, providing real-time status monitoring, heartbeat detection, and gateway management capabilities.

### ✨ Key Features

- 🔐 **User Authentication** - Secure registration/login system with JWT token verification
- 💓 **Heartbeat Maintenance** - Automatic heartbeat detection to maintain online status
- 🌐 **Gateway Management** - Local management of multiple gateway configurations
- 📊 **Real-time Monitoring** - Real-time viewing of agent status and operations
- 🎨 **Modern UI** - Modern interface based on Vue 3 + Element Plus
- 📱 **Responsive Design** - Perfect adaptation for desktop and mobile devices
- 🌍 **Internationalization** - Support for Chinese and English languages

---

## 🚀 Quick Start

### Prerequisites

- Node.js >= 18.0.0
- npm >= 9.0.0

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/flik2002/openclaw-monitor-frontend.git
cd openclaw-monitor-frontend

# 2. Install dependencies
npm install

# 3. Configure environment variables
cp .env.example .env
# Edit .env file and configure API address

# 4. Start development server
npm run dev

# 5. Build for production
npm run build
```

### Access the Application

- Development: http://localhost:5173
- Production: Configure your server address

---

## 🏗️ Tech Stack

### Frontend Technologies

- **Framework**: Vue 3 (Composition API)
- **Build Tool**: Vite 5.0.10
- **UI Library**: Element Plus 2.4.4
- **State Management**: Pinia 2.1.7
- **Router**: Vue Router 4.2.5
- **HTTP Client**: Axios 1.6.2
- **Charts**: ECharts 5.4.3
- **Local Database**: Dexie 3.2.4 (IndexedDB)
- **i18n**: Vue I18n 9.8.0

### Backend Technologies (Separate Repository)

- **Runtime**: Node.js
- **Framework**: Express
- **Database**: SQLite (sql.js)
- **Authentication**: JWT
- **Process Manager**: PM2

---

## 📁 Project Structure

```
openclaw-monitor-frontend/
├── public/              # Static assets
├── src/
│   ├── assets/         # Resource files
│   ├── components/     # Vue components
│   │   ├── common/    # Common components
│   │   ├── gateway/   # Gateway components
│   │   ├── layout/    # Layout components
│   │   └── monitor/   # Monitor components
│   ├── config/        # Configuration files
│   ├── i18n/          # Internationalization
│   │   └── locales/   # Language files
│   ├── router/        # Router configuration
│   ├── services/      # Service layer
│   ├── stores/        # Pinia state management
│   ├── utils/         # Utility functions
│   ├── views/         # Page views
│   │   ├── admin/     # Admin pages
│   │   ├── auth/      # Authentication pages
│   │   ├── legal/     # Legal pages
│   │   └── monitor/   # Monitor pages
│   ├── App.vue        # Root component
│   └── main.js        # Entry file
├── .env.example        # Environment variable example
├── .gitignore         # Git ignore file
├── LICENSE            # MIT License
├── package.json       # Project configuration
└── README.md          # Documentation
```

---

## 🔧 Configuration

### Environment Variables

Create a `.env` file and configure the following variables:

```env
# API Base URL
VITE_API_BASE_URL=http://your-api-server/api

# Application Title
VITE_APP_TITLE=OpenClaw Monitor
```

---

## 📱 Features

### 1. User Authentication

- User registration (with email verification)
- User login (JWT Token)
- Automatic login state persistence
- Secure logout

### 2. Heartbeat Maintenance

- Automatic 30-second heartbeat detection
- Real-time online status updates
- Automatic reconnection on disconnect

### 3. Gateway Management

- Local storage of gateway configurations
- Add/Delete/Edit gateways
- Test gateway connections
- Multi-gateway switching

### 4. Agent Monitoring

- Real-time status display
- Historical data viewing
- Performance metrics monitoring
- Alert notifications

### 5. Internationalization

- Chinese (zh-CN)
- English (en-US)
- Automatic language detection

---

## 📦 Dependencies

### Main Dependencies

```json
{
  "vue": "^3.3.11",
  "element-plus": "^2.4.4",
  "pinia": "^2.1.7",
  "vue-router": "^4.2.5",
  "axios": "^1.6.2",
  "echarts": "^5.4.3",
  "dexie": "^3.2.4",
  "vue-i18n": "^9.8.0"
}
```

### Development Dependencies

```json
{
  "vite": "^5.0.10",
  "@vitejs/plugin-vue": "^4.5.2",
  "eslint": "^8.56.0",
  "prettier": "^3.1.1"
}
```

---

## 🤝 Contributing

We welcome all forms of contributions!

### How to Contribute

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Code Standards

- Use ESLint for code linting
- Follow Vue 3 official style guide
- Write clear commit messages

---

## 📄 License

This project is licensed under the [MIT](./LICENSE) License.

---

## 🌐 Browser Support

- Chrome >= 87
- Firefox >= 78
- Safari >= 14
- Edge >= 88

---

## 🙏 Acknowledgments

Thanks to all contributors and the open-source community for their support!

---

## 📞 Contact

- Project Homepage: https://github.com/flik2002/openclaw-monitor-frontend
- Issue Tracker: https://github.com/flik2002/openclaw-monitor-frontend/issues
- Email: 5003698@qq.com

---

<div align="center">

**⭐ If this project helps you, please give it a Star ⭐**

Made with ❤️ by OpenClaw Team

</div>
