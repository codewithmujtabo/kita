const maxBodyBytes = 8_192;

export async function readJsonBody(request: Request): Promise<{ body?: unknown; error?: Response }> {
  if (!request.headers.get("content-type")?.toLowerCase().includes("application/json")) {
    return { error: Response.json({ error: "Send JSON content." }, { status: 415 }) };
  }

  const declaredSize = Number(request.headers.get("content-length"));
  if (declaredSize > maxBodyBytes) {
    return { error: Response.json({ error: "Request is too large." }, { status: 413 }) };
  }

  const reader = request.body?.getReader();
  if (!reader) return { error: Response.json({ error: "Invalid JSON." }, { status: 400 }) };
  const chunks: Uint8Array[] = [];
  let size = 0;
  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      size += value.byteLength;
      if (size > maxBodyBytes) {
        await reader.cancel();
        return { error: Response.json({ error: "Request is too large." }, { status: 413 }) };
      }
      chunks.push(value);
    }
    const bytes = new Uint8Array(size);
    let offset = 0;
    for (const chunk of chunks) { bytes.set(chunk, offset); offset += chunk.byteLength; }
    return { body: JSON.parse(new TextDecoder("utf-8", { fatal: true }).decode(bytes)) };
  } catch {
    return { error: Response.json({ error: "Invalid JSON." }, { status: 400 }) };
  }
}
