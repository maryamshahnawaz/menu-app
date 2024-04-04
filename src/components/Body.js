import React, { useState, useEffect } from 'react';

import { RestaurantCard, withPromotedLabel } from './RestaurantCard';

import Shimmer from './Shimmer';
import SearchBar from './SearchBar';
import { Link } from 'react-router-dom';
import { api, home_res_api } from '../utils/Constants';
import useOnlineStatus from '../utils/useOnlineStatus';
// import VegBtn from './VegBtn';

const Body = () => {
  const [resList, setResList] = useState([]);
  const [filterValue, setFilterValue] = useState([]);
  const [inputValue, setInputValue] = useState('');
  // const [vegBtn, setVegBtn] = useState([]);

  const RestaurantPromotedCard = withPromotedLabel(RestaurantCard);

  const fetchData = async () => {
    try {
      const data = await fetch(home_res_api);
      const jsonData = await data.json();

      if (jsonData?.data?.cards) {
        const restaurantsData2 =
          jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants;
        console.log();
        const restaurantsData3 =
          jsonData?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants;
        const restaurantsData4 =
          jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants;
        // setVegBtn(jsonData?.data?.cards[1].card.card.facetList[4]);
        console.log(restaurantsData2, restaurantsData3, restaurantsData4);
        setResList(
          restaurantsData2
            ? restaurantsData2
            : restaurantsData3
            ? restaurantsData3
            : restaurantsData4
            ? restaurantsData4
            : console.log('API is not working')
        );
        console.log(resList);
        setFilterValue(
          restaurantsData2
            ? restaurantsData2
            : restaurantsData3
            ? restaurantsData3
            : restaurantsData4
            ? restaurantsData4
            : console.log('API is not working')
        );
        console.log(filterValue);
      } else {
        fetchMockData();
      }
    } catch (error) {
      console.error('Error fetching restaurant data:', error);
    }
  };

  const fetchMockData = async () => {
    try {
      const data = await fetch(api);
      const jsonData = await data.json();

      const restaurantsData =
        jsonData?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;

      // setVegBtn(jsonData?.data?.cards[1].card.card.facetList[4]);
      setResList(restaurantsData);
      setFilterValue(restaurantsData);
    } catch (error) {
      console.error('Error fetching restaurant data:', error);
    }
  };

  useEffect(() => {
    // it will be called when component will re-render
    // fetchData(setResList, setFilterValue);
    fetchData();
  }, []);

  // We are applying a filtering method on the original list of restaurants

  const handleSearch = (e) => {
    e.preventDefault();
    const filteredSearchList = resList.filter((res) => {
      return res.info.name.toLowerCase().includes(inputValue.toLowerCase());
    });
    setFilterValue(filteredSearchList);
  };

  // We are applying a filtering method on the original list of restaurants
  const handleTopRatedRes = () => {
    const filteredTopRatedRes = resList.filter((res) => {
      return res.info.avgRating > 4.3;
    });
    console.log(filteredTopRatedRes);
    setFilterValue(filteredTopRatedRes);
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return <h1>Please check your internet connection and try again</h1>;
  }
  return resList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className='body'>
      <div className='flex m-3 justify-center'>
        <SearchBar
          handleSearch={handleSearch}
          inputValue={inputValue}
          setInputValue={setInputValue}
        />
        <button
          className='bg-black text-white rounded-lg border-2 border-black p-2 my-2'
          onClick={handleTopRatedRes}
        >
          Top Rated Restaurants
        </button>
        <button className='bg-black text-white  rounded-lg border-2 border-black p-2 m-2'>
          Cost for Two
        </button>
        <button className='bg-black text-white  rounded-lg border-2 border-black p-2 m-2 '>
          delivery time
        </button>
      </div>
      {/* <VegBtn vegBtn={vegBtn} /> */}

      <div className='flex flex-wrap justify-center'>
        {filterValue.map((restaurant) => (
          <Link
            to={'/restaurantmenu/' + restaurant.info.id}
            key={restaurant.info.id}
          >
            {restaurant.info.sla.deliveryTime <= 25 ? (
              <RestaurantPromotedCard resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
