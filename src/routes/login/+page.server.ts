import { handleLogin, validateEmail, validatePassword } from '$lib/auth';
import { fail, redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const actions = {
	default: async ({ request, locals: { supabase } }) => {
		const formData = await request.formData();

		const email = formData.get('email');
		if (!validateEmail(email)) {
			return fail(400, {
				error: 'Invalid email',
				email: email,
				success: false,
				message: 'Invalid email address',
			});
		}

		const password = formData.get('password');
		if (!validatePassword(password)) {
			return fail(400, {
				error: 'Invalid password',
				email: email,
				success: false,
				message: 'Invalid password',
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
export const load: PageServerLoad = async ({ locals: { getSession } }) => {
	const session = await getSession();

	if (session) {
		redirect(303, '/');
	}
};
