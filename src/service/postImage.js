
export const fileUpload = (data) => {
  //console.log('in postImage.js data: ', data);
  //return fetch('http://localhost:7891/api/v1/images', {
  return fetch('http://localhost:7891/api/v1/auth/signup', {
    method: 'POST',
    body: data
  })
    .then(res => res.json());
};
