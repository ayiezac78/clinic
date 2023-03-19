import PatientsData from "./PatientsData";
import LoginStamp from "./LoginStamp";
// import Search from "./Search";



function AdminDashboard() {


  return (
    <section className="py-10 mt-[85px] bg-[#EDFDF2] font-sora text-[#164B2F]">
      <LoginStamp/>
      {/* <Search/> */}
      <PatientsData/>
    </section>
  );
}

export default AdminDashboard;
