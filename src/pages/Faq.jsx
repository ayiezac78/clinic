import { Accordion } from "flowbite-react"

const Faq = () => {
  return (
    <div className='p-4 pt-10 mt-32 font-sora text-green-700'>
      <h1 className='text-start px-3 text-3xl mb-4 font-bold'>Frequently Asked Questions</h1>
      <div className='flex justify-center items-center'>
        <Accordion alwaysOpen={true} className="w-full">
          <Accordion.Panel>
            <Accordion.Title>
              Can the cLinic diagnose me?
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
              Our specialists collaborate across disciplines to listen to your story, evaluate your condition from every angle, and develop a diagnosis and treatment plan that's just for you.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title>
              Do I need to be seriously ill to seek care at the cLinic?
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
              You don't have to be seriously ill to seek care at the cLinic. In fact, patients no need to travel to the cLinic from their residence because it is online. All you need to do is just go the cLinic website and click on the site booking button and fill-up the necessary fields.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title>
              Can I have a consultation to the cLinic without an appointment?
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
              Scheduling an appointment before consultation is strongly encouraged. We can't guarantee the slot for you without an advance online appointment.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
        </Accordion>
      </div>
    </div>
    
  )
}

export default Faq