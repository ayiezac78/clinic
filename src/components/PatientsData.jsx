import axios from 'axios';
import { useState,useEffect } from 'react';
import { Container } from 'reactstrap';
import { HiTrash, HiEye } from "react-icons/hi2";
import { Link } from 'react-router-dom';
import RefreshBtn from './RefreshBtn';


const PatientsData = () => {
  const [pData, setPData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/patients')
      .then(response => {
        console.log(response.data[0]);
        setPData(response.data);
      })
      .catch(err => console.log(err));
  }, []);


  return (
    <Container className="overflow-x-auto shadow-md sm:rounded-lg pt-3">
      <RefreshBtn/>
      {/* <h1>Patients Data</h1> */}
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-[#164B2F] uppercase bg-[#81B795] dark:bg-[#81B795] dark:text-[#164B2F]">
          <tr>
            <th scope="col" className="px-6 py-3">ID</th>
            <th scope="col" className="px-6 py-3">Appointment Date</th>
            <th scope="col" className="px-6 py-3">First Name</th>
            <th scope="col" className="px-6 py-3">Last Name</th>
            <th scope="col" className="px-6 py-3">Age</th>
            <th scope="col" className="px-6 py-3">Gender</th>
            <th scope="col" className="px-6 py-3">Email Address</th>
            <th scope="col" className="px-6 py-3">Contact Number</th>
            <th scope="col" className="px-6 py-3">Address</th>
            <th scope="col" className="px-6 py-3">Medical Concern</th>
            <th scope="col" className="px-6 py-3">Actions</th>
            {/* <th scope="col" className="px-6 py-3">Delete</th> */}
          </tr>
        </thead>
        <tbody>
          {pData.map((patient, _index) => (
            <tr key={_index} className="bg-[#D2E4D6] border-b dark:bg-gray-900 dark:border-gray-700">
              <td className='px-6 py-4'>{patient.id}</td>
              <td className='px-6 py-4'>{patient.patientData.date}</td>
              <td className='px-6 py-4'>{patient.patientData.firstName}</td>
              <td className='px-6 py-4'>{patient.patientData.lastName}</td>
              <td className='px-6 py-4'>{patient.patientData.age}</td>
              <td className='px-6 py-4'>{patient.patientData.gender}</td>
              <td className='px-6 py-4'>{patient.patientData.emailAddress}</td>
              <td className='px-6 py-4'>{patient.patientData.contactNumber}</td>
              <td className='px-6 py-4'>{patient.patientData.address}</td>
              <td className='px-6 py-4'>{patient.patientData.medicalConcern}</td>
              <td className="px-6 py-5 flex">
                <Link to={`/viewpatient/${patient.id}`} className="font-medium mr-5 text-blue-600 dark:text-blue-500 hover:underline"><HiEye/></Link>
                <a href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline"><HiTrash/></a>
              </td>
              {/* <td class="px-6 py-4">
              </td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  )
}

export default PatientsData