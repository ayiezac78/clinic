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
            <p className="max-w-lg mb-3 text-gray-600 dark:text-gray-400">
              cLinic. is an online services to provide solutions to your daily clinical concerns.
            </p>
            <div className="max-w-lg text-gray-600 dark:text-gray-400">
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
                <a
                  href="https://flowbite.com/"
                  className="font-normal hover:underline"
                >
                  Home
                </a>
              </li>
              <li className="mb-4">
                <a
                  href="https://flowbite.com/blocks/"
                  className="font-normal hover:underline"
                >
                  Services
                </a>
              </li>
              <li className="mb-4">
                <a
                  href="https://flowbite.com/figma/"
                  className="font-normal hover:underline"
                >
                  Results
                </a>
              </li>
              <li className="mb-4">
                <a
                  href="https://flowbite.com/pro/"
                  className="font-normal hover:underline"
                >
                  About Us
                </a>
              </li>
              <li className="mb-4">
                <a
                  href="https://flowbite.com/pro/"
                  className="font-normal hover:underline"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-6 text-sm font-semibold text-[#164B2F] uppercase dark:text-[#164B2F]">
              Help and support
            </h3>
            <ul>
              <li className="mb-4">
                <a
                  href="https://flowbite.com/contact/"
                  rel="noreferrer nofollow"
                  className="font-normal hover:underline"
                >
                  Contact us
                </a>
              </li>
              <li className="mb-4">
                <a
                  href="https://github.com/themesberg/flowbite/discussions"
                  rel="noreferrer nofollow"
                  className="font-normal hover:underline"
                >
                  Send us suggestions
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-6 text-sm font-semibold text-[#164B2F] uppercase dark:text-[#164B2F]">
              Follow Us
            </h3>
            <ul className="inline-flex text-2xl dark:text-[#164B2F] text-[#164B2F]">
              <li>
                <a
                  href="https://flowbite.com/contact/"
                  rel="noreferrer nofollow"
                  className="font-normal hover:underline"
                  >
                  <span><IoLogoFacebook/></span>
                </a>
              </li>
              <li className="ml-4">
                <a
                  href="https://github.com/themesberg/flowbite/discussions"
                  rel="noreferrer nofollow"
                  className="font-normal hover:underline"
                  >
                  <span><IoLogoTwitter/></span>
                </a>
              </li>
              <li className="ml-4">
                <a
                  href="https://github.com/themesberg/flowbite/discussions"
                  rel="noreferrer nofollow"
                  className="font-normal hover:underline"
                  >
                  <span><IoLogoInstagram/></span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr className="my-8 border-[#ECFEF2] dark:border-[#ECFEF2] lg:my-12" />
        <span className="block text-center text-[#164B2F] dark:text-[#164B2F] font-">
          © 2023 <span id="currentYear"></span>
          <a href="https://flowbite.com/">cLinic.</a>{" "}
           <span>All Rights Reserved.</span>
        </span>
      </div>
    </footer>
  );
}

export default Footer