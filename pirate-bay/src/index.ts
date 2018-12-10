import { search, TorrentSearchResult } from "thepiratebay";
import { config } from "dotenv";

config();

const searchPB = async (
  searchString: string
): Promise<TorrentSearchResult[]> => {
  console.log(process.env.THEPIRATEBAY_DEFAULT_ENDPOINT);
  console.log(searchString);
  try {
    const results = await search(searchString);
    return results;
  } catch (error) {
    console.error(error);
  }
};

const main = async () => {
  const searchString = process.argv[2];
  const results = await searchPB(searchString);
  console.log(results.slice(0, 5));
  process.exit();
};

main();
