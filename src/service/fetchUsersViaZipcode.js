export const getUsersViaZipcode = (zipcode) => {
  return fetch(
    `http://pet-project-be-staging.herokuapp.com/api/v1/auth/zipcode/${zipcode}`
  ).then(res => {
    if(res.ok) return res.json();
    throw `Response: ${res.status}`;
  });
};
