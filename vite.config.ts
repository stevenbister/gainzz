import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import createSpritesheet from './plugins/createSpritesheet';

export default defineConfig({
	plugins: [
		sveltekit(),
		createSpritesheet({
			targets: [{ src: 'src/lib/icons', dest: 'static' }],
			hook: 'buildStart',
		}),
	],
});
