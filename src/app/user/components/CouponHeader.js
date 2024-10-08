'use client'
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import React, { useEffect, useState } from 'react';

const CouponHeader = ({ companyId }) => {
  const [company, setCompany] = useState(null);

  useEffect(() => {
    const fetchCompany = async () => {
      try {
        const response = await fetch(`/api/company/${companyId}`);
        const data = await response.json();
        setCompany(data);
      } catch (error) {
        console.error('Error fetching company data:', error);
      }
    };

    if (companyId) {
      fetchCompany();
    }
  }, [companyId]);

  if (!company) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-purple-600 mb-20 p-6 text-white justify-center flex items-center h-36 w-screen">
      <div className="absolute left-64 h-36 w-36 flex justify-center items-center top-40 bg-white rounded-full ">
        <img
          src={`https://divenclave.com/uploads/${company.comp_logo}`} // Use the company's logo
          alt={company.com_title}
          className="h-36 w-36 object-contain absolute rounded-full border-4 border-white"
        />
      </div>

      <div className="ml-6">
        <h1 className="text-3xl font-bold">{company.com_title} Coupon Codes</h1>
        <p className="text-lg flex itmes-center">
          {company.com_title} Coupon Codes for {new Date().getFullYear()} Verified & Tested
          <CheckCircleIcon className='h-6 pt-1'/>
        </p>
      </div>
    </div>
  );
};

export default CouponHeader;
