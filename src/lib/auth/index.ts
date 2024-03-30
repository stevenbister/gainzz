import { AuthApiError, type SupabaseClient } from '@supabase/supabase-js';
import type { Database } from '~/types/supabase';

/**
 * Handles the login process.
 *
 * @param client - The Supabase client.
 * @param email - The user's email.
 * @param password - The user's password.
 * @returns A redirect response or an error response.
 */
export async function handleLogin(
	client: SupabaseClient<Database>,
	{ email, password }: { email: string; password: string }
) {
	try {
		const auth = await client.auth.signInWithPassword({
			email,
			password,
		});

		if (auth.error) throw auth.error;

		return {
			success: true,
		};
	} catch (error) {
		console.error('Auth error:', error);

		if (error instanceof AuthApiError && error.status === 400) {
			return {
				status: error.status,
				error: 'Invalid credentials',
				email: email,
				success: false,
				message: error.message,
			};
		}

		return {
			status: 500,
			error: 'Unexpected error',
			email: email,
			success: false,
			message: 'Oops something went wrong! Please try again.',
		};
	}
}

/**
 * Handles the logout functionality for the Supabase client.
 *
 * @param client - The Supabase client instance.
 * @returns A promise that resolves when the user is successfully logged out.
 */
export async function handleLogout(client: SupabaseClient<Database>) {
	return await client.auth.signOut();
}

/**
 * Validates if the given value is a valid email address.
 *
 * @param email - The value to be validated.
 * @returns A boolean indicating whether the value is a valid email address.
 */
export function validateEmail(email: unknown): email is string {
	return typeof email === 'string' && email.length > 3 && email.includes('@');
}

/**
 * Validates a password.
 *
 * @param password - The password to validate.
 * @returns A boolean indicating whether the password is valid.
 */
export function validatePassword(password: unknown): password is string {
	return typeof password === 'string' && password.length > 7;
}
