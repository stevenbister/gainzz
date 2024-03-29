# Gainzz

## Requirements

-   Node v20.12.0
-   Docker

## Getting started

Install dependencies

```bash
npm i
```

Copy the `.env.example` file to `.env` and fill in the required values from your Supabase project. If you've not done so already you'll need to create this.

Make sure you have Docker installed and running. Then run the following command to link your Supabase project:

```bash
supabase login
supabase link --project-ref $PROJECT_ID
```

You can get your $PROJECT_ID from your project's dashboard URL.

Start your local supabase server

```bash
npx supabase start
```

This may take a couple of minutes if it's the first time you're running it.

Apply the migrations to your local Supabase project:

```bash
npx supabase db reset
```

Navigate to your local Supabase project dashboard and you should see the tables have been created.

Finally push your changes to your remote supabase project:

```bash
npx supabase db push
```

And check that the migration version is up to date for both local and remote databases

```bash
npx supabase migration list
```

For troubleshooting or more information: https://supabase.com/docs/guides/cli/managing-environments

## Developing

Once the above is complete you can start developing!

If not already running make sure to start your local Supabase server:

```bash
npx supabase start
```

Then start the app in development mode:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
