const History = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container flex flex-col items-center px-4 py-8 mx-auto md:flex-row">
        <div className="w-5/6 mb-10 lg:max-w-lg lg:w-full md:w-1/2 md:mb-0">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="https://preview.colorlib.com/theme/wilcon/images/about-3.jpg"
          />
        </div>
        <div className="flex flex-col items-center text-center lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 md:items-start md:text-left">
          <h1 className="text-gray-900">OUR HISTORY</h1>
          <span className="inline-flex w-16 h-1 bg-yellow-500 rounded-full"></span>
          <p className="mb-8 leading-relaxed font-inter">
            Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote
            bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard
            chambray.
          </p>
        </div>
      </div>
    </section>
  )
}

export default History
