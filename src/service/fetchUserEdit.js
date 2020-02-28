export const getUsersandEditThem = (id, data) => {
  return fetch(`https://pet-project-be.herokuapp.com/api/v1/auth/profile/${id}`, {
    method: 'PATCH',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      origin: true
    },
    body: JSON.stringify({
      email: data.email,
      password: data.password,
      firstName: data.firstName,
      lastName: data.lastName,
      timeNeeded: data.timeNeeded,
      timeAvailable: data.timeAvailable,
      bio: data.userBio,
      address: {
        street: data.street,
        city: data.city,
        state: data.state,
        zipcode: data.zipcode,
      },
      dog: [
        {
          name: data.dogName,
          size: data.dogSize,
          breed: data.breed,
          bio: data.dogBio,
        }
      ]
    })
  })
    .then(res => Promise.all([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw json;
      return json;
    });
};
