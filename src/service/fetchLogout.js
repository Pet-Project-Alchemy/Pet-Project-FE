export const getUserLogout = () => {
  return fetch(
    'https://pet-project-be.herokuapp.com/api/v1/auth/logout',
    {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        origin: true
      }
    }
  ).then(res => {
    if(res.ok) return res.json();
    throw `Response: ${res.status}`;
  });
};
