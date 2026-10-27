import { calculateEstimate, isScopeId, isServiceId } from "@/content/site";
import { readJsonBody } from "@/lib/readJsonBody";

export async function POST(request: Request) {
  const { body, error } = await readJsonBody(request);
  if (error) return error;
  if (!body || typeof body !== "object") return Response.json({ error: "Invalid request." }, { status: 400 });
  const { service, scope } = body as Record<string, unknown>;
  if (!isServiceId(service) || !isScopeId(scope)) return Response.json({ error: "Choose a valid project type and scope." }, { status: 400 });
  return Response.json(calculateEstimate(service, scope));
}
