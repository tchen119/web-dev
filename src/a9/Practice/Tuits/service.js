const URL = 'http://localhost:4000/api/tuits';

export const findAllTuits = () =>
  fetch(URL)
    .then(response => response.json());

export const deleteTuit = (id) =>
  fetch(`${URL}/${id}`, {
    method: 'DELETE',
  });

export const createTuit = (tuit) =>
  fetch(URL, {
    method: 'POST',
    body: JSON.stringify(tuit),
    headers: {
      'content-type': 'application/json'
    }
  }).then(response => response.json());

export const findTuitById = (id) =>
  fetch(`${URL}/${id}`)
    .then(response => response.json());

export const updateTuit = (tuit) =>
  fetch(`${URL}/${tuit._id}`, {
    method: 'PUT',
    body: JSON.stringify(tuit),
    headers: {
      'content-type': 'application/json'
    }
  }).then(response => response.json());

export default {
  findAllTuits, deleteTuit, createTuit, findTuitById, updateTuit
};