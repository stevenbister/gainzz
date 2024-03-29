-- create test users
insert into auth.users (
        instance_id,
        id,
        aud,
        role,
        email,
        encrypted_password,
        email_confirmed_at,
        recovery_sent_at,
        last_sign_in_at,
        raw_app_meta_data,
        raw_user_meta_data,
        created_at,
        updated_at,
        confirmation_token,
        email_change,
        email_change_token_new,
        recovery_token
    ) (
        select
            '00000000-0000-0000-0000-000000000000',
            uuid_generate_v4 (),
            'authenticated',
            'authenticated',
            'bob@test.com',
            crypt ('reallysecurepassword', gen_salt ('bf')),
            current_timestamp,
            current_timestamp,
            current_timestamp,
            '{"provider":"email","providers":["email"]}',
            '{}',
            current_timestamp,
            current_timestamp,
            '',
            '',
            '',
            ''
    );

-- test user email identities
insert into auth.identities (
        id,
        user_id,
        provider_id,
        identity_data,
        provider,
        last_sign_in_at,
        created_at,
        updated_at
    ) (
        select
            uuid_generate_v4 (),
            id,
            id,
            format('{"sub":"%s","email":"%s"}', id :: text, email) :: jsonb,
            'email',
            current_timestamp,
            current_timestamp,
            current_timestamp
        from
            auth.users
    );

-- test user profiles
insert into public.user_profile (
    created_at,
    user_id,
    first_name,
    last_name
) values (
    current_timestamp,
    (select id from auth.users where instance_id = '00000000-0000-0000-0000-000000000000'),
    'Bob',
    'Smith'
);

-- test user roles
insert into public.role (
    created_at,
    role_name
) values (
    current_timestamp,
    'admin'
);

insert into public.user_role (
    created_at,
    user_id,
    role_id
) values (
    current_timestamp,
    (select id from auth.users where instance_id = '00000000-0000-0000-0000-000000000000'),
    (select id from public.role where role_name = 'admin')
);