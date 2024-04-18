import { error } from '@sveltejs/kit';

export function padNumber(num: number, size: number = 2): string {
	let s = num + '';
	while (s.length < size) s = '0' + s;
	return s;
}

export async function getUserFromLocals(locals: App.Locals) {
	const { user } = await locals.safeGetSession();

	if (!user) {
		throw error(401, {
			message: 'Unauthorized',
		});
	}

	return user;
}
