 
const Banner = () => {
    return (
        <section className="bg-Banner_img relative  text-white">
       <div className="bg-Overlay bg-opacity-50 ">
       <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
          <div className="mx-auto max-w-3xl text-center">
            <h1
              className=" text-white bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
            >
              YOU’RE UNIQUE.YOUR WEBSITE SHOULD BE TOO
      
              <span className="sm:block"> Increase Conversion. </span>
            </h1>
      
            <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
            A beautiful website passionately crafted for your small business.  Our Digital Agency development has changed the way brands and businesses use technology for growing business. 
            </p>
      
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                className="block w-full rounded-lg border-common_color1 hover:bg-common_color1 px-12 py-3 text-sm font-medium text-white hover:bg-transparent focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                href="#"
              >
                Get Free Quoto
              </a>
      
              <a
                className="block w-full rounded-lg border-common_color1 px-12 py-3 text-sm font-medium text-white hover:bg-common_color1 focus:outline-none focus:ring sm:w-auto"
                href="#"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
       </div>
      </section>
    );
};

export default Banner;