import { calculateEstimate, isScopeId, isServiceId } from "@/content/site";

export async function POST(request: Request) {
  let body: unknown;
  try { body = await request.json(); } catch { return Response.json({ error: "Invalid JSON." }, { status: 400 }); }
  if (!body || typeof body !== "object") return Response.json({ error: "Invalid request." }, { status: 400 });
  const { service, scope } = body as Record<string, unknown>;
  if (!isServiceId(service) || !isScopeId(scope)) return Response.json({ error: "Choose a valid project type and scope." }, { status: 400 });
  return Response.json(calculateEstimate(service, scope));
}
