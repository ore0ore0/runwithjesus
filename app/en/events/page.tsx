export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';
import { sql } from '@vercel/postgres';
export default async function Events(){
  const { rows } = await sql`select id,title,date,location,cover_image from events order by date asc;`;
  return (
    <div className="mx-auto max-w-6xl p-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {rows.map((e:any)=>(<a key={e.id} href={`./events/${e.id}`} className="rounded-xl border p-4">
        <div className="text-lg font-medium">{e.title}</div>
        <div className="text-sm text-zinc-600">{new Date(e.date).toLocaleDateString()}</div>
        <div className="text-sm">{e.location}</div>
      </a>))}
    </div>
  );
}
