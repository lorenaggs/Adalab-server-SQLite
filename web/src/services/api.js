const dataApi = (data) => {
  const URL_SERVER = "https://module-4-team-8.herokuapp.com/card";

  return fetch(URL_SERVER, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' },
  }).then((response) => response.json());
};
export default dataApi;
