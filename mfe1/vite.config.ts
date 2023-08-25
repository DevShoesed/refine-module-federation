import { federation } from '@module-federation/vite';
import { createEsBuildAdapter } from '@softarc/native-federation-esbuild';
import { reactReplacements } from '@softarc/native-federation-esbuild/src/lib/react-replacements';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import json from '@rollup/plugin-json';

export default defineConfig(async ({ command }) => ({
	server: { port: 8173 },
	logLevel: 'info',
	plugins: [
		json(),
		await federation({
			options: {
				workspaceRoot: __dirname,
				outputPath: 'dist',
				tsConfig: 'tsconfig.json',
				federationConfig: `module-federation/federation.config.cjs`,
				verbose: true,
				dev: command === 'serve',
			},
			adapter: createEsBuildAdapter({
				plugins: [],
				fileReplacements: command === 'serve' ? reactReplacements.dev : reactReplacements.prod,
			}),
		}),
		react(),
	],
}));
