import NavbarBtn from "./NavbarBtn";
import { useState } from "react";
import '../assets/styles/link-underline-animation.css'

const NavbarComponents = () => {
  let Links =[
    {name:"HOME",link:"/"},
    {name:"SERVICES",link:"/"},
    {name:"RESULTS",link:"/"},
    {name:"ABOUT US",link:"/"},
    {name:"FAQ",link:"/"},
  ];
  const [open, setOpen] = useState(false)
  return (
    <div className="w-full fixed top-0 left-0">
      <div className="md:flex items-center justify-between bg-[#164B2F] py-4 md:px-10 px-7">
        <div className="font-bold text-2xl flex items-center font-sora text-[#ECFEF2] mr-1 pt-2">
          cLinic.
        </div>
        <div onClick={()=>setOpen(!open)} 
        className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden text-[#ECFEF2]">
          <ion-icon name={open ? 'close' : 'menu-outline'}></ion-icon>
        </div>
        <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-[#164B2F] md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-[72px] opacity-100':'top-[-490px]'} md:opacity-100 opacity-0`}>
          {
            Links.map((link)=>
            <li key={link.name} className="md:ml-8 md:my-0 my-7 text-[#ECFEF2] font-sora font-bold relative">
              <a className="hover:text-[#D2E4D6]" href={link.link}>
                <span className="link link-underline link-underline-black">{link.name}</span>
              </a>
            </li>)
          }
          <NavbarBtn>Book Now</NavbarBtn>
        </ul>
      </div>
    </div>
  );
};

export default NavbarComponents;
