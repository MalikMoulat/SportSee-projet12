import axios from 'axios';


const baseUrl = 'http://localhost:3000/user/';


/**
 * It takes an id as an argument, and returns a promise that resolves to an object containing the data
 * from all four endpoints
 * 
 * @param {number} id 
 * @returns user datas
 */
const getAllData = async (id) => {
  const endPoints = [
    `${baseUrl}${id}`,
    `${baseUrl}${id}/activity`,
    `${baseUrl}${id}/average-sessions`,
    `${baseUrl}${id}/performance`,
  ];

  return axios
    .all(endPoints.map((endPoint) => axios.get(endPoint)))
    .then(
      axios.spread((user, activity, average, performance) => {
        JSON.stringify(user);
        JSON.stringify(activity);
        JSON.stringify(average);
        JSON.stringify(performance);
        return { user, activity, average, performance };
      })
    )
    .catch((error) => {
      localStorage.setItem("error", error.message);
      throw new Error(error);
    });
};


export default getAllData
 