export const getUsersViaZipcode = (zipcode) => {
  return fetch(
    `https://cors-anywhere.herokuapp.com/https://pet-project-be-staging.herokuapp.com/api/v1/auth/${97227}`,
    {
      method: 'GET',
      
      headers: {
        origin: null
      },
    }
  ).then(res => {
    if(res.ok) return res.json();
    throw `Response: ${res.status}`;
  });
};
