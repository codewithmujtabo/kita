import { readJsonBody } from "@/lib/readJsonBody";

export async function POST(request: Request) {
  const { body, error } = await readJsonBody(request);
  if (error) return error;
  if (!body || typeof body !== "object") return Response.json({ error: "Invalid request." }, { status: 400 });
  const { name, email, message } = body as Record<string, unknown>;
  if (typeof name !== "string" || name.trim().length < 2 || name.length > 100 ||
      typeof email !== "string" || email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
      typeof message !== "string" || message.trim().length < 10 || message.length > 5000) {
    return Response.json({ error: "Enter a valid name, email, and message of at least 10 characters." }, { status: 400 });
  }
  // Prototype only: do not store personal information or claim delivery.
  return Response.json({ demo: true, message: "Prototype validated. No message was sent or saved." });
}
