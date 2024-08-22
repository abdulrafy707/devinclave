// components/Footer.js

export default function Footer() {
    return (
      <footer className="bg-[#2D2D6B] text-white py-12">
        <div className="container mx-auto px-6">
          {/* Project Form Section */}
          <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center mb-12">
            <div className="md:w-2/3">
              <h2 className="text-3xl font-bold mb-4">Have a project in mind?</h2>
              <p className="text-xl text-yellow-500 mb-8">Let’s get to work.</p>
              <form className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="p-3 rounded-md text-black"
                />
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="p-3 rounded-md text-black"
                />
                <select className="p-3 rounded-md text-black">
                  <option>Looking for help in</option>
                  <option>Web Development</option>
                  <option>Content Writing</option>
                  <option>SEO</option>
                  <option>Graphic Designing</option>
                  <option>Video Editing</option>
                </select>
                <input
                  type="text"
                  placeholder="Enter a brief summary of your project"
                  className="p-3 rounded-md text-black"
                />
                <button
                  type="submit"
                  className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-md"
                >
                  SEND
                </button>
              </form>
            </div>
          </div>
  
          {/* Footer Links Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Categories */}
            <div>
              <h3 className="text-xl font-bold mb-4">Categories</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/pages/webdevelopment" className="text-gray-300 hover:text-yellow-500">
                    Web Development
                  </a>
                </li>
                <li>
                  <a href="/pages/social_media_marketing" className="text-gray-300 hover:text-yellow-500">
                    Social Media Marketing
                  </a>
                </li>
                <li>
                  <a href="/pages/content_writing" className="text-gray-300 hover:text-yellow-500">
                    Content Writing
                  </a>
                </li>
                <li>
                  <a href="/pages/seo" className="text-gray-300 hover:text-yellow-500">
                    SEO
                  </a>
                </li>
                <li>
                  <a href="/pages/graphic_designing" className="text-gray-300 hover:text-yellow-500">
                    Graphic Designing
                  </a>
                </li>
                <li>
                  <a href="/pages/viedo_editing" className="text-gray-300 hover:text-yellow-500">
                    Video Editing
                  </a>
                </li>
              </ul>
            </div>
  
            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/pages/aboutus" className="text-gray-300 hover:text-yellow-500">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/pages/contactus" className="text-gray-300 hover:text-yellow-500">
                    Contact Us
                  </a>
                </li>
                {/* <li>
                  <a href="#" className="text-gray-300 hover:text-yellow-500">
                    Site Map
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-yellow-500">
                    Blog
                  </a>
                </li> */}
                <li>
                  <a href="/pages/inspire_me" className="text-gray-300 hover:text-yellow-500">
                    PORTFOLIO
                  </a>
                </li>
              </ul>
            </div>
  
            {/* Contact */}
            <div>
              <h3 className="text-xl font-bold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="text-gray-300">
                  <span className="inline-block mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 8.25v12.75a2.25 2.25 0 01-2.25 2.25h-15A2.25 2.25 0 012.25 21V8.25M3 8.25L12 3l9 5.25M8.25 15h7.5M8.25 19.5h7.5"
                      />
                    </svg>
                  </span>
                  Email: info@divenclave.com
                </li>
                <li className="text-gray-300">
                  <span className="inline-block mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.5 6.75h3.75m0 0v3.75m0-3.75L12 15l-3 3"
                      />
                    </svg>
                  </span>
                  Address: 1209 S Big Bend Blvd #179110, Richmond Heights, MO 63117, United States
                </li>
              </ul>
            </div>
          </div>
  
          {/* Bottom Section */}
          <div className="mt-12 border-t border-gray-700 pt-4">
            <p className="text-gray-500 text-center">
              © div enclave 2024. All Rights Reserved |{' '}
              <a href="#" className="text-yellow-500 hover:text-yellow-600">
                Privacy Policy
              </a>{' '}
              |{' '}
              <a href="#" className="text-yellow-500 hover:text-yellow-600">
                Term of use
              </a>
            </p>
          </div>
        </div>
      </footer>
    );
  }
  