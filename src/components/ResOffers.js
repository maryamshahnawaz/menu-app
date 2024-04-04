import React from 'react';

const ResOffers = ({ resOffers }) => {
  return (
    <>
      <h3 className='text-center text-3xl m-6 '>Offers</h3>
      <div className='flex flex-wrap mx-auto container'>
        {resOffers.map((offer) => {
          const { header, couponCode, description } = offer.info;
          return (
            <div className='m-4 p-4 bg-slate-100 rounded-lg shadow-md'>
              <h3 className='text-lg font-semibold mb-2'>{header}</h3>
              <div className='flex items-center'>
                <p className='text-gray-600 mr-2'>{couponCode}</p>
                <p className='text-gray-700'>{description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ResOffers;
