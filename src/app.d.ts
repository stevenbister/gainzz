// See https://kit.svelte.dev/docs/types#app
import type { Session, SupabaseClient, User } from '@supabase/supabase-js';
import type { Database } from '~/types/supabase';

// for information about these interfaces
declare global {
	namespace App {
		interface Locals {
			supabase: SupabaseClient<Database>;
			getSession(): Promise<User | null>;
		}
		interface PageData {
			session: Session | null;
		}
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
