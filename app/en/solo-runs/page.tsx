export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';
import { sql } from '@vercel/postgres';
export default async function SoloRuns(){
  const { rows } = await sql`select * from posts where type='solo_run' order by created_at desc limit 100;`;
  return (
    <div className="mx-auto max-w-3xl p-4 space-y-4">
      {rows.map((p:any)=>(
        <article key={p.id} className="rounded-xl border p-4">
          <h3 className="font-medium">{p.title}</h3>
          <p className="text-sm text-zinc-600">{new Date(p.created_at).toLocaleString()}</p>
          <p className="whitespace-pre-wrap">{p.body}</p>
        </article>
      ))}
    </div>
  );
}
