
export const fileUpload = (data) => {
  return fetch('https://pet-project-be-staging.herokuapp.com/api/v1/auth/signup', {
    method: 'POST',
    body: data
  })
    .then(res => res.json());
};
