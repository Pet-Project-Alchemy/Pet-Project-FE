
export const fileUpload = (data) => {
  return fetch('http://localhost:7890/api/v1/auth/signup', {
    method: 'POST',
    credentials: 'include',
    body: data
  })
    .then(res => res.json());
};
