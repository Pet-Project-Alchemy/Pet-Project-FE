export const getUsersandDeleteThem = (id) => {
  return fetch(`http://localhost:7890/api/v1/auth/${id}`, {
    method: 'DELETE',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      origin: true
    }
  })
    .then(res => Promise.all([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw json;
      return json;
    })
    .then(() => {
      history.replace('/');
    });
};
