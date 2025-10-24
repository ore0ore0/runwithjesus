export const runtime = 'edge';
export async function POST(request: Request) {
  const form = await request.formData();
  const photos = form.getAll('photos') as File[];
  const uploaded: string[] = [];
  for (const f of photos) {
    const r = await fetch(`https://api.vercel.com/v2/blob/put?access=public`, {
      method: 'PUT', body: f, headers: { 'content-type': f.type }
    });
    const json = await r.json();
    if (!json?.url) return new Response(JSON.stringify({ error: 'Blob upload failed' }), { status: 500 });
    uploaded.push(json.url);
  }
  return new Response(JSON.stringify({ urls: uploaded }), { headers: { 'content-type': 'application/json' }});
}
