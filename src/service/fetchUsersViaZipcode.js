export const getUsersViaZipcode = (zipcode) => {
  return fetch(
<<<<<<< HEAD
    `http://pet-project-be-staging.herokuapp.com/api/v1/auth/zipcode/${zipcode}`
=======
    `https://pet-project-be-staging.herokuapp.com/api/v1/auth/zipcode/${zipcode}`,
    {
      method: 'GET',
      
      headers: {
        origin: null
      },
    }
>>>>>>> d4acd4201bec00737c1916e6e9aba397f673a7a1
  ).then(res => {
    if(res.ok) return res.json();
    throw `Response: ${res.status}`;
  });
};
