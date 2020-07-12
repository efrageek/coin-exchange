const URL = "https://api.coincap.io/v2";

async function getAssets() {
  try {
    const dataFetched = await fetch(`${URL}/assets?limit=20`);
    const dataJSON = await dataFetched.json();
    const data = await dataJSON.data;

    return data;
  } catch (e) {
    console.log(e);
  }
}

async function getAsset(coin) {
  try {
    const dataFetched = await fetch(`${URL}/assets/${coin}`);
    const dataJSON = await dataFetched.json();
    const data = await dataJSON.data;

    return data;
  } catch (e) {
    console.log(e);
  }
}

async function getAssetHistory(coin) {
  const now = new Date();
  const end = now.getTime();
  now.setDate(now.getDate() - 1);
  const start = now.getTime();

  const dataFetched = await fetch(
    `${URL}/assets/${coin}/history?interval=h1&start=${start}&end=${end}`
  );
  const dataJSON = await dataFetched.json();
  const data = await dataJSON.data;
  return data;
}

async function getMarket(coin) {
  const dataFetched = await fetch(
    `${URL}/assets/${coin}/markets?limit=5)`
  );
  const dataJSON = await dataFetched.json();
  const data = await dataJSON.data;
  return data;
}

async function getExchange(id) {
  const dataFetched = await fetch(`${URL}/exchanges/${id}`);
  const dataJSON = await dataFetched.json();
  const data = await dataJSON.data;
  return data;
}

export default {
  getExchange,
  getMarket,
  getAssets,
  getAsset,
  getAssetHistory
};
