const pb = require('thepiratebay');
const dotenv = require('dotenv')

dotenv.config();

const search = async (searchString) => {
  console.log(process.env.THEPIRATEBAY_DEFAULT_ENDPOINT);
  const results = await pb.search(searchString);
  return results;
};

const main = async () => {
  const results = await search("scent of a woman");
  console.log(results.slice(0, 5));
  process.exit();
};

main();
