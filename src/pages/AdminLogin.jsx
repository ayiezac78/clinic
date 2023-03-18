import React, { useState } from "react";
import { Container, Col } from "reactstrap";
import AdminDashboard from "../components/AdminDashboard";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Toast } from "flowbite-react";


const AdminLogin = () => {
  const [adminAccountData, setAdminAccountData] = useState({
    email: "",
    pass: ""
  })

  const [loggedIn, setLoggedIn] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const viewPassword = ()=>{
    setShowPassword(!showPassword);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const url = "http://localhost:3000/admin";
    axios
      .get(url,{
        email:adminAccountData.email,
        password:adminAccountData.pass
      })
      .then((response) => {
        const admin = response.data.find((item) => {
          return item.email === adminAccountData.email && item.password === adminAccountData.pass;
        });
        if (admin) {
          localStorage.setItem("token", admin.token);
          setLoggedIn(true);
          navigate("/admindashboard", {state: {adminEmail: adminAccountData.email}});
          alert("login successful")
          // Toast.show("success", "login successful")
        } else {
          setLoggedIn(false);
          alert("Invalid email or password");
        }
      })
      .catch((err)=>{
        console.error(err);
        alert("Error retrieving data");
        if(err){
          setLoggedIn(false); //if admin fails to fetch the data from json db he cannot proceed to admin dashboard
          navigate("/admin")
        }
      });
    };
  
  const formatDate = (date) =>{
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  }

  if (loggedIn) {
    return <AdminDashboard email={adminAccountData.email} currentDate={formatDate(new Date())}/>;
  }

  return (
    <section className="py-20 mt-[85px] bg-[#EDFDF2] font-sora">
      <Container className="flex justify-center items-center flex-col border-2 w-60 h-64 rounded shadow">
          <h1 className="text-3xl font-bold mb-4 text-[#164B2F]">Admin Login</h1>
        <form onSubmit={handleSubmit}>
          <Col className="mb-2">
            <input
              type="email"
              onChange={(e)=>setAdminAccountData({...adminAccountData, email:e.target.value})}
              name="email"
              value={adminAccountData.email}
              placeholder="Email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </Col>
          <Col className="mb-2">
            <input
              type={showPassword ? "text" : "password"}
              onChange={(e)=>setAdminAccountData({...adminAccountData, pass:e.target.value})}
              name="pass"
              value={adminAccountData.pass}
              placeholder="Password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
            <label onClick={viewPassword} htmlFor="toggleShowHide" className="text-xs cursor-pointer" >{showPassword ? "Hide Password":"Show Password"}</label>
          </Col>
          <button className="w-full bg-[#164B2F] p-2 rounded-full text-[#ECFEF2] hover:opacity-90">Login</button>
        </form>
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </Container>
    </section>
  );
};


export default AdminLogin;
