import axios from 'axios';
import React, { useEffect, useState } from 'react';

const IndividualDashboard = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    const token = localStorage.getItem('token');
    axios.get("http://localhost:4040/api/v1/users/user", {
      headers: {
        Authorization: token,
      }
    })
    .then((response) => {
      console.log(response.data);
      setData(response.data); 
    })
    .catch((error) => {
      console.log("Error getting user dashboard", error);
    });
  }, []);

  return (
    <div>
      <h1>Welcome {data.email}</h1>
    </div>
  );
}

export default IndividualDashboard;
