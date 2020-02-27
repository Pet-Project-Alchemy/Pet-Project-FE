
export const fileUpload = (data) => {
  console.log(data.entries);
  return fetch('http://localhost:7890/api/v1/auth/signup', {
    method: 'POST',
    credentials: 'include',
    body: data
  })
    .then(res => res.json());
};
