import { PUBLIC_SUPABASE_ANON_KEY, PUBLIC_SUPABASE_URL } from '$env/static/public';
import { combineChunks, createBrowserClient, isBrowser, parse } from '@supabase/ssr';
import type { Database } from '~/types/supabase';
import type { LayoutLoad } from './$types';

// Handles the session and the supabase object on the client-side.
export const load: LayoutLoad = async ({ fetch, data, depends }) => {
	depends('supabase:auth');

	const supabase = createBrowserClient<Database>(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY, {
		global: {
			fetch,
		},
		cookies: {
			get(key) {
				if (!isBrowser()) {
					return JSON.stringify(data.session);
				}

				const cookie = combineChunks(key, (name) => {
					const cookies = parse(document.cookie);
					return cookies[name];
				});

				return cookie;
			},
		},
	});

	const {
		data: { session },
	} = await supabase.auth.getSession();

	return { supabase, session };
};
