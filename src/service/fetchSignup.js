
export const getUserSignup = (emailString, passwordString, firstNameString, timeNeededString, lastNameString, timeAvailableString, userImageString, userBioString, addressStreetString, addressCityString, addressStateString, addressZipcodeString, dogNameString, dogSizeString, dogBreedString, dogBioString, dogImageString) => {
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
        password: passwordString,
        firstName: firstNameString,
        lastName: lastNameString,
        timeNeeded: timeNeededString,
        timeAvailable: timeAvailableString,
        image: userImageString,
        bio: userBioString,
        address: {
          street: addressStreetString,
          city: addressCityString,
          state: addressStateString,
          zipcode: addressZipcodeString
        },
        dog: [
          {
            name: dogNameString,
            size: dogSizeString,
            breed: dogBreedString,
            bio: dogBioString,
            img: dogImageString
          }
        ]
      })
    }
  ).then(res => {
    if(res.ok) return res.json();
    throw `Response: ${res.status}`;
  });
};
