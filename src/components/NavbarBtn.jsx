const NavbarBtn = (props) => {
  return (
    <button className='bg-[#ECFEF2] text-[#164B2F] font-sora py-2 px-6 rounded-full md:ml-8 font-bold hover:bg-[#00A661] border-2 border-[#00A661] hover:text-[#ECFEF2] transition duration-300'>
      {props.children}
    </button>
  )
}

export default NavbarBtn