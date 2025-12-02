// Import the `auth` function from Auth.js.
// This handles user sessions and authentication.
import { auth } from "@/auth";

// In Next.js 16 the `proxy` pattern replaces middleware.
// This function runs for every incoming request (GET, POST, etc.).
// We forward each request to the Auth.js handler by returning `auth(request)`.
export async function proxy(request) {
  // Forward all incoming requests to Auth.js
  return auth(request);
}
