<<<<<<< HEAD
=======
export const runtime = 'nodejs';

>>>>>>> 2a033da (clean deploy bundle)
import { sql } from '@vercel/postgres';
export const dynamic = 'force-dynamic';
export async function GET(){
  const { rows } = await sql`select id,title,date,location from events order by date asc`;
  return Response.json(rows);
}
export async function POST(req: Request){
  const body = await req.json();
  const { title, date, location } = body;
  const { rows:[e] } = await sql`insert into events (title,date,location) values (${title}, ${date}, ${location}) returning id`;
  return Response.json({ id: e.id });
}
