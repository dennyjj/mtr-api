import { fetchMtrBus } from './src/mtr-api';

async function main() {
  const data = await fetchMtrBus('en', 'K17');
  console.log(data);
}

main();
