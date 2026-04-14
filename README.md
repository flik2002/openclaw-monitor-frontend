# Biglegs - 智能体状态监控系统

<div align="center">

![Biglegs Logo](./public/vite.svg)

**一个轻量级、开源的智能体状态监控平台**

[在线演示](http://47.109.47.116/) | [问题反馈](https://github.com/yourusername/biglegs/issues) | [功能建议](https://github.com/yourusername/biglegs/issues)

</div>

---

## 📖 项目简介

Biglegs是一个专为智能体（Agent）监控设计的轻量级Web应用，提供实时状态监控、心跳检测、Gateway管理等功能。

### ✨ 核心特性

- 🔐 **用户认证** - 安全的注册/登录系统，JWT Token验证
- 💓 **心跳维持** - 自动心跳检测，保持在线状态
- 🌐 **Gateway管理** - 本地管理多个Gateway配置
- 📊 **实时监控** - 实时查看智能体状态和运行情况
- 🎨 **现代UI** - 基于Vue3 + Element Plus的现代化界面
- 📱 **响应式设计** - 完美适配桌面和移动设备

---

## 🚀 快速开始

### 环境要求

- Node.js >= 18.0.0
- npm >= 9.0.0

### 安装步骤

```bash
# 1. 克隆项目
git clone https://github.com/yourusername/biglegs.git
cd biglegs

# 2. 安装依赖
npm install

# 3. 配置环境变量
cp .env.example .env
# 编辑 .env 文件，配置API地址

# 4. 启动开发服务器
npm run dev

# 5. 构建生产版本
npm run build
```

### 访问应用

- 开发环境: http://localhost:5173
- 生产环境: 配置你的服务器地址

---

## 🏗️ 技术栈

### 前端技术

- **框架**: Vue 3 (Composition API)
- **构建工具**: Vite
- **UI组件库**: Element Plus
- **状态管理**: Pinia
- **路由**: Vue Router
- **HTTP客户端**: Axios
- **样式**: CSS3 + Scoped CSS

### 后端技术（独立仓库）

- **运行时**: Node.js
- **框架**: Express
- **数据库**: SQLite (sql.js)
- **认证**: JWT
- **进程管理**: PM2

---

## 📁 项目结构

```
biglegs/
├── public/              # 静态资源
├── src/
│   ├── assets/         # 资源文件
│   ├── components/     # Vue组件
│   ├── router/         # 路由配置
│   ├── stores/         # Pinia状态管理
│   ├── views/          # 页面视图
│   ├── App.vue         # 根组件
│   └── main.js         # 入口文件
├── .env.example        # 环境变量示例
├── LICENSE             # MIT许可证
├── package.json        # 项目配置
└── README.md           # 项目文档
```

---

## 🔧 配置说明

### 环境变量

创建 `.env` 文件并配置以下变量：

```env
# API基础URL
VITE_API_BASE_URL=http://your-api-server/api
```

---

## 📱 功能模块

### 1. 用户认证

- 用户注册（邮箱验证）
- 用户登录（JWT Token）
- 自动登录状态保持
- 安全登出

### 2. 心跳维持

- 自动30秒心跳检测
- 在线状态实时更新
- 断线自动重连

### 3. Gateway管理

- 本地存储Gateway配置
- 添加/删除/编辑Gateway
- 测试Gateway连接
- 多Gateway切换

### 4. 智能体监控

- 实时状态显示
- 历史数据查看
- 性能指标监控
- 告警通知

---

## 🤝 贡献指南

我们欢迎所有形式的贡献！

### 贡献方式

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 提交 Pull Request

### 代码规范

- 使用 ESLint 进行代码检查
- 遵循 Vue 3 官方风格指南
- 编写清晰的提交信息

---

## 📄 开源协议

本项目基于 [MIT](./LICENSE) 协议开源。

---

## 🙏 致谢

感谢所有贡献者和开源社区的支持！

---

## 📞 联系方式

- 项目主页: https://github.com/yourusername/biglegs
- 问题反馈: https://github.com/yourusername/biglegs/issues
- 邮箱: your.email@example.com

---

<div align="center">

**⭐ 如果这个项目对你有帮助，请给一个 Star ⭐**

Made with ❤️ by Biglegs Team

</div>
