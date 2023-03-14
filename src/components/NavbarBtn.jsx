import { Link } from "react-router-dom"
const NavbarBtn = (props) => {
  return (
    <Link to="/booking"><button className='bg-[#ECFEF2] text-[#164B2F] font-sora py-2 px-6 rounded-full md:ml-8 font-bold hover:bg-[#00A661] border-2 border-[#00A661] hover:text-[#ECFEF2] transition duration-300'>
      {props.children}
    </button></Link>
  )
}

export default NavbarBtn