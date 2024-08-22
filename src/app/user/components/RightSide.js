import React, { useState } from 'react';

const RightSide = ({ offers }) => {
  const offersArray = Array.isArray(offers) ? offers : [];

  if (offersArray.length === 0) {
    return <div>No offers set by this company.</div>;
  }

  return (
    <div className="w-full md:w-3/3 p-4">
      <h2 className="text-2xl font-bold mb-6">Verified Coupons</h2>
      <div className="space-y-4">
        {offersArray.map((offer, index) => (
          <OfferCard key={index} offer={offer} />
        ))}
      </div>
    </div>
  );
};

const OfferCard = ({ offer }) => {
  const [showCode, setShowCode] = useState(false);

  const handleButtonClick = () => {
    setShowCode(true);
    if (!showCode) {
      try {
        // Ensure the link has a proper scheme (http or https)
        let link = offer.offer_link1;
        if (!link.startsWith('http://') && !link.startsWith('https://')) {
          link = 'https://' + link;
        }

        // Parse the URL and extract the domain
        const url = new URL(link);
        const domain = url.hostname;

        // Open the domain in a new tab
        window.open(`https://${domain}`, '_blank');
      } catch (error) {
        console.error('Invalid URL:', offer.offer_link1);
      }
    }
  };

  return (
    <div
      className={`bg-white p-6 rounded-lg shadow-md flex items-center justify-between border-b border-gray-200`}
    >
      <div className="flex items-center space-x-4">
        <div className="flex flex-col items-center justify-center bg-purple-100 text-purple-600 font-bold text-lg p-4 rounded">
          <span className="text-2xl">{offer.offer_title}</span>
          {/* <span className="text-sm">{offer.offer_description}</span> */}
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-1">{offer.offer_title}</h3>
          <p className="text-gray-600 mb-2">{offer.offer_description}</p>
          <p className="text-sm text-gray-500 flex items-center">
            <span className="mr-1">✔️</span> Verified coupon
          </p>
        </div>
      </div>
      <div className="relative">
        <button
          onClick={handleButtonClick}
          className="bg-purple-600 w-32 h-13 text-white text-sm font-semibold px-2 py-2 rounded-full absolute right-8 top-12 hover:bg-purple-700 border-dashed border-2 border-gray-200 shadow-md transform hover:scale-105 transition-transform"
        >
          {showCode ? offer.offer_code : 'Show This Code'}
        </button>
      </div>
    </div>
  );
};

export default RightSide;
