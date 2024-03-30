import type { SupabaseClient } from '@supabase/supabase-js';
import { error } from '@sveltejs/kit';
import type { Database } from '~/types/supabase';

/**
 * Retrieves the user information from the Supabase client.
 *
 * @param client - The Supabase client instance.
 * @returns A Promise that resolves to the user data.
 * @throws If there is an error retrieving the user or if the user data is not available.
 */
export async function getUser(client: SupabaseClient<Database>) {
	try {
		const user = await client.auth.getUser();

		if (user.error) throw user.error;

		return user.data.user;
	} catch (err) {
		console.error(err);

		return error(500, 'Oops something went wrong! Please try again.');
	}
}
