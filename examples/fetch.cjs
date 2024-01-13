/* eslint-disable @typescript-eslint/no-var-requires */
const createBareClient = require('../dist/BareClient.cjs');

createBareClient('http://localhost:3000/').then(async (client) => {
	const response = await client.fetch('https://www.google.com/', {
		proxyIp: 'testIP',
		proxyPort: '3000',
	});

	console.log(response.status, await response.text());
});
