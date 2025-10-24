export const runtime = 'edge';
export async function POST(request: Request){
  const form = await request.formData();
  const file = form.get('gpx') as File;
  const r = await fetch(`https://api.vercel.com/v2/blob/put?access=public`, { method:'PUT', body:file, headers:{'content-type':file.type}});
  const json = await r.json();
  if (!json?.url) return new Response(JSON.stringify({ error: 'Blob upload failed' }), { status: 500 });
  return new Response(JSON.stringify({ url: json.url }), { headers: { 'content-type':'application/json' }});
}
