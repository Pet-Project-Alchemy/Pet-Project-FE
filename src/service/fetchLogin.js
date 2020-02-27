export const getUserLogin = (emailString, passwordString) => {
  return fetch(
    'http://localhost:7890/api/v1/auth/login',
    {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        origin: true
      },
      body: JSON.stringify({
        email: emailString,
        password: passwordString,
      })
    }
  ).then(res => {
    if(res.ok) return res.json();
    throw `Response: ${res.status}`;
  });
};
