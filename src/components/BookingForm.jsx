import { Container, Row, Col } from "reactstrap";
import bookingImg from '../assets/images/undraw_doctor_kw-5-l.svg'
import 'react-datepicker/dist/react-datepicker.css'
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../assets/styles/arrow-appearance.css'

  

const BookingForm = () => {

  const fetchPatients = async () => {
    // Fetch the list of patients from the JSON API.
    const response = await fetch('https://patientsapi.onrender.com/patients');
    const patients = await response.json();
    return patients;
  };

  const generateIncrementalId = async () => {
    const patients = await fetchPatients();
    const maxId = patients.reduce((max, patient) => {
      const id = parseInt(patient.id);
      return id > max ? id : max;
    }, 0);
    const newId = maxId + 1;
    return newId.toString().padStart(4, '0');
  };

  const [isLoading, setIsLoading] = useState(false);

  const [patientData, setPatientData] = useState({
    date: '',
    period: '',
    firstName: '',
    lastName: '',
    age:'',
    gender:'',
    address:'',
    emailAddress:'',
    contactNumber:'',
    medicalConcern:'',
    ids: ''
  })

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInput = (e) =>{
    setPatientData({
      ...patientData,
      [e.target.name] : e.target.value
    });
    console.log(patientData);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    generateIncrementalId().then((id) => {
      const dateParts = patientData.date.split("-"); // Split the date string into an array of parts
      const formattedDate = `${dateParts[2]}/${dateParts[1]}/${dateParts[0]}`; // Format the date as MM/DD/YYYY
      const patient = {
        patientData: {
          date: formattedDate,
          period: patientData.period,
          firstName: patientData.firstName,
          lastName: patientData.lastName,
          age: patientData.age,
          gender: patientData.gender,
          address: patientData.address,
          emailAddress: patientData.emailAddress,
          contactNumber: patientData.contactNumber,
          medicalConcern: patientData.medicalConcern,
          ids: id,
        },
        id: id,
      };
  
      axios
        .post("https://patientsapi.onrender.com/patients", patient)
        .then((response) => {
          console.log(response);
          notify(id);
          setFormSubmitted(true);
          setPatientData({
            ...patientData,
            ids: id
          });
          setIsLoading(false);
        })
        .catch((err) => {
          console.log(err)
          setIsLoading(false);
        });

    });
  }


  const notify = (ids) =>{
    toast.success(`Successfully Submitted! Your Appointment ID is ${ids}., See you!`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
  }

  const formRef = useRef();

  useEffect(()=>{
    if(formSubmitted){
      formRef.current?.reset();
      setPatientData({
        date: '',
        period:'',
        firstName: '',
        lastName: '',
        age:'',
        gender:'',
        address:'',
        emailAddress:'',
        contactNumber:'',
        medicalConcern:'',
        ids:generateIncrementalId()
      });
      setFormSubmitted(false);
    }
  },[formSubmitted])


  return (
    <section className="bg-[#EDFDF2] font-sora">
    <Container className="p-5 mt-[85px]">
      <Row className="flex justify-center items-center">
        <Col className="justify-center flex">
          <form ref={formRef} onSubmit={handleSubmit}>
            <Col className="mb-3">
              <label htmlFor="lblbookingdate" className="text-xl font-semibold text-[#164B2F]">Set an Appointment Consultation Now! </label>
            </Col>
            <Row>
              <Col>
                <div className="mb-3">
                <input onChange={handleInput} type="date" name="date" id="date" className="block p-2.5 w-full text-sm bg-gray-100 text-gray-500 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
                </div>
              </Col>
              <Col>
                <select name="period" id="period" onChange={handleInput} className="block p-2.5 w-full text-sm bg-gray-100 text-gray-500 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                  <option className="text-gray-600">Choose Time</option>
                  <option>AM</option>
                  <option>PM</option>
                </select>
              </Col>
            </Row>
            <Row>
              <Col className="w-full mb-6">
                <input
                  onChange={handleInput}
                  type="text"
                  name="firstName"
                  id="firstName"
                  autoComplete="off"
                  className="block p-2.5 w-full text-sm bg-gray-100 text-gray-500 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="First Name"
                  required
                />
              </Col>
              <Col>
                <input
                  onChange={handleInput}
                  type="text"
                  name="lastName"
                  id="lastName"
                  autoComplete="off"
                  className="block p-2.5 w-full text-sm bg-gray-100 text-gray-500 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Last Name "
                  required
                />
              </Col>
            </Row>
            <Row>
              <Col className="w-full mb-6">
              <input
                onChange={handleInput}
                type="number"
                name="age"
                id="age"
                autoComplete="off"
                className="block p-2.5 w-full text-sm bg-gray-100 text-gray-500 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Age"
                required
                />
              </Col>
              <Col className="w-full mb-6">
                <select name="gender" id="gender" onChange={handleInput} className="block p-2.5 w-full text-sm bg-gray-100 text-gray-500 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                  <option className="text-gray-600">Gender</option>
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </Col>
            </Row>
            <Row>
              <Col className="w-full mb-6">
                <input
                  onChange={handleInput}
                  type="tel"
                  autoComplete="off"
                  name="contactNumber"
                  id="contactNumber"
                  className="block p-2.5 w-full text-sm bg-gray-100 text-gray-500 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Contact Number "
                  required
                />
              </Col>
              <Col className="w-full mb-6">
                <input
                onChange={handleInput}
                type="email"
                name="emailAddress"
                autoComplete="off"
                id="emailAddress"
                className="block p-2.5 w-full text-sm bg-gray-100 text-gray-500 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Email Address "
                required
                />
              </Col>
            </Row>
            <Row>
              <Col className="w-full mb-6">
                <input
                  onChange={handleInput}
                  type="text"
                  name="address"
                  autoComplete="off"
                  id="address"
                  className="block p-2.5 w-full text-sm bg-gray-100 text-gray-500 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Complete Address"
                  required
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <textarea onChange={handleInput} name="medicalConcern" id="medicalConcern" rows="4" className="block p-2.5 w-full text-sm bg-gray-100 text-gray-500 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 resize-none" placeholder="What is your medical concern?" required></textarea>
              </Col>
            </Row>
            <Row className="mt-3">
              <Col>
                <button className="w-full bg-[#164B2F] p-2 rounded-full text-[#ECFEF2] hover:opacity-90">{isLoading ? 'Generating Appointment ID...' : 'Set Appointment'}</button>
              </Col>
            </Row>
          </form>
        </Col>
        <Col className="sm:hidden md:block">
          <p className="mb-4 text-3xl font-semibold text-[#164B2F]">"PREVENTION IS BETTER THAN CURE. - Unknown"</p>
          <img
            src={bookingImg}
            alt="the doctor is consulting the child"
            className=" w-96"
          />
        </Col>
      </Row>
    </Container>
    <ToastContainer
      position="top-center"
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="colored"
    />
  </section>
  )
}

export default BookingForm