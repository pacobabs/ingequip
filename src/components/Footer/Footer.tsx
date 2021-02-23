import { ReactNode } from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 body-font">
      <div className="flex flex-col flex-wrap px-4 py-24 mx-auto md:items-center lg:items-start md:flex-row md:flex-nowrap">
        <div className="flex-shrink-0 mx-auto text-center md:mx-0 md:text-left">
          <img src="/logo.png" alt="logo" className="w-20 mb-16 md:ml-8" />
        </div>
        <div className="flex flex-wrap flex-grow text-center md:pl-20 md:mt-0 md:text-left">
          <div className="w-full px-4 lg:w-1/4 md:w-1/2">
            <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-200 title-font">ABOUT</h2>
            <p className="mb-10 text-gray-400 font-inter">
              Far far away, behind the word mountains, far from the countries.
            </p>
          </div>
          <div className="w-full px-4 lg:w-1/4 md:w-1/2">
            <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-200 title-font">LINKS</h2>
            <ul className="mb-10 ">
              <li>
                <span className="mr-0.5 text-2xl text-gray-400">›</span>
                <a className="text-gray-400 hover:text-gray-300">Home</a>
              </li>
              <li>
                <span className="mr-0.5 text-2xl text-gray-400">›</span>
                <a className="text-gray-400 hover:text-gray-300">Services</a>
              </li>
              <li>
                <span className="mr-0.5 text-2xl text-gray-400">›</span>
                <a className="text-gray-400 hover:text-gray-300">Projects</a>
              </li>
              <li>
                <span className="mr-0.5 text-2xl text-gray-400">›</span>
                <a className="text-gray-400 hover:text-gray-300">Contact</a>
              </li>
            </ul>
          </div>
          <div className="w-full px-4 lg:w-1/4 md:w-1/2">
            <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-200 title-font">SERVICES</h2>
            <ul className="mb-10 ">
              <li>
                <span className="mr-0.5 text-2xl text-gray-400">›</span>
                <a className="text-gray-400 hover:text-gray-300">Customer Services</a>
              </li>
              <li>
                <span className="mr-0.5 text-2xl text-gray-400">›</span>
                <a className="text-gray-400 hover:text-gray-300">Prompt Delivery</a>
              </li>
              <li>
                <span className="mr-0.5 text-2xl text-gray-400">›</span>
                <a className="text-gray-400 hover:text-gray-300">Reliable Equipment</a>
              </li>
              <li>
                <span className="mr-0.5 text-2xl text-gray-400">›</span>
                <a className="text-gray-400 hover:text-gray-300">New Heavy Equipment</a>
              </li>
            </ul>
          </div>
          <div className="w-full px-4 lg:w-1/4 md:w-1/2">
            <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-200 title-font">HAVE A QUESTION?</h2>
            <ul className="mb-10 ">
              <li>
                <a
                  href="#"
                  className="flex justify-center md:justify-start -mt-1.5 md:-ml-3 text-gray-400 rounded-md hover:text-gray-300"
                >
                  <svg
                    className="w-5 h-5 mt-1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clip-rule="evenodd"
                    />
                  </svg>

                  <span className="mt-2">121 Street, Zone de captage, DK, Senegal</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex justify-center text-gray-400 rounded-md md:justify-start md:-ml-3 hover:text-gray-300"
                >
                  <svg
                    className="w-3 h-3 mt-2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>

                  <span className="mt-2">+221 33 855 90 49</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex justify-center text-gray-400 rounded-md md:justify-start md:-ml-3.5 hover:text-gray-300"
                >
                  <svg
                    className="w-4 h-4 mt-2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>

                  <span className="mt-2">societe.ingequip@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-gray-800">
        <div className="container flex flex-col flex-wrap px-5 py-4 mx-auto sm:flex-row">
          <p className="text-sm text-center text-gray-500 sm:text-left">
            © 2020 Ingequip —
            <a
              href="https://twitter.com/knyttneve"
              rel="noopener noreferrer"
              className="ml-1 text-gray-400"
              target="_blank"
            >
              @pacobabs
            </a>
          </p>
          <span className="inline-flex justify-center mt-2 sm:ml-auto sm:mt-0 sm:justify-start">
            <a className="text-gray-500">
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="0"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
