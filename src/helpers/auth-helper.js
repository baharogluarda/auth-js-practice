export const parseJWT = (token) => {
  if (!token) return null;
  return JSON.parse(atob(token.split(".")[1]));
};

export const getIsTokenValid = (token) => {
  if (!token) return false;
  const { exp } = parseJWT(token);
  return exp * 1000 > Date.now();
};

export const getIsUserAuthorized = (role, targetPath) => {
  // Basit örnek
  const rights = [{ urlRegex: /^\/dashboard/, roles: ["admin"] }];

  const userRight = rights.find((item) => item.urlRegex.test(targetPath));
  if (!userRight) return false;

  return userRight.roles.includes(role);
};
