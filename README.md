# 🔐 Next.js Authentication Practice (auth-js-practice)

Bu proje, **Next.js 16 (App Router)** ve **NextAuth** kullanılarak hazırlanmış modern bir kimlik doğrulama uygulamasıdır.  
Kullanıcı giriş-çıkış süreçleri, JWT validasyonu, SCSS modülleri ve server actions ile temiz bir mimari uygulanmıştır.

---

## 🚀 Özellikler

- 🔑 **NextAuth Credentials Provider ile Login**
- 🎟️ **JWT Token saklama + Expiration kontrolü**
- 🛡️ **Server-side session doğrulama (`auth()`)**
- 🔄 **Session expiry olduğunda otomatik logout**
- ⚙️ **Server Actions ile Login / Logout işlemleri**
- 🎨 **SCSS Modules + Global SCSS ile stil yönetimi**
- 🧱 **Modüler ve temiz folder structure**
- 🪝 **Backend login endpoint (mock API)**
- 🧪 **Form validation (Yup)**
- 🌐 **App Router uyumlu NextAuth yapılandırması**

---

## 📁 Proje Yapısı

```bash
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
```
