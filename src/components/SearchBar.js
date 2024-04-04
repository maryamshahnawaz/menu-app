import React from 'react';

const SearchBar = ({ handleSearch, inputValue, setInputValue }) => {
  return (
    <div className='flex'>
      <form onSubmit={handleSearch}>
        <input
          className='border-black border-solid border-2 p-2 rounded-lg'
          type='text'
          value={inputValue}
          placeholder='Search for Restaurant'
          onChange={(e) => {
            setInputValue(e.target.value);
            console.log(inputValue);
          }}
        />
        <button
          type='submit'
          className='bg-black text-white  rounded-lg border-2 border-black p-2 m-2 '
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
