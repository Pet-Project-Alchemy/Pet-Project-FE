export const fileUpload = (data) => {
  return fetch('https://pet-project-be.herokuapp.com/api/v1/auth/signup', {
    method: 'POST',
    credentials: 'include',
    body: data
  })
    .then(res => res.json());
};
