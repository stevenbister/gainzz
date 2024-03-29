create table
role (
id bigint primary key generated always as identity,
created_at timestamptz default now(),
role_name text
);

create table
user_role (
id bigint primary key generated always as identity,
created_at timestamptz default now(),
user_id uuid references auth.users,
role_id bigint references public.role
);
