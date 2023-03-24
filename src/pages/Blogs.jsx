import blog1 from '../assets/images/blog1.jpg';
import blog2 from '../assets/images/blog2.jpg';
import '../assets/styles/blogs.css'

const Blogs = () => {
  const listItems = [
    {
      title: "What are the healthy habits?",
      items: [
        "Measure and Watch Your Weight.",
        "Limit Unhealthy Foods and Eat Healthy Meals.",
        "Take Multivitamin Supplements.",
        "Drink Water and Stay Hydrated, and Limit Sugared Beverages.",
        "Exercise Regularly and Be Physically Active.",
        "Reduce Sitting and Screen Time.",
        "Get Enough Good Sleep.",
        "Go Easy on Alcohol and Stay Sober."
      ],
      image: blog1,
    },
    {
      title: "What are the five (5) tips to eat and stay healthy?",
      items: [
        "Eat a variety of food",
        "Cut back on salt",
        "Take Multivitamin Supplements.",
        "Reduce use of certain fats and oil",
        "Limit sugar intake",
        "Avoid hazardous and harmful alcohol"
      ],
      image: blog2,
    }
  ];

  return (
    <section className="font-sora mb-10 md:mb-10 md:m-2 md:p-2 sm:p-5 sm:mt-16 md:mt-16 text-[#164B2F] fade-in">
        <h1 className='md:m-8 md:p-2 sm:p-2 md:mt-16 sm:mt-10 text-3xl font-bold'>Get the best health tips to stay healthy living.</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-8">
        {listItems.map((item, index) => (
          <div
            key={index}
            
            className="bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <div className="h-80 md:h-48 overflow-hidden rounded-t-lg">
              <img
                className="object-cover w-full h-full"
                src={item.image}
                alt=""
              />
            </div>
            <div className="px-4 py-6 flex flex-col justify-between">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {item.title}
              </h5>
              <ul className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {item.items.map((listItem, index) => (
                  <li key={index}>{listItem}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blogs;
