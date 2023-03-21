import { Link } from "react-router-dom";
import { IoLogoFacebook, IoLogoTwitter, IoLogoInstagram, IoCallSharp, IoLocationSharp, IoMailOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="py-12 bg-[#D2E4D6] xl:pt-24 font-sora">
      <div className="w-full px-4 mx-auto max-w-8xl">
        <div className="grid gap-12 xl:grid-cols-5 xl:gap-24">
          <div className="col-span-2">
            <Link to="/" className="flex mb-5">
              <span className="self-center text-2xl font-semibold whitespace-nowrap text-[#164B2F]">
                cLinic.
              </span>
            </Link>
            <p className="max-w-lg mb-3 text-[#164B2F] dark:text-[#164B2F]">
              cLinic. is an online services to provide solutions to your daily clinical concerns.
            </p>
            <div className="max-w-lg text-[#164B2F] dark:text-[#164B2F]">
              <ul>
                <li className="mb-4">
                 <span className="inline-flex mr-2"><IoLocationSharp/></span>
                  <span>Davao City, Philippines</span>
                </li>
                <li className="mb-4">
                 <span className="inline-flex mr-2"><IoCallSharp/></span>
                  <span>(403) 12345</span>
                </li>
                <li className="mb-4">
                 <span className="inline-flex mr-2"><IoMailOutline/></span>
                  <span>inquire@clinic.com</span>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h3 className="mb-6 text-sm font-semibold text-[#164B2F] uppercase dark:text-[#164B2F]">
              Helpful Links
            </h3>
            <ul>
              <li className="mb-4">
                <Link to='/'
                  className="font-normal hover:underline"
                >
                  Home
                </Link>
              </li>
              <li className="mb-4">
                <Link to='/services'
                  className="font-normal hover:underline"
                >
                  Services
                </Link>
              </li>
              <li className="mb-4">
                <Link to='/blogs'
                  className="font-normal hover:underline"
                >
                  Blogs
                </Link>
              </li>
              <li className="mb-4">
                <Link to='/aboutus'
                  className="font-normal hover:underline"
                >
                  About Us
                </Link>
              </li>
              <li className="mb-4">
                <Link to='/faq'
                  className="font-normal hover:underline"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-6 text-sm font-semibold text-[#164B2F] uppercase dark:text-[#164B2F]">
              Help and support
            </h3>
            <ul>
              <li className="mb-4">
                <Link to='/'
                  className="font-normal hover:underline"
                >
                  Contact us
                </Link>
              </li>
              <li className="mb-4">
                <Link to='/'
                  className="font-normal hover:underline"
                >
                  Send us suggestions
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-6 text-sm font-semibold text-[#164B2F] uppercase dark:text-[#164B2F]">
              Follow Us
            </h3>
            <ul className="inline-flex text-2xl dark:text-[#164B2F] text-[#164B2F]">
              <li>
                <Link to='/'
                  className="font-normal hover:underline"
                  >
                  <span><IoLogoFacebook/></span>
                </Link>
              </li>
              <li className="ml-4">
                <Link to='/'
                  className="font-normal hover:underline"
                  >
                  <span><IoLogoTwitter/></span>
                </Link>
              </li>
              <li className="ml-4">
                <Link to='/'
                  className="font-normal hover:underline"
                  >
                  <span><IoLogoInstagram/></span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <hr className="my-8 border-[#ECFEF2] dark:border-[#ECFEF2] lg:my-12" />
        <span className="block text-center text-[#164B2F] dark:text-[#164B2F] font-">
          © 2023 <span id="currentYear"></span>
          <a href="/">cLinic.</a>{" "}
           <span>All Rights Reserved.</span>
        </span>
      </div>
    </footer>
  );
}

export default Footer