export let state = {
  clientId: '6gcjmymrpono4un901t7k8r4nz3hkh',
  clientSecret: 'h0s7kr8rahe6q33vcbv4e2fuh36hdp',
};

export const authentication = async function () {
  const res = await fetch(
    `https://id.twitch.tv/oauth2/token?client_id=${state.clientId}&client_secret=${state.clientSecret}&grant_type=client_credentials`
  );
  const data = await res.json();
  console.log(data);
};
