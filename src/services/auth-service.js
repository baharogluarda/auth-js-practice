export const LOGIN_API_ROUTE = `${process.env.NEXT_PUBLIC_BASE_URL}/api/backend/login`;

export const login = (payload) => {
  return fetch(LOGIN_API_ROUTE, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
};
