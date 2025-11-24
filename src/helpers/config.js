export const baseUrl = "http://localhost:3000";

export const LOGIN_API_ROUTE = `${baseUrl}/api/backend/login`;

export const header = {
  authenticated: {
    title: "AHA! There you are! I totally remember you now 😎",
    subtitle: "Okay okay… maybe I forgot for a second 😅 But welcome back!",
  },
  guest: {
    title: "Hey, wait… who are you again? 🤔",
    subtitle: "Log in and help my terrible memory, pretty please 😇",
  },
};

export const loginFormTitle =
  "Alright genius, enter your Username and Password 👇";
