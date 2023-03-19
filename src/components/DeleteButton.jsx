import axios from 'axios';
import { HiTrash } from "react-icons/hi2";

const DeleteButton = ({ id, setPData }) => {

  const handleDelete = () => {
      const confirmed = window.confirm("Are you sure you want to delete this data?");
      if (confirmed) {
        axios.delete(`http://localhost:8000/patients/${id}`)
          .then(response => {
            setPData(prevState => prevState.filter(patient => patient.id !== id));
            console.log(response);
          })
          .catch(err => console.log(err));
        }
    };

  return (
    <button onClick={handleDelete} className="font-medium text-red-600 dark:text-red-500 hover:underline">
      <HiTrash />
    </button>
  );
};

export default DeleteButton;
