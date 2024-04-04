import { cdn_res_img } from '../utils/Constants';
export const RestaurantCard = (props) => {
  const {
    name,
    cuisines,
    avgRatingString,
    sla,
    cloudinaryImageId,
    id,
    costForTwo,
  } = props.resData.info;
  return (
    <div
      className='w-[250px] m-4 p-4 rounded-lg '
      style={{ backgroundColor: '#f0f0f0' }}
      id={id}
    >
      <img
        className='rounded-lg w-full'
        src={cdn_res_img + cloudinaryImageId}
        alt='res-logo'
      />
      <h3 className='font-bold text-lg'>{name}</h3>
      <p className='text-sm mb-2'>
        {cuisines ? cuisines?.join(', ') : 'Default Restaurant cuisines'}
      </p>
      <div className='flex justify-between items-center mb-2'>
        <span className='text-xs text-gray-600'>{avgRatingString} Rating</span>
        <span className='text-xs text-gray-600'>
          {sla.deliveryTime} delivery Time
        </span>
      </div>
      <p className='text-sm'>Cost for Two: {costForTwo}</p>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  //return new component with promoted label
  return (props) => {
    return (
      <div>
        <label className='absolute bg-black text-white m-2 p-2 rounded-lg'>
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

// export default RestaurantCard;
