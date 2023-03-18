import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";


const LoginStamp = () => {
  const [loggedIn, setLoggedIn] = useState(true);
  const location = useLocation();
  const adminEmail = location.state.adminEmail;
  const date = new Date().toLocaleDateString();
  const time = new Date().toLocaleTimeString();
  const navigate = useNavigate();

  const handleLogout = () =>{
    localStorage.removeItem('token');
    setLoggedIn(false);
  }

  const handleAlert = () => {
    if(window.confirm("Are you sure you want to log out?")) {
      handleLogout();
      navigate("/admin")
    }
  }

  return (
    <Container className="md:px-10">
      <Row>
        <Col className="flex">
          <h1 className=" self-center">Welcome {adminEmail}</h1>
          {/* <button className="" onClick={handleAlert}>Logout</button> */}
          <button className="border-[#00A661] hover:bg-[#00A661] hover:text-[#ECFEF2] transition duration-300 border-2 ml-2 rounded-xl p-2 font-semibold" onClick={handleAlert}>Logout</button>
        </Col>
        {/* <Col>
        </Col> */}
      </Row>
      <p className="text-xs">Current Date & Time:</p> <span className="text-xs">{date}  {time}</span>
    </Container>
  )
}

export default LoginStamp