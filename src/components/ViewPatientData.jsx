import patientDb from '/data/db.json'
import { Dropdown } from 'flowbite-react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Col, Row } from 'reactstrap';
import { HiArrowLongLeft } from 'react-icons/hi2';



const ViewPatientData = () => {
  const {id} = useParams()
  const patientInfo = patientDb.patients.find((patientInfo)=>patientInfo.id === +id)
  const navigate = useNavigate();

  const backHistory = () =>{
    navigate(-1)
  }


  return (
    <section className="py-20 mt-[85px] bg-[#EDFDF2] font-sora">
      <Container className='grid place-items-center'>
        <Col className=" bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
          <Row>
            <p className='mb-3'>First Name:</p> 
            <p>Last Name:</p> 
          </Row>
            <Container className=" p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Patient Details</h5>
                <Row>
                  <Col className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {patientInfo.patientData.firstName} 
                {patientInfo.patientData.lastName}
                </Col>
                <p>
                </p>
                </Row>
                
            </Container>
        </Col>
      </Container>
    </section>

  )
}

export default ViewPatientData


{/* <Container className="">
        <Card>
            <button onClick={backHistory}>
              <HiArrowLongLeft/>
            </button>
          <div className="flex justify-end px-0 pt-4">
            <Dropdown
              inline={true}
              label=""
            >
              <Dropdown.Item>
                <a
                  href="#"
                  className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Edit
                </a>
              </Dropdown.Item>
              <Dropdown.Item>
                <a
                  href="#"
                  className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Export Data
                </a>
              </Dropdown.Item>
              <Dropdown.Item>
                <a
                  href="#"
                  className="block py-2 px-4 text-sm text-red-600 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Delete
                </a>
              </Dropdown.Item>
            </Dropdown>
          </div>
          <div className="flex flex-col items-center pb-10">
          <img
        className="mb-3 h-24 w-24 rounded-full shadow-lg"
        src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
        alt="Bonnie image"
      />
            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
              {patientInfo.patientData.firstName} {patientInfo.patientData.lastName}
            </h5>
            <div className="mt-4 flex flex-col p-2 lg:mt-6">
              Patient Details:
              <a
                href="#"
                className="inline-flex items-center rounded-lg bg-blue-700 py-2 px-4 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Add friend
              </a>
              <a
                href="#"
                className="inline-flex items-center rounded-lg border border-gray-300 bg-white py-2 px-4 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
              >
                Message
              </a>
              <div>
                Age: {patientInfo.patientData.age}
                Gender: {patientInfo.patientData.gender}
                Contact #: {patientInfo.patientData.contactNumber}
                Email Address: {patientInfo.patientData.emailAddress}
                Address: {patientInfo.patientData.address}
              </div>
              Patient History:
              <div>
                {patientInfo.patientData.medicalConcern}
              </div>
            </div>
          </div>
        </Card>
      </Container> */}