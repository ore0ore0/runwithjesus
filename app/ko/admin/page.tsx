export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';
import { sql } from '@vercel/postgres';
export default async function Admin(){
  const { rows } = await sql`select id,name,email,role from members order by created_at desc limit 24;`;
  return (
    <div className="mx-auto max-w-3xl p-4">
      <h1 className="mb-4 text-2xl font-semibold">관리</h1>
      <ul className="space-y-2">
        {rows.map((m:any)=>(<li key={m.id} className="flex items-center justify-between rounded-lg border p-3"><span>{m.name} — {m.email}</span><span className="text-xs">{m.role}</span></li>))}
      </ul>
    </div>
  );
}
