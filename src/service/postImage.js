
export const fileUpload = (data) => {
  //return fetch('http://localhost:7891/api/v1/auth/signup', {
  return fetch('https://cors-anywhere.herokuapp.com/https://pet-project-be-staging.herokuapp.com/api/v1/auth/signup', {
    method: 'POST',
    body: data
  })
    .then(res => res.json());
};
