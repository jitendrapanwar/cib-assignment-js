import React, { useState } from 'react'
import PropTypes from 'prop-types';

function SortBy({ options, defaultSelected, onChange }) {
  const [selectedOption, setSelectedOption] = useState(defaultSelected)

  const hanldleOption = (evt) => {
    const value = evt.target.value;
    onChange && onChange(value)
    setSelectedOption(value)
  }

  return (
    <div className='sort-container'>
      <h5>Sort by</h5>
      <div className='sort-types'>
        {options.map(option => (
          <div className="radio" key={option}>
            <label>
              <input type="radio" value={option} checked={selectedOption === option} onChange={hanldleOption} />
              {option}
            </label>
          </div>
        ))}
      </div>
    </div>
  )

}

SortBy.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  defaultSelected: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};


export default SortBy;