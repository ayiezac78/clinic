import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";


const LoginStamp = () => {
  const [loggedIn, setLoggedIn] = useState(!!localStorage.getItem('token'));
  const location = useLocation();
  const adminEmail = location.state.adminEmail;
  const [dateTime, setDateTime] = useState(new Date());
  const navigate = useNavigate();

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDateTime(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate("/admin");
  };


  const handleAlert = () => {
    window.confirm("Are you sure you want to log out?") && handleLogout();
  };


  return (
    <Container className="md:px-10">
      <Row>
        <Col className="flex">
          <h1 className=" self-center">Welcome {adminEmail}</h1>
          <button className="border-[#00A661] hover:bg-[#00A661] hover:text-[#ECFEF2] transition duration-300 border-2 ml-2 rounded-xl p-2 font-semibold" onClick={handleAlert}>Logout</button>
        </Col>
      </Row>
      <p className="text-xs">Current Date & Time:</p> <span className="text-xs">{dateTime.toLocaleDateString()} {dateTime.toLocaleTimeString()}</span>
    </Container>
  )
}

export default LoginStamp