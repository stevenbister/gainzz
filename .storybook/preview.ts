import type { Preview } from '@storybook/svelte';
import '../src/styles/app.scss';

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
		backgrounds: {
			default: 'gainzz',
			values: [
				{
					name: 'gainzz',
					value: 'var(--color-global-bg)',
				},
			],
		},
	},
};

export default preview;
