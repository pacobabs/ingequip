const Work = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="px-4 py-8 mx-auto">
        <div className="flex flex-col items-center w-full mb-4 text-center">
          <h1 className="text-gray-900">OUR WORK</h1>
          <span className="w-16 h-1 bg-yellow-500 rounded-full"></span>
          <h2 className="tracking-widest text-yellow-600 title-font">WE TAKE PRIDE IN OUR WORK</h2>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="p-4 md:w-1/3">
            <div className="flex flex-col h-full p-4 bg-gray-100 rounded-lg">
              <div className="flex flex-col items-center">
                <img
                  loading="lazy"
                  className="object-cover object-center rounded"
                  alt="hero"
                  src="https://demo.themewinter.com/html/cornike/construction/images/projects/project7.jpg"
                />
                <h2 className="text-lg font-medium text-yellow-900 title-font">FUTURE PROOFING HOSPITALS</h2>
              </div>
              <div className="flex-grow">
                <p className="text-base leading-relaxed">
                  Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice
                  poutine.
                </p>
              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/3">
            <div className="flex flex-col h-full p-4 bg-gray-100 rounded-lg">
              <div className="flex flex-col items-center">
                <img
                  loading="lazy"
                  className="object-cover object-center rounded"
                  alt="hero"
                  src="https://demo.themewinter.com/html/cornike/construction/images/projects/project1.jpg"
                />
                <h2 className="text-lg font-medium text-yellow-900 title-font">JOY HOTEL & CASINO</h2>
              </div>
              <div className="flex-grow">
                <p className="text-base leading-relaxed">
                  Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice
                  poutine.
                </p>
              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/3">
            <div className="flex flex-col h-full p-4 bg-gray-100 rounded-lg">
              <div className="flex flex-col items-center">
                <img
                  loading="lazy"
                  className="object-cover object-center rounded"
                  alt="hero"
                  src="https://demo.themewinter.com/html/cornike/construction/images/projects/project9.jpg"
                />
                <h2 className="text-lg font-medium text-yellow-900 title-font">HIGH TOWN BUILDINGS</h2>
              </div>
              <div className="flex-grow">
                <p className="text-base leading-relaxed">
                  Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice
                  poutine.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Work
