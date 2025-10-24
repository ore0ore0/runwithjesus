<<<<<<< HEAD
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
=======
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

import { NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';

export async function GET() {
  try {
    const { rows } = await sql`
      select p.*, m.name as member_name
      from posts p
      left join members m on m.id = p.member_id
      order by p.created_at desc
    `;
    return NextResponse.json(rows);
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unexpected error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
>>>>>>> cc29d62 (clean deploy bundle)
}
