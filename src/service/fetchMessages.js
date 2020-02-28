export const getMessages = (id) => {
  return fetch(
    `https://pet-project-be.herokuapp.com/api/v1/messages/${id}`
  ).then(res => {
    if(res.ok) return res.json();
    throw `Response: ${res.status}`;
  });
};

export const getConversations = () => {
  return fetch(
    'http://localhost:7890/api/v1/messages/', 
    { credentials: 'include' }
  ).then(res => {
    if(res.ok) return res.json();
    throw `Response: ${res.status}`;
  });
};
