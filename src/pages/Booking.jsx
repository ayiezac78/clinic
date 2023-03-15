import { Container, Row, Col } from "reactstrap";
import bookingImg from '../assets/images/undraw_doctor_kw-5-l.svg'
import 'react-datepicker/dist/react-datepicker.css'
import { useEffect, useRef, useState } from "react";
import axios from "axios";


const Booking = () => {
  const [patientData, setPatientData] = useState({
    date: '',
    firstName: '',
    lastName: '',
    age:'',
    gender:'',
    address:'',
    emailAddress:'',
    contactNumber:'',
    medicalConcern:''
  })

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInput = (e) =>{
    const { id, value } = e.target;
    setPatientData((pData) => ({
      ...pData,
      [id]: value,
    }));
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
        medicalConcern:''
      });
      setFormSubmitted(false);
      alert('Form submitted succesfully')
    }
  },[formSubmitted])


  return (
    <section className="bg-[#EDFDF2] font-sora">
      <Container className="p-5 mt-[85px]">
        <Row className="flex justify-center items-center">
          <Col className="justify-center flex iet">
            <form ref={formRef} onSubmit={handleSubmit}>
              <Row>
                <Col>
                  <label htmlFor="lblbookingdate" className="text-sm">Select Appointment Date</label>
                </Col>
                <Col>
                  <div className="mb-3">
                  <input onChange={handleInput} type="date" name="date" id="date" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer text-center"/>
                  </div>
                </Col>
              </Row>
              <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-6 group">
                  <input
                    onChange={handleInput}
                    type="text"
                    name="firstName"
                    id="firstName"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="floating_first_name"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    First name
                  </label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                  <input
                    onChange={handleInput}
                    type="text"
                    name="lastName"
                    id="lastName"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="floating_last_name"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Last name
                  </label>
                </div>
              </div>
              <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-6 group">
                <input
                  onChange={handleInput}
                  type="number"
                  name="age"
                  id="age"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                  />
                  <label
                    htmlFor="floating_age"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Age
                  </label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                  <select value={patientData.gender} id="gender" onChange={handleInput} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer">
                    <option className="text-gray-600">Gender</option>
                    <option>Male</option>
                    <option>Female</option>
                  </select>
                </div>
              </div>
              <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-6 group">
                  <input
                    onChange={handleInput}
                    type="tel"
                    name="contactNumber"
                    id="contactNumber"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="floating_contact-number"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Contact Number
                  </label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                  <input
                  onChange={handleInput}
                  type="email"
                  name="emailAddress"
                  id="emailAddress"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                  />
                  <label
                    htmlFor="floating_email"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Email
                  </label>
                </div>
              </div>
              <Row>
                <Col>
                <div className="relative z-0 w-full mb-6 group">
                  <input
                    onChange={handleInput}
                    type="text"
                    name="address"
                    id="address"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="floating_first_name"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Address
                  </label>
                </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <textarea onChange={handleInput} name="medicalConcern" id="medicalConcern" rows="4" className="block p-2.5 w-full text-sm bg-gray-100 text-gray-500 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="What is your medical concern?"></textarea>
                </Col>
              </Row>
              <Row className="mt-3">
                <Col>
                  <button className="w-full bg-[#164B2F] p-2 rounded-full text-[#ECFEF2] hover:opacity-90">Sumbit</button>
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
    </section>
  );
}

export default Booking