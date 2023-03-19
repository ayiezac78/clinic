import axios from 'axios';
import { useState } from 'react';
import {AiOutlineReload} from 'react-icons/ai'

const RefreshBtn = ({setPData}) => {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    axios.get('http://localhost:8000/patients')
      .then(response => {
        setPData(response.data);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
        setLoading(false);
      });
  };

  return (
    <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-3 rounded"
      onClick={handleClick}
      disabled={loading}>
      {loading ? '....' : <AiOutlineReload/>}
    </button>
  );
}

export default RefreshBtn;
