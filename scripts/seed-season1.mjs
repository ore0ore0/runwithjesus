// Standalone seeder: no TS imports. Safe on Node without build steps.
import { sql } from '@vercel/postgres';

// Create tables if missing
await sql`
  create extension if not exists pgcrypto;
  create table if not exists members (
    id uuid primary key default gen_random_uuid(),
    name text not null,
    email text unique not null,
    role text not null check (role in ('admin','member','guest')),
    avatar_url text,
    created_at timestamptz not null default now()
  );
  create table if not exists seasons (
    id uuid primary key default gen_random_uuid(),
    year int not null,
    title text not null,
    description text,
    cover_image text,
    events text[] not null default '{}'
  );
  create table if not exists events (
    id uuid primary key default gen_random_uuid(),
    season_id uuid references seasons(id) on delete cascade,
    title text not null,
    date timestamptz not null,
    location text not null,
    route_map jsonb,
    cover_image text,
    gallery text[] not null default '{}',
    recap_thread text[] not null default '{}',
    visibility text not null default 'members' check (visibility in ('members','guests')),
    created_by uuid references members(id),
    created_at timestamptz not null default now()
  );
  create table if not exists posts (
    id uuid primary key default gen_random_uuid(),
    type text not null check (type in ('event_recap','solo_run')),
    member_id uuid references members(id) on delete set null,
    event_id uuid references events(id) on delete cascade,
    title text not null,
    body text not null,
    photos text[] not null default '{}',
    strava_url text,
    gpx_file text,
    stats jsonb,
    visibility text not null default 'members' check (visibility in ('members','guests')),
    created_at timestamptz not null default now()
  );
`;

// Seed Season 1 events
const seasonTitle = 'Season 1 — 2025';
await sql`insert into seasons (year,title,description,events)
          values (2025, ${seasonTitle}, 'Eight shared runs forming our first season', '{}')
          on conflict do nothing;`;

const events = [
  { title:'Belmont Waterdog Run', date:'2025-09-20T08:00:00-07:00', location:'Belmont, CA' },
  { title:'Presidio Coastal Trail', date:'2025-10-04T08:00:00-07:00', location:'San Francisco, CA' },
  { title:'Los Gatos Creek', date:'2025-10-18T08:00:00-07:00', location:'Los Gatos, CA' },
  { title:'Lake Merritt Loops', date:'2025-11-01T08:00:00-07:00', location:'Oakland, CA' },
  { title:'Sawyer Camp Trail', date:'2025-11-15T08:00:00-08:00', location:'San Mateo, CA' },
  { title:'Seal Point Sunrise', date:'2025-11-29T07:30:00-08:00', location:'San Mateo, CA' },
  { title:'Golden Gate Park 10k', date:'2025-12-13T08:00:00-08:00', location:'San Francisco, CA' },
  { title:'Half Moon Bay Coastal', date:'2026-01-03T08:00:00-08:00', location:'Half Moon Bay, CA' }
];

for (const e of events) {
  await sql`insert into events (title,date,location,visibility)
            values (${e.title}, ${e.date}, ${e.location}, 'members')
            on conflict do nothing;`;
}

console.log('Seeded Season 1 with 8 events');
