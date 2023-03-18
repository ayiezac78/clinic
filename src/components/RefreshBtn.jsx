import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { HiEye, HiTrash } from 'react-icons/hi2';


const RefreshBtn = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false)

  function handleRefresh() {
    setLoading(true);
    axios.get('http://localhost:8000/patients')
        .then(res =>{
          const newData = res.data;
          setData(prevData => [...prevData, ...newData]);
          setLoading(false);
          console.log(res.data);
        })
        .catch(err=>{
          console.error(err);
          setLoading(false);
        })
  }

  return (
   <div>
      <button onClick={handleRefresh}>Refresh</button>
    </div>
  )
}

export default RefreshBtn