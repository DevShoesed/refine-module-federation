import { initFederation } from '@softarc/native-federation';

(async () => {
	await initFederation({
		mfe1: 'http://localhost:8173/remoteEntry.json',
	});

	await import('./index');
})();