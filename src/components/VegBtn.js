import React, { useState } from 'react';

const VegBtn = ({ vegBtn }) => {
  // State to keep track of the currently selected option
  const [selectedOption, setSelectedOption] = useState(null);

  const handleButtonClick = (label) => {
    // Toggle selection if the same button is clicked again
    if (selectedOption === label) {
      setSelectedOption(null);
    } else {
      // Set the selected option
      setSelectedOption(label);
      // Handle button click based on whether it's Veg or Non-Veg
      if (label === 'Pure Veg') {
        console.log('Restaurant is Pure Veg');
        // Deselect Non Veg if Pure Veg is selected
        setSelectedOption(null);
      } else if (label === 'Non Veg') {
        console.log('Restaurant is Non Veg');
        // Deselect Pure Veg if Non Veg is selected
        setSelectedOption(null);
      }
    }
  };

  return (
    <div>
      {vegBtn.facetInfo.map((facet) => (
        <button
          key={facet.id}
          onClick={() => handleButtonClick(facet.label)}
          // Highlight the button if it's selected
          style={{
            backgroundColor:
              selectedOption === facet.label ? 'lightgreen' : 'transparent',
          }}
        >
          {facet.label}
        </button>
      ))}
    </div>
  );
};

export default VegBtn;
