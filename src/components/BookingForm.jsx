import { Container, Row, Col } from "reactstrap";
import bookingImg from '../assets/images/undraw_doctor_kw-5-l.svg'
import 'react-datepicker/dist/react-datepicker.css'
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../assets/styles/arrow-appearance.css'

const generatedRandomId = () =>{
  const id = Math.floor(Math.random() * 10000);
  return id;
}


const BookingForm = () => {
  const [patientData, setPatientData] = useState({
    date: '',
    firstName: '',
    lastName: '',
    age:'',
    gender:'',
    address:'',
    emailAddress:'',
    contactNumber:'',
    medicalConcern:'',
    ids: generatedRandomId()
  })

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInput = (e) =>{
    setPatientData({
      ...patientData,
      [e.target.name] : e.target.value
    });
    console.log(patientData);
  }

  function handleSubmit(e){
    e.preventDefault();
    axios.post('http://localhost:8000/patients', {patientData})
    .then(response => {
      console.log(response);
      setFormSubmitted(true);
    })
    .catch(err => console.log(err));
  }

  const notify = () =>{
    toast.success(`Successfully Submitted! Your appointment ID is ${patientData.ids}., See you!`, {
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
        firstName: '',
        lastName: '',
        age:'',
        gender:'',
        address:'',
        emailAddress:'',
        contactNumber:'',
        medicalConcern:'',
        ids:generatedRandomId()
      });
      setFormSubmitted(false);
      notify();
    }
  },[formSubmitted])


  return (
    <section className="bg-[#EDFDF2] font-sora">
    <Container className="p-5 mt-[85px]">
      <Row className="flex justify-center items-center">
        <Col className="justify-center flex">
          <form ref={formRef} onSubmit={handleSubmit}>
            <Row>
              <Col>
                <label htmlFor="lblbookingdate" className="text-sm">Select Appointment Date: </label>
              </Col>
              <Col>
                <div className="mb-3">
                <input onChange={handleInput} type="date" name="date" id="date" className="block p-2.5 w-full text-sm bg-gray-100 text-gray-500 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
                </div>
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
                <button className="w-full bg-[#164B2F] p-2 rounded-full text-[#ECFEF2] hover:opacity-90">Set Appointment</button>
              </Col>
            </Row>
          </form>
        </Col>
        <Col className="sm:hidden md:block">
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