export const getUsersViaZipcode = (zipcode) => {
  return fetch(
    `https://pet-project-be-staging.herokuapp.com/api/v1/auth/zipcode/${zipcode}`,
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
//https://pet-project-be-staging.herokuapp.com/api/v1/auth/zipcode/${zipcode}
