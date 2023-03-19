import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Container, Col, Row } from 'reactstrap';
import { HiArrowLongLeft, HiPencilSquare } from 'react-icons/hi2';
import axios from 'axios';

const ViewPatientData = () => {
  const { id } = useParams();
  const [patientInfo, setPatientInfo] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [patientData, setPatientData] = useState(null);
  const [unsavedChanges, setUnsavedChanges] = useState(false);
  const navigate = useNavigate();
  const [payment, setPayment] = useState({
    paid: false,
    amount: 0,
    options: []
  })
  
  const paymentOptions = [
    { label: "Credit Card", value: "credit_card" },
    { label: "Debit Card", value: "debit_card" },
    { label: "Cash", value: "cash" },
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/patients/${id}`);
        setPatientInfo(response.data);
        setPatientData(response.data.patientData);
        if (response.data.payment) {
          setPayment(response.data.payment);
        }
        setUnsavedChanges(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [id]);

  const toggleEditMode = () => {
    setEditMode(!editMode);
    setUnsavedChanges(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'paymentOption') {
      const option = paymentOptions.find(opt => opt.value === value);
      setPayment({
        ...payment,
        options: [option],
        paid: true,
        amount: 100
      });
    } else {
      setPatientData({
        ...patientData,
        [name]: value
      });
      if (patientInfo.patientData[name] !== value) {
        setUnsavedChanges(true);
      }
    }
  };

  // handles save changes everytime the admin saves the details of a patient
  const handleSave = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(`http://localhost:8000/patients/${id}`, { patientData, payment });
      setPatientInfo(prevState => ({ ...prevState, patientData, payment }));
      setPatientData(patientData);
      setPayment(payment);
      setEditMode(false);
      setUnsavedChanges(false);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCancel = () => {
    if (!unsavedChanges) {
      setEditMode(false);
      return;
    }
    if (window.confirm('Are you sure you want to discard your changes?')) {
      setEditMode(false);
      setUnsavedChanges(false);
      setPatientData(patientInfo.patientData);
    }
  };

  const backHistory = () => {
    if (unsavedChanges && !window.confirm('Are you sure you want to leave this page? Your changes will not be saved.')) {
      return;
    }
    navigate(-1);
  };

  return (
    <section className="py-20 mt-[85px] bg-[#EDFDF2] font-sora">
      <Container className="grid place-items-center">
        {patientInfo && (
          <div className="bg-white shadow rounded-lg p-6 w-96">
            <div className="flex justify-between items-center mb-4">
              <button onClick={backHistory} className="flex items-center text-gray-500">
                <HiArrowLongLeft className="h-5 w-5 text-gray-500 mr-1" />
                <span>Back</span>
              </button>
              <button onClick={toggleEditMode} className="flex items-center">
                <HiPencilSquare className="h-5 w-5 text-gray-500 mr-1" />
                <span className="text-gray-500">Edit</span>
              </button>
            </div>
            <h2 className="text-lg font-bold mb-3">Appointment Information</h2>
            {editMode ? (
              <>
                <form onSubmit={handleSave}>
                    <div className="mb-4">
                      <label htmlFor="date" className="block font-bold mb-2">
                        Date of Appointment:
                      </label>
                      <input
                        type="date"
                        id="date"
                        name="date"
                        value={patientData.date}
                        onChange={handleInputChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="firstName" className="block font-bold mb-2">
                        First Name:
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={patientData.firstName}
                        onChange={handleInputChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                        </div>
                        <div className="mb-4">
                          <label htmlFor="lastName" className="block font-bold mb-2">
                          Last Name:
                          </label>
                          <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={patientData.lastName}
                            onChange={handleInputChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          />
                        </div>
                        <div className="mb-4">
                          <label htmlFor="age" className="block font-bold mb-2">
                          Age:
                          </label>
                          <input
                            type="number"
                            id="age"
                            name="age"
                            value={patientData.age}
                            onChange={handleInputChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          />
                        </div>
                        <div className="mb-4">
                          <label htmlFor="gender" className="block font-bold mb-2">
                          Gender:
                          </label>
                          <select name="gender" id="gender" onChange={handleInputChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required>
                            <option className="text-gray-600">Gender</option>
                            <option>Male</option>
                            <option>Female</option>
                          </select>
                        </div>
                        <div className="mb-4">
                          <label htmlFor="contactNumber" className="block font-bold mb-2">
                          Contact Number:
                          </label>
                          <input
                            type="tel"
                            id="contactNumber"
                            name="contactNumber"
                            value={patientData.contactNumber}
                            onChange={handleInputChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          />
                        </div>
                        <div className="mb-4">
                          <label htmlFor="emailAddress" className="block font-bold mb-2">
                            Email Address:
                          </label>
                          <input
                            type="email"
                            id="emailAddress"
                            name="emailAddress"
                            value={patientData.emailAddress}
                            onChange={handleInputChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          />
                        </div>
                        <div className="mb-4">
                          <label htmlFor="address" className="block font-bold mb-2">
                          Address:
                          </label>
                          <input
                            type="text"
                            id="address"
                            name="address"
                            value={patientData.address}
                            onChange={handleInputChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          />
                        </div>
                        <div className="mb-4">
                          <label htmlFor="reason" className="block font-bold mb-2">
                          Reason for Appointment:
                          </label>
                          <textarea
                            id="reason"
                            name="reason"
                            value={patientData.medicalConcern}
                            onChange={handleInputChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          />
                        </div>
                        <div className="mb-4">
                          <label htmlFor="paid" className="block font-bold mb-2">
                            Paid:
                          </label>
                          <select
                            id="paid"
                            name="paid"
                            value={payment.paid}
                            onChange={(e) =>
                              setPayment({ ...payment, paid: e.target.value === "true" })
                            }
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          >
                            <option value={true}>Yes</option>
                            <option value={false}>No</option>
                          </select>
                        </div>
                        <div className="mb-4">
                          <label htmlFor="amount" className="block font-bold mb-2">
                            Amount Paid:
                          </label>
                          <input
                            type="number"
                            id="amount"
                            name="amount"
                            value={payment.amount}
                            onChange={(e) =>
                              setPayment({ ...payment, amount: e.target.value })
                            }
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          />
                        </div>
                        <div className="mb-4">
                          <label htmlFor="options" className="block font-bold mb-2">
                            Payment Options:
                          </label>
                          <select
                            label="Payment"
                            id="options"
                            name="options"
                            value={payment.options}
                            onChange={(event) =>
                              setPayment({ ...payment, options: event.target.value })
                            }
                          >
                            {paymentOptions.map((option) => (
                              <option key={option.value} value={option.value}>
                                {option.label}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div className="flex justify-between">
                        <button onClick={handleCancel} className="bg-green-500 text-white px-4 py-2 rounded hover:bg-blue-400">
                          Cancel
                        </button>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-400">
                        Save Changes
                        </button>
                        </div>
                </form>
              </>
              
              ) : (
                <>
                  <div className="mb-4">
                    <p className="font-bold">Date of Appointment:</p>
                    <p>{patientData.date}</p>
                  </div>
                  <div className="mb-4">
                    <p className="font-bold">First Name:</p>
                    <p>{patientData.firstName}</p>
                  </div>
                  <div className="mb-4">
                    <p className="font-bold">Last Name:</p>
                    <p>{patientData.lastName}</p>
                  </div>
                  <div className="mb-4">
                    <p className="font-bold">Age:</p>
                    <p>{patientData.age}</p>
                  </div>
                  <div className="mb-4">
                    <p className="font-bold">Gender:</p>
                    <p>{patientData.gender}</p>
                  </div>
                  <div className="mb-4">
                    <p className="font-bold">Contact Number:</p>
                    <p>{patientData.contactNumber}</p>
                  </div>
                  <div className="mb-4">
                    <p className="font-bold">Email Address:</p>
                    <p>{patientData.emailAddress}</p>
                  </div>
                  <div className="mb-4">
                    <p className="font-bold">Address:</p>
                    <p>{patientData.address}</p>
                  </div>
                  <div className="mb-4">
                    <p className="font-bold">Reason for Appointment:</p>
                    <p>{patientData.medicalConcern}</p>
                  </div>
                  <div className="mb-4">
                    <strong>Paid:</strong> {payment.paid ? "Yes" : "No"}
                  </div>
                  <div className="mb-4">
                    <strong>Amount Paid:</strong> {payment.amount}
                  </div>
                  <div className="mb-4">
                    <strong>Payment Options:</strong>{" "}
                    {paymentOptions.find(option => option.value === payment.options)?.label}
                  </div>
                </>
              )}
              </div>
              )}
      </Container>
    </section>

  )
}

export default ViewPatientData