const Header = () => {
  return (
    <header className="text-gray-100 body-font">
      <div
        style={{
          backgroundImage: 'url(https://preview.colorlib.com/theme/wilcon/images/bg_1.jpg)'
        }}
        className="flex flex-wrap items-center justify-center h-screen p-4 mx-auto bg-center bg-cover"
      >
        <img src="/logo.png" alt="logo" className="z-50 w-24 mb-0.5 -mt-1" />
        <nav className="z-50 flex flex-wrap items-center justify-center text-base md:ml-auto">
          <a className="mr-5 font-black text-yellow-300 hover:text-yellow-400">HOME</a>
          <a className="mr-5 hover:text-yellow-400">ABOUT</a>
          <a className="mr-5 hover:text-yellow-400">SERVICES</a>
          <a className="mr-5 hover:text-yellow-400 font-inter">PROJECTS</a>
          <a className="mr-5 hover:text-yellow-400">CONTACT</a>
        </nav>
        <div className="flex items-center justify-center w-full h-full -mt-12 bg-gray-900 bg-opacity-50 md:-mt-16">
          <div className="text-center">
            <h1 className="text-2xl font-black tracking-widest text-white uppercase md:text-3xl">
              WE CAN HELP WITH <span className="text-yellow-400">PROJECTS</span>
            </h1>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
