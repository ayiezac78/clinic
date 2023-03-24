import { useState, useEffect } from "react";
import '../assets/styles/packages.css'
import ScrollReveal from 'scrollreveal';


const BasicPackage = () => {
  useEffect(() => {
    const sr = ScrollReveal({
      reset: true,
      delay: 200,
      distance: "50px",
    });

    sr.reveal(".srpackage", {
      duration: 500,
      origin: "bottom",
      distance: "50px",
      opacity: 0,
      scale: 0.9,
      easing: "ease-out",
    });
  }, []);
  
  const [healthPackage, setHealthPackage] = useState([
    {
      package_name: "Basic Package",
      x_ray: "Chest X-ray PA",
      ua: "U/A (Urinalysis)",
      se: "S/E(Stool Exam)",
      cbc: "CBC (Complete Blood Count)",
      hepa: "HBsAg (Hepatitis B Surface Antigen)",
      price: '1500'
    },
    {
      package_name: "Premium Package",
      x_ray: "Chest X-ray PA",
      ua: "U/A (Urinalysis)",
      cbc: "CBC (Complete Blood Count)",
      fbs: "Fasting Blood Sugar",
      bua: "Blood Uric Acid",
      creatinine: "Creantinine",
      lipid: "Lipid Profile",
      sgpt: "SGPT",
      ultrasound: "Ultrasound (Whole Abdomen)",
      price:'3500'
    },
    {
      package_name:'Diabetes Package',
      fbs:'Fasting Blood Sugar',
      hba1c:'Hemoglobin A1c (HbA1c)',
      ua:'U/A (Urinalysis)',
      price:'1700'
    },
    {
      package_name:'Kidney Function Package',
      bun:'Blood Urea Nitrogen',
      creatinine: "Creantinine",
      creatinineClearance: "Creantinine Clearance",
      ua:'U/A (Urinalysis)',
      price:'2500'
    },
    {
      package_name:'Pregnancy Package',
      bt:'Blood Typing',
      cbcPlatelet: "CBC w/ Platelet Count",
      fbs_rbs: "FBS/RBS",
      ua:'U/A (Urinalysis)',
      hbsag: "HBsAg (Hepatitis B Surface Antigen) Screening",
      price:'2000'
    },
    {
      package_name:'Blood Chemistry Package',
      creatinine: "Creantinine",
      fbs: "Fasting Blood Sugar",
      lipid: "Lipid Profile",
      sgpt: "SGPT (ALT)",
      ua:'U/A (Urinalysis)',
      cbcPlatelet: "CBC w/ Platelet Count",
      uacid: 'Uric Acid',
      price:'1900'
    },
    {
      package_name:'Pre-Employment Package',
      dt: "Drug Testing",
      hbsag: "HBsAg (Hepatitis B Surface Antigen) Screening",
      se: "S/E(Stool Exam)",
      x_ray: "Chest X-ray PA",
      ua:'U/A (Urinalysis)',
      me:'Medical Evaluation',
      price:'2000'
    }

  ]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-4 px-4 sm:px-6 md:px-8 py-6 w-full overflow-x-none container-wide-mobile">
    {healthPackage.map((packageItem, index) => (
      <div
        key={index}
        className="bg-white shadow-lg rounded-lg px-8 pt-10 pb-8 mb-8 sm:mb-0 srpackage"
      >
        <h3 className="text-2xl font-extrabold text-gray-900 mb-4 flex justify-between items-center">
        <span className="text-sm sm:text-base">{packageItem.package_name}</span>{" "}
        <span className="text-green-500 font-medium ml-2 text-sm sm:text-base">&#8369;{packageItem.price}</span>
      </h3>
        <ul className="text-lg text-gray-500 mb-6">
          {Object.entries(packageItem).map(([key, value]) => {
            if (key !== "package_name") {
              return (
                <li
                  key={value}
                  className="flex items-center mb-2 text-sm sm:text-base my-1 py-1"
                >
                  <svg
                    className="h-6 w-6 text-green-500 mr-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>{value}</span>
                </li>
              );
            }
            return null;
          })}
        </ul>
        <button className="btn-subscribe">
          <p>Subscribe</p>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
          </svg>
        </button>
      </div>
    ))}
    </div>
  );
};

export default BasicPackage;
