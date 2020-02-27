export const getMessages = (id) => {
  return fetch(
    `http://localhost:7890/api/v1/messages/${id}`
  ).then(res => {
    if(res.ok) return res.json();
    throw `Response: ${res.status}`;
  });
};
  
