//import React, { useEffect, useState } from 'react';
import axios from 'axios';


const baseUrl = 'http://localhost:3000/user/';

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


/*
getAllData(12).then((value) => {
    //console.log('VALUE : ', value.activity.data.data.sessions);
    //console.log('VALUE : ', value.user.data.data.userInfos);
    //console.log(value.average.data.data)

    const uuser = new User(value);

    console.log(uuser)

    return uuser
    // expected output: "Success!"
});
*/


//console.log('test : ', data12.activity)


export default getAllData
 