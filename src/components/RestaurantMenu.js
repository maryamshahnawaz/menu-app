import React, { useState, useEffect } from 'react';
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import { restaurantMenu, cdn_res_img } from '../utils/Constants';
import baseImage from '../assets/baseImage.jpeg';
import ResOffers from './ResOffers';

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [resName, setResName] = useState([]);
  const [resMenu, setResMenu] = useState([]);
  const [resOffers, setResOffers] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  // const resId = 50180;
  const fetchData = async () => {
    try {
      const url = restaurantMenu + resId;
      const response = await fetch(url);
      const data = await response.json();

      setResName(data.data.cards[0].card.card.text);
      const itemCards =
        data.data.cards[5].groupedCard.cardGroupMap.REGULAR.cards[2].card.card
          .itemCards;
      const categoryCards =
        data.data.cards[5].groupedCard.cardGroupMap.REGULAR.cards[1].card.card
          .itemCards;

      const offers =
        data.data.cards[3].card.card.gridElements.infoWithStyle.offers;
      setResOffers(offers);
      console.log(offers);

      if (itemCards) {
        setResMenu(itemCards);
        console.log(resMenu);
      } else {
        setResMenu(categoryCards);
        console.log(resMenu);
      }
    } catch (error) {
      console.log(error);
    }
  };
  {
    resMenu.length === 0 && !resName ? <Shimmer /> : null;
  }

  return (
    <div className='mx-auto container'>
      <h1 className='text-6xl font-medium mb-4 text-center'>{resName}</h1>
      <ResOffers resOffers={resOffers} />

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 gap-4'>
        {resMenu.map((menu) => (
          <div
            key={menu.card.info.id}
            className='bg-white rounded-lg shadow-lg overflow-hidden'
          >
            <img
              className='w-full h-32 object-cover'
              src={
                menu.card.info.imageId
                  ? cdn_res_img + menu.card.info.imageId
                  : baseImage
              }
              alt={menu.card.info.name}
            />
            <div className='p-4'>
              <h3 className='text-xl font-semibold mb-2'>
                {menu.card.info.name}
              </h3>
              <p className='text-gray-600 mb-2'>
                RS{' '}
                {menu.card.info.defaultPrice
                  ? menu.card.info.defaultPrice / 100
                  : menu.card.info.price / 100}
              </p>
              <p className='text-gray-600 mb-2'>{menu.card.info.category}</p>
              <p className='text-gray-700 mb-2'>{menu.card.info.description}</p>
              <p className='text-gray-700 mb-2'>
                Portion Size:{' '}
                {menu.card.info.itemAttribute?.portionSize || 'Not available'}
              </p>
              <p className='text-gray-700'>Ratings: {menu.card.ratings}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
