import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';
import pluginJest from 'eslint-plugin-jest'; // Import the Jest plugin

export default [
	{ files: ['**/*.{js,mjs,cjs,jsx}'] },
	{
		languageOptions: {
			globals: {
				...globals.browser,
				jest: 'readonly', // Add jest as a global
			},
			parserOptions: {
				ecmaVersion: 2021,
				sourceType: 'module',
			},
		},
		plugins: {
			react: pluginReact,
			jest: pluginJest, // Define Jest plugin as an object
		},
	},
	pluginJs.configs.recommended,
	pluginReact.configs.flat.recommended,
];
