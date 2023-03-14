import NavbarBtn from "./NavbarBtn";
import { useState } from "react";
import '../assets/styles/link-underline-animation.css'
import { Link } from "react-router-dom";

const NavbarComponents = () => {
  let Links =[
    {name:"HOME",link:"/"},
    {name:"SERVICES",link:"/services"},
    {name:"RESULTS",link:"/results"},
    {name:"ABOUT US",link:"/aboutus"},
    {name:"FAQ",link:"/faq"},
  ];
  const [open, setOpen] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () =>{
    // console.log(window.scrollY);
    if (window.scrollY >= 80) {
      setNavbar(true)
    }else{
      setNavbar(false)
    }
  }

  window.addEventListener('scroll', changeBackground);

  return (
    <div className={`shadow w-full ${navbar ? 'navbar active':'navbar'} fixed top-0 left-0`}>
      <div className="md:flex items-center justify-between py-4 md:px-10 px-7">
        <div className="font-bold text-2xl flex items-center font-sora mr-1 pt-2">
          <Link to='/'>cLinic.</Link>
        </div>
        <div onClick={()=>setOpen(!open)} 
        className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden">
          <ion-icon name={open ? 'close' : 'menu-outline'}></ion-icon>
        </div>
        <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static ${navbar ? 'navbar active':'navbar'} md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 ${open ? 'top-[72px] opacity-100':'top-[-490px]'} md:opacity-100 opacity-0`}>
          {
            Links.map((link)=>
            <li key={link.name} className="md:ml-8 md:my-0 my-7 font-sora font-bold relative">
              <Link to={link.link}>
                <span className="link link-underline link-underline-black">{link.name}</span>
              </Link>
            </li>)
          }
          <NavbarBtn>Book Now</NavbarBtn>
        </ul>
      </div>
    </div>
  );
};

export default NavbarComponents;
