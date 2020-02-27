
export const fileUpload = (data) => {
  return fetch('https://pet-project-be-staging.herokuapp.com/api/v1/auth/signup', {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      origin: true
    },
    body: data
  })
    .then(res => res.json());
};
