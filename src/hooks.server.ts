// src/hooks.server.ts
import { PUBLIC_SUPABASE_ANON_KEY, PUBLIC_SUPABASE_URL } from '$env/static/public';
import { createServerClient } from '@supabase/ssr';
import type { Handle } from '@sveltejs/kit';
import type { Database } from '~/types/supabase';

export const handle: Handle = async ({ event, resolve }) => {
	event.locals.supabase = createServerClient<Database>(
		PUBLIC_SUPABASE_URL,
		PUBLIC_SUPABASE_ANON_KEY,
		{
			global: {
				fetch: (...args) => {
					//// TEMP
					// https://github.com/cloudflare/workerd/issues/698
					if (args[1]?.cache) {
						delete args[1].cache;

						if (!args[1]?.headers) args[1].headers = {};

						// eslint-disable-next-line @typescript-eslint/ban-ts-comment
						// @ts-ignore
						args[1].headers['Cache-Control'] = 'no-store';
					}
					////

					return fetch(...args);
				},
			},
			cookies: {
				get: (key) => event.cookies.get(key),
				/**
				 * Note: You have to add the `path` variable to the
				 * set and remove method due to sveltekit's cookie API
				 * requiring this to be set, setting the path to `/`
				 * will replicate previous/standard behaviour (https://kit.svelte.dev/docs/types#public-types-cookies)
				 */
				set: (key, value, options) => {
					event.cookies.set(key, value, {
						...options,
						secure: true,
						httpOnly: true,
						path: '/',
					});
				},
				remove: (key, options) => {
					event.cookies.delete(key, {
						...options,
						secure: true,
						httpOnly: true,
						path: '/',
					});
				},
			},
		}
	);

	/**
	 * A convenience helper so we can just call await getSession() instead const { data: { session } } = await supabase.auth.getSession()
	 *
	 * Note that auth.getSession reads the auth token and the unencoded session data from the local storage medium. It doesn't send a request back to the Supabase Auth server unless the local session is expired.
	 * You should never trust the unencoded session data if you're writing server code, since it could be tampered with by the sender. If you need verified, trustworthy user data, call auth.getUser instead, which always makes a request to the Auth server to fetch trusted data.
	 */
	event.locals.safeGetSession = async () => {
		const {
			data: { user },
			error,
		} = await event.locals.supabase.auth.getUser();
		if (error) {
			return { session: null, user: null };
		}

		const {
			data: { session },
		} = await event.locals.supabase.auth.getSession();
		return { session, user };
	};

	return resolve(event, {
		// Note that we are specifying filterSerializedResponseHeaders here. We need to tell SvelteKit that supabase needs the content-range header.
		filterSerializedResponseHeaders(name) {
			return name === 'content-range';
		},
	});
};
