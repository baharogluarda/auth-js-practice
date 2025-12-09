# 🔐 Next.js Authentication Practice (auth-js-practice)

This project is a modern authentication application built using Next.js 16 (App Router) and NextAuth.
User login-logout processes, JWT validation, SCSS modules, and server actions are implemented with a clean architecture.

---

## 🛠 Tech Stack

- **Next.js 16** – React framework for server-side rendering and routing  
- **React 19** – UI library for building components  
- **NextAuth.js 5** – Authentication with credentials provider  
- **Bootstrap 5** & **React-Bootstrap** – UI styling and responsive components  
- **Sass** – CSS preprocessor for styling  
- **Yup** – Schema validation for forms  
- **SweetAlert2** – Beautiful alert dialogs  
- **JSON Web Token (jsonwebtoken)** – Token-based authentication  
- **PrimeIcons** – Icons for UI components  
- **ESLint** – Code linting  

---

## 🚀 Features

- 🔑 **Login with NextAuth Credentials Provider**
- 🎟️ **JWT Token storage + Expiration check**
- 🛡️ **Server-side session validation (`auth()`)**
- 🔄 **Automatic logout when session expires**
- ⚙️ **Login / Logout operations with Server Actions**
- 🎨 **Styling management with SCSS Modules + Global SCSS**
- 🧱 **Modular and clean folder structure**
- 🪝 **Backend login endpoint (mock API)**
- 🧪 **Form validation (Yup)**
- 🌐 **NextAuth configuration compatible with App Router**

---

## 📁 Project Structure

src/
├── actions/          # Server Actions (login/logout)
├── app/              # App Router
│   ├── api/          # API Routes (NextAuth + custom backend)
│   ├── layout.js
│   └── page.jsx
├── components/       # UI Components
│   ├── form-fields/
│   ├── header/
│   ├── login-form/
│   ├── shared/
│   └── welcome-back/
├── helpers/          # Helper & utility fonksiyonlar
├── services/         # Backend request servisleri
├── styles/           # SCSS (variables, mixins, global)
├── auth.js           # NextAuth config
└── proxy.js          # Reverse proxy ayarları

---

## ⚡ Quick Start

### 1. Clone the repository
git clone https://github.com/baharogluarda/auth-js-practice.git
cd auth-js-practice

### 2. Install dependencies
npm install

### 3. Generate AUTH_SECRET for NextAuth
npx auth secret

### 3. Run the development server
npm run dev

Your application will be available at:
http://localhost:3000


