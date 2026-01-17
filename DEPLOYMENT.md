# 保险解析助手 - 部署指南

## 项目已准备好部署！

### 前端部署到 Vercel

1. **访问 Vercel**
   - 打开：https://vercel.com
   - 点击 "Sign Up"（如果没有账号）或 "Log In"
   - 选择 "Continue with GitHub"

2. **导入项目**
   - 点击 "Add New Project"
   - 选择 "Import Git Repository"
   - 如果还没有 GitHub 仓库，先按照下面的步骤创建

3. **配置项目**
   - Root Directory: `coverage-parser/frontend`
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`

4. **部署**
   - 点击 "Deploy"
   - 等待 2-3 分钟
   - 获得固定网址（如：`your-app.vercel.app`）

### 后端部署到 Railway

1. **访问 Railway**
   - 打开：https://railway.app
   - 点击 "Start a New Project"
   - 选择 "Deploy from GitHub repo"

2. **配置项目**
   - Root Directory: `coverage-parser/backend`
   - 添加环境变量：
     - `OPENAI_API_KEY`: 您的 OpenAI API 密钥

3. **部署**
   - Railway 会自动检测 Python 项目
   - 等待 3-5 分钟
   - 获得固定 API 地址

### 连接前后端

部署完成后，需要更新前端配置：
1. 在 `coverage-parser/frontend/vite.config.ts` 中
2. 将 API 代理地址改为 Railway 提供的地址
3. 重新部署前端

---

## 首先：创建 GitHub 仓库

**步骤 A：注册 GitHub（如果没有）**
1. 访问：https://github.com/signup
2. 填写邮箱、密码、用户名
3. 验证邮箱

**步骤 B：创建仓库并推送代码**
请告诉我，我会帮您执行 git 命令！

