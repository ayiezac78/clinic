import axios from 'axios';
import { useState,useEffect } from 'react';
import { Container } from 'reactstrap';
import { HiEye, HiXMark } from "react-icons/hi2";
import { Link } from 'react-router-dom';
import RefreshBtn from './RefreshBtn';
import DeleteButton from './DeleteButton';

const PatientsData = () => {
  const [pData, setPData] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState(pData);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const localData = localStorage.getItem("patients");
    if (localData) {
      setPData(JSON.parse(localData));
    }
  
    axios
      .get("https://patientsapi.onrender.com/patients")
      .then((response) => {
        setPData(response.data);
        setFilteredData(response.data);
        localStorage.setItem("patients", JSON.stringify(response.data));
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);
  

  // filtering search when typing
  useEffect(() => {
    const filteredResults = pData.filter((patient) => {
      const fullName = `${patient.patientData.firstName} ${patient.patientData.lastName}`.toLowerCase();
      const appointmentId = `${patient.patientData.ids}`.toLowerCase();
      return fullName.includes(search.toLowerCase()) || appointmentId.includes(search.toLowerCase());
    });
    setFilteredData(filteredResults);
  }, [pData, search]);

  const handleSearch = (event) => {
    const value = event.target.value.toLowerCase();
    setSearch(value);
  };

  const clearSearch = () => {
    setSearch('');
    setFilteredData(pData);
  };


  return (
    <Container className="overflow-x-auto shadow-md sm:rounded-lg pt-3">
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by name or appointment id"
          onChange={handleSearch}
          value={search}
          className="px-4 py-2 border border-gray-400 rounded-md w-50 mr-5 text-xs"
        />
        {search && (
          <button onClick={clearSearch} className='relative right-12 top-1'>
            <HiXMark className="w-4 h-4" />
          </button>
        )}
        <RefreshBtn setPData={setPData} />
      </div>
      <div className='h-[100vh] overflow-y-auto'>
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead>
            <tr className='text-center text-xs text-[#164B2F] uppercase bg-[#81B795] dark:bg-[#81B795] dark:text-[#164B2F]'>
              <th scope="col" className="px-6 py-3">Appointment ID</th>
              <th scope="col" className="px-6 py-3">Appointment Date</th>
              <th scope="col" className="px-6 py-3">First Name</th>
              <th scope="col" className="px-6 py-3">Last Name</th>
              <th scope="col" className="px-6 py-3">Age</th>
              <th scope="col" className="px-6 py-3">Gender</th>
              <th scope="col" className="px-6 py-3">Email Address</th>
              <th scope="col" className="px-6 py-3">Contact Number</th>
              <th scope="col" className="px-6 py-3">Address</th>
              <th scope="col" className="px-6 py-3"> Medical Concern</th>
              <th scope="col" className="px-6 py-3">Paid</th>
              <th scope="col" className="px-6 py-3">Actions</th>
            </tr>
          </thead>
          {filteredData.length > 0 ? (
                <tbody className='overflow-scroll text-center'>
                  {
                    filteredData.map((patient, _index) => (
                        <tr
                          key={_index}
                          className="bg-[#D2E4D6] border-b dark:bg-gray-900 dark:border-gray-700"
                        >
                          <td className="px-6 py-4">{patient.patientData.ids}</td>
                          <td className="px-6 py-4">{patient.patientData.date} {patient.patientData.period}</td>
                          <td className="px-6 py-4">{patient.patientData.firstName}</td>
                          <td className="px-6 py-4">{patient.patientData.lastName}</td>
                          <td className="px-6 py-4">{patient.patientData.age}</td>
                          <td className="px-6 py-4">{patient.patientData.gender}</td>
                          <td className="px-6 py-4">{patient.patientData.emailAddress}</td>
                          <td className="px-6 py-4">{patient.patientData.contactNumber}</td>
                          <td className="px-6 py-4">{patient.patientData.address}</td>
                          <td className="px-6 py-4">{patient.patientData.medicalConcern}</td>
                          <td className="px-6 py-4">{patient.payment ? (patient.payment.paid ? 'Yes' : 'No') : 'N/A'}</td>
                          <td className="px-6 py-4 flex items-center">
                            <Link
                              to={`/viewpatient/${patient.id}`}
                              className="font-medium mr-5 text-blue-600 dark:text-blue-500 hover:underline"
                            >
                              <HiEye />
                            </Link>
                            <DeleteButton id={patient.id} setPData={setPData}/>
                          </td>
                        </tr>
                      ))
                  }
                </tbody>
              ) : (
                <tbody className="bg-[#EDFDF2] divide-y dark:divide-gray-700 dark:bg-gray-800">
                  <tr>
                    <td colSpan="12" className="text-center py-4">
                      No records found
                    </td>
                  </tr>
                </tbody>
              )
          }
        </table>
      </div>
    </Container>
  );
}

export default PatientsData