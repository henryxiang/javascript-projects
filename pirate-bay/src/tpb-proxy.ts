import { getProxyList } from "thepiratebay/lib/Parser";

const main = async () => {
  const proxyList = await getProxyList();
  console.log(proxyList);
  process.exit();
};

main();
