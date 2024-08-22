// components/HeroSection.js

export default function HeroSection() {
    return (
      <section className="bg-[#2D2D6B] text-white">
        <div className="container mx-auto flex flex-col-reverse md:flex-row items-center py-12">
          {/* Text Content */}
          <div className="md:w-1/2">
            <h1 className="text-4xl font-bold mb-4">
              ELEVATE YOUR DIGITAL PRESENCE WITH OUR EXPERTISE
            </h1>
            <p className="text-lg mb-6">
              Div Enclave is a full-service digital marketing agency that specializes in promoting your business listing to the top of the Google search engine. We achieve this through website development, (SEO) search engine optimization, video editing, social media marketing, content writing, and more.
            </p>
            <a
              href="#"
              className="inline-block bg-yellow-500 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-yellow-600"
            >
              GET FREE CONSULTANCY
            </a>
          </div>
  
          {/* Image Content */}
          <div className="md:w-1/2 flex justify-center mb-6 md:mb-0">
            <div className="relative w-full">
              <div className="bg-[#2D2D6B] rounded-full overflow-hidden">
                <img
                  src="/gentelman.png"
                  alt="Businessman with Laptop"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  