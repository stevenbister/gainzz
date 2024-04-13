import { handleLogin, validateEmail, validatePassword } from '$lib/auth';
import { fail, redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const actions = {
	default: async ({ request, locals: { supabase } }) => {
		const formData = await request.formData();

		const email = formData.get('email');
		if (!validateEmail(email)) {
			return fail(400, {
				email: email,
				field: {
					name: 'email',
					error: 'Invalid email',
					message: 'Invalid email address',
				},
			});
		}

		const password = formData.get('password');
		if (!validatePassword(password)) {
			return fail(400, {
				email: email,
				field: {
					name: 'password',
					error: 'Invalid password',
					message: 'Invalid password, must be at least 8 characters long',
					field: 'password',
				},
			});
		}

		const auth = await handleLogin(supabase, { email, password });

		if (auth?.success) {
			return redirect(307, '/');
		} else {
			return fail(auth.status ?? 500, {
				...auth,
			});
		}
	},
};

// If the user is already logged in return him to the home page
export const load: PageServerLoad = async ({ locals: { safeGetSession } }) => {
	const { session } = await safeGetSession();

	if (session) {
		redirect(303, '/');
	}
};
