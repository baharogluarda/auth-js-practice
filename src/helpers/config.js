export const baseUrl = "http://localhost:3000";

export const LOGIN_API_ROUTE = `${baseUrl}/api/backend/login`;

export const header = {
  authenticated: {
    title: "AHA! There you are! I totally remember you now 😎",
    subtitle: "Okay okay… maybe I forgot for a second 😅 But welcome back!",
  },
  guest: {
    title: "Hey, wait… who are you again? 🤔",
    subtitle: "Why don't you log in so I can remember you? 😇",
  },
};

export const welcomeBack = {
  title: "Welcome back,",
  icon: "👋",
  warn: "Do not log out, or I might forget you again! 😬",
};

export const loginFormTitle =
  "Alright genius, enter your Username and Password 👇";
