create table exercise (
    id bigint primary key generated always as identity,
    name text not null,
    created_by uuid references auth.users,
    created_at timestamptz default now(),
    updated_at timestamptz default now()
);

create table workout (
    id bigint primary key generated always as identity,
    created_by uuid references auth.users,
    name text not null,
    nickname text,
    created_at timestamptz default now(),
    updated_at timestamptz default now()
);

create table workout_exercise (
    id bigint primary key generated always as identity,
    workout_id bigint references public.workout,
    exercise_id bigint references public.exercise,
    created_by uuid references auth.users,
    sets integer not null,
    reps text not null,
    weight text not null,
    created_at timestamptz default now(),
    updated_at timestamptz default now()
);

create table workout_week (
    id bigint primary key generated always as identity,
    week integer not null,
    created_by uuid references auth.users,
    created_at timestamptz default now(),
    updated_at timestamptz default now()
);

create table workout_day (
    id bigint primary key generated always as identity,
    workout_week_id bigint references public.workout_week,
    workout_id bigint references public.workout,
    created_by uuid references auth.users,
    day integer not null,
    created_at timestamptz default now(),
    updated_at timestamptz default now()
);

create table workout_cycle (
    id bigint primary key generated always as identity,
    created_by uuid references auth.users,
    key integer not null,
    created_at timestamptz default now(),
    updated_at timestamptz default now()
);

create table workout_cycle_week (
    id bigint primary key generated always as identity,
    workout_cycle_id bigint references public.workout_cycle,
    workout_week_id bigint references public.workout_week,
    created_by uuid references auth.users,
    created_at timestamptz default now(),
    updated_at timestamptz default now()
);