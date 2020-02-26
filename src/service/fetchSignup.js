export const getUserSignup = ({
  email,
  password,
  firstName,
  timeNeeded,
  lastName,
  timeAvailable,
  userImage,
  userBio,
  street,
  city,
  state,
  zipcode,
  dogName,
  dogSize,
  breed,
  dogBio,
  dogImage
}) => {
  return fetch(
    'http://pet-project-be-staging.herokuapp.com/api/v1/auth/signup',
    {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        origin: true
      },
      body: JSON.stringify({
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName,
        timeNeeded: timeNeeded,
        timeAvailable: timeAvailable,
        image: userImage,
        bio: userBio,
        address: {
          street,
          city,
          state,
          zipcode,
        },
        dog: [
          {
            name: dogName,
            size: dogSize,
            breed,
            bio: dogBio,
            img: dogImage
          }
        ]
      })
    }
  ).then(res => {
    if(res.ok) return res.json();
    throw `Response: ${res.status}`;
  });
};
