import axios from 'axios';
const port = import.meta.env.SERVER_PORT || 3001;
const baseUrl = `http://localhost:${port}/anecdotes`;

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const createNew = async (content) => {
  const object = { content, votes: 0 }
  const response = await axios.post(baseUrl, object)
  return response.data
}

const update = async (id, content) => {
  const response = await axios.put(`${baseUrl}/${id}`, content);
  return response.data;
}
export default { getAll, createNew, update }