import jwt from "jsonwebtoken";

const SECRET = "MY_SECRET_KEY";

export async function POST(req) {
  const { username, password } = await req.json();

  // Simple hardcoded user validation
  if (username === "user" && password === "pass") {
    const payload = {
      username,
      role: "admin",
      iat: Math.floor(Date.now() / 1000),
      exp: Math.floor(Date.now() / 1000) + 60 * 60, // 1 hour expiration
    };

    const token = jwt.sign(payload, SECRET);

    return Response.json({
      success: true,
      token,
      username: payload.username,
      role: payload.role,
      exp: payload.exp,
      iat: payload.iat,
    });
  }

  return Response.json(
    { success: false, message: "Invalid credentials" },
    { status: 401 }
  );
}
