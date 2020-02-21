
export const getUserSignup = (emailString, password) => {
  return fetch(
    'https://cors-anywhere.herokuapp.com/https://pet-project-be-staging.herokuapp.com/api/v1/auth/signup',
    {
      method: 'POST',

      headers: {
        'Content-Type': 'application/json',
        origin: true
      },
      body: JSON.stringify({
        email: emailString,
        passwordHash: password
      })
    }
  ).then(res => {
    if(res.ok) return res.json();
    throw `Response: ${res.status}`;
  });
};
