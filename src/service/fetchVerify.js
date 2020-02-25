export const fetchVerify = (path, method, body) => {
  return fetch('https://cors-anywhere.herokuapp.com/https://pet-project-be-staging.herokuapp.com/api/v1/auth/verify', {
    method,
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify(body)
  })
    .then(res => Promise.all([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw json;
      return json;
    });
};
