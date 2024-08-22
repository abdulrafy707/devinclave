'use client';

import React, { useEffect, useState } from 'react';
import CouponCard from './Couponcards';

// Main Component to Fetch and Display Companies and Offers
const CompanyList = () => {
  const [companies, setCompanies] = useState([]);
  const [topDiscounts, setTopDiscounts] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCompaniesAndOffers = async () => {
      try {
        const [companyResponse, offersResponse] = await Promise.all([
          fetch('/api/company'),
          fetch('/api/offers')
        ]);
  
        if (!companyResponse.ok || !offersResponse.ok) {
          throw new Error('Failed to fetch companies or offers');
        }
  
        const companyData = await companyResponse.json();
        const offersData = await offersResponse.json();
  
        setCompanies(companyData);
  
        // Calculate top discounts
        const discounts = {};
        offersData.forEach(offer => {
          // Adjusted regular expression to capture the first number in the title, followed by "% Off"
          const discountMatch = offer.offer_title.match(/(\d+)\s?%/);

          if (discountMatch) {
            const discount = parseInt(discountMatch[1], 10);
            const companyId = offer.comp_id;
            if (!discounts[companyId] || discounts[companyId] < discount) {
              discounts[companyId] = discount;
            }
          }
        });
  
        const discountWithFallback = {};
        companyData.forEach(company => {
          discountWithFallback[company.id] = discounts[company.id] || 'Not Available';
        });
  
        setTopDiscounts(discountWithFallback);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Failed to load data. Please try again later.');
      } finally {
        setLoading(false);
      }
    };
  
    fetchCompaniesAndOffers();
  }, []);
  
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="grid bg-white grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 px-24">
      {companies.map(company => (
        <CouponCard
          key={company.id}
          company={company}
          topDiscount={topDiscounts[company.id]}
        />
      ))}
    </div>
  );
};

export default CompanyList;
