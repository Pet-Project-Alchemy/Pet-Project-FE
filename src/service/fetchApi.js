const request = (path, method, body) => {
  return fetch(`${process.env.API_URL}${path}`, {
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

export const post = (path, body) => request(path, 'POST', body);
export const get = path => request(path, 'GET');
export const patch = (path, body) => request(path, 'PATCH', body);
export const del = path => request(path, 'DELETE');
