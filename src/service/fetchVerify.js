export const fetchVerify = (body) => {
  return fetch(
    'https://pet-project-be-staging.herokuapp.com/api/v1/auth/verify', {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        origin: true
      },
      body: JSON.stringify(body)
    })
    .then(res => Promise.all([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw json;
      return json;
    });
};

