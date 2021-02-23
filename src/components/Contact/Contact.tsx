const Contact = () => {
  return (
    <section className="w-full px-4 py-8 text-center bg-gray-50 favorite md:pt-6 font-inter">
      <div className="max-w-2xl py-8 mx-auto">
        <h3 className="mt-2 font-bold font-casual">WE CAN HELP YOU BUILD YOUR PROJECT!</h3>
        <span className="inline-flex w-16 h-1 bg-yellow-500 rounded-full"></span>
        <h4 className="mt-2 font-bold text-yellow-500 font-casual">TELL US ABOUT YOUR PROJECT</h4>
        <div className="grid grid-cols-1 gap-6 mt-6 sm:grid-cols-2 md:grid-cols-3">
          <a href="#" className="flex flex-col items-center px-4 py-3 text-gray-700 rounded-md hover:bg-yellow-200">
            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path
                fill-rule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clip-rule="evenodd"
              />
            </svg>

            <span className="mt-2">121 Street, Zone de captage, DK, Senegal</span>
          </a>

          <a href="#" className="flex flex-col items-center px-4 py-3 text-gray-700 rounded-md hover:bg-yellow-200">
            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>

            <span className="mt-2">+221 33 855 90 49</span>
          </a>

          <a href="#" className="flex flex-col items-center px-4 py-3 text-gray-700 rounded-md hover:bg-yellow-200 ">
            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>

            <span className="mt-2">societe.ingequip@gmail.com</span>
          </a>
        </div>

        <form className="mt-6 ">
          <div className="items-center gap-4 md:flex">
            <div className="w-full">
              <label className="block mb-2 text-sm font-medium text-gray-600 ">Name</label>

              <input
                className="block w-full px-4 py-2 text-gray-700 bg-gray-200 border border-gray-300 rounded-md focus:border-yellow-500 focus:outline-none focus:ring"
                type="text"
              />
            </div>

            <div className="w-full mt-4 md:mt-0">
              <label className="block mb-2 text-sm font-medium text-gray-600 ">E-mail</label>

              <input
                className="block w-full px-4 py-2 text-gray-700 bg-gray-200 border border-gray-300 rounded-md focus:border-yellow-500 focus:outline-none focus:ring"
                type="email"
              />
            </div>
          </div>
          <div className="w-full mt-4">
            <label className="block mb-2 text-sm font-medium text-gray-600 ">Message</label>

            <textarea className="block w-full h-40 py-2 text-gray-700 bg-gray-200 border border-gray-300 rounded-md focus:border-yellow-500 focus:outline-none focus:ring"></textarea>
          </div>
          <div className="flex justify-center mt-6">
            <button className="px-4 py-2 font-black text-gray-900 transition-colors duration-200 transform bg-yellow-200 rounded-md hover:bg-yellow-100 focus:outline-none focus:bg-yellow-100">
              Contact us
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact
