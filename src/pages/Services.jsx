import BasicPackage from "../components/BasicPackage"


const Services = () => {
  return (
    <section className="p-30 mt-20 mx-auto lg:mx-auto w-full flex justify-center items-center flex-wrap font-sora">
      <p className="text-2xl md:text-4xl font-bold md:mb-2 text-center pt-10 mt-10">
        Using <span className="text-[#164B2F] text-2xl md:text-4xl">NEW & FULLY AUTOMATED EQUIPMENT</span>,
        <br className="hidden md:block" />
        we offer <span className="underline text-2xl md:text-4xl">package prices</span> for the following diagnostic tests.
      </p>
      <div class="p-6 sm:p-10 md:p-16 mt-auto sm:mt-12 md:mt-16 lg:flex lg:justify-center flex-col items-center lg:flex-row">
        <h2 class="text-3xl font-bold mb-8 text-center text-[#164B2F]">Services & Packages</h2>
        <div class="lg:flex lg:justify-center">
          <BasicPackage/>
        </div>
      </div>
    </section>



  )
}

export default Services