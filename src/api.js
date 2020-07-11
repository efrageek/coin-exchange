const URL = "https://api.coincap.io/v2";

async function getAssets() {
  try {
    const dataFetched = await fetch(`${URL}/assets?limit=20`);
    const dataJSON = await dataFetched.json();
    const data = await dataJSON.data;

    console.log(data);
    return data;
  } catch (e) {
    console.log(e);
  }
}

export default {
  getAssets
};
