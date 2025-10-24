<<<<<<< HEAD
=======
export const runtime = 'nodejs';

>>>>>>> 2a033da (clean deploy bundle)
import { sql } from '@vercel/postgres';
export const dynamic = 'force-dynamic';
export async function GET(){
  const { rows } = await sql`select * from posts order by created_at desc limit 100`;
  return Response.json(rows);
}
export async function POST(req: Request){
  const p = await req.json();
  const { rows:[r] } = await sql`
    insert into posts (type, member_id, event_id, title, body, photos, strava_url, gpx_file, stats, visibility)
    values (${p.type}, ${p.memberId}, ${p.eventId||null}, ${p.title}, ${p.body}, ${p.photos||[]}, ${p.stravaUrl||null}, ${p.gpxFile||null}, ${p.stats? JSON.stringify(p.stats): null}, ${p.visibility||'members'})
    returning id`;
  return Response.json({ id: r.id });
}
