export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';
import { sql } from '@vercel/postgres';

type PageProps = { params: Promise<{ id: string }> };

export default async function EventPage({ params }: PageProps){
  const { id } = await params;
  const { rows } = await sql`select * from events where id=${id}`;
  const event = rows[0];
  const posts = (await sql`select * from posts where event_id=${id} order by created_at desc`).rows;

  return (
    <div className="mx-auto max-w-3xl p-4 space-y-6">
      <h1 className="text-2xl font-semibold">{event?.title}</h1>
      {event && <p className="text-zinc-700">{event.location} · {new Date(event.date).toLocaleString()}</p>}
      <section className="space-y-3">
        {posts.map((p:any)=>(
          <article key={p.id} className="rounded-xl border p-4">
            <h3 className="font-medium">{p.title}</h3>
            <p className="text-sm text-zinc-600">{new Date(p.created_at).toLocaleString()}</p>
            <p className="whitespace-pre-wrap">{p.body}</p>
          </article>
        ))}
      </section>
    </div>
  );
}
