import axios from 'axios';
import { Spinner } from 'flowbite-react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { AiOutlineReload } from 'react-icons/ai';


const RefreshBtn = ({ setPData }) => {
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    try {
      setLoading(true);
      const response = await axios.get('https://patientsapi.onrender.com/patients');
      setPData(response.data);
    } catch (err) {
      console.log(err);
      // handle error gracefully here
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-3 rounded"
      onClick={handleClick}
      disabled={loading}
    >
      {loading ? <Spinner color='success' size='sm'/> : <AiOutlineReload />}
    </button>
  );
};

RefreshBtn.propTypes = {
  setPData: PropTypes.func.isRequired,
};

export default RefreshBtn;
