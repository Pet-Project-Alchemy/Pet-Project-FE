export const getUserProfile = id => {
  return fetch(
    `http://localhost:7890/api/v1/auth/zipcode/${id}`,
    {
      method: 'GET',

      headers: {
        origin: null
      }
    }
  ).then(res => {
    if(res.ok) return res.json();
    throw `Response: ${res.status}`;
  });
};
