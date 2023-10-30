export let state = {
  api: {
    baseURL: 'https://api.igdb.com/v4',
    clientId: '6gcjmymrpono4un901t7k8r4nz3hkh',
    clientSecret: 'h0s7kr8rahe6q33vcbv4e2fuh36hdp',
    access_token: null,
  },
};

export const authentication = async function () {
  const requestOptions = {
    method: 'POST',
  };
  const res = await fetch(
    `https://id.twitch.tv/oauth2/token?client_id=${state.api.clientId}&client_secret=${state.api.clientSecret}&grant_type=client_credentials`,
    requestOptions
  );
  const data = await res.json();
  state.api.access_token = data.access_token;
};
