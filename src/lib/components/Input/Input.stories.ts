import type { Meta, StoryObj } from '@storybook/svelte';
import Input from './Input.svelte';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
	title: 'Input',
	component: Input,
	tags: ['autodocs'],
	argTypes: {},
} satisfies Meta<Input>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
	args: {
		label: 'Label',
		id: 'input',
		placeholder: 'Placeholder',
	},
};

/**
 * You can change the type and other default attributes of the input field, by passing regular HTML attributes.
 */
export const Attributes: Story = {
	args: {
		label: 'Email',
		id: 'input',
		placeholder: 'user@email.com',
		type: 'email',
	},
};

export const Invalid: Story = {
	args: {
		label: 'Email',
		id: 'input',
		placeholder: 'user@email.com',
		type: 'email',
		state: 'invalid',
		validationMessage: 'Please enter a valid email address',
	},
};
