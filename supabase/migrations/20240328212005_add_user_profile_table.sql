create table
user_profile (
id bigint primary key generated always as identity,
created_at timestamptz default now(),
user_id uuid references auth.users,
first_name text,
last_name text
);
