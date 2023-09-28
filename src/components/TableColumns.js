import React from 'react'
import PropTypes from 'prop-types';

export const TableColumns = ({ cols }) => {
  return (
    <thead>
      <tr>
        {cols.map((col) => <th key={col}>{col.toUpperCase()}</th>)}
      </tr>
    </thead>
  )
}

TableColumns.propTypes = {
  cols: PropTypes.arrayOf(PropTypes.string).isRequired
};
