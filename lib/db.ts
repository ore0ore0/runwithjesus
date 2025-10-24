import { sql } from '@vercel/postgres';

export async function ensureTables() {
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
}
