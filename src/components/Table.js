import React from 'react'
import PropTypes from 'prop-types';

function Table({ cols, data }) {

  return (
    <table className='instrument-table'>
      <thead>
        <tr>
          {cols.map((col) => <th key={col}>{col.toUpperCase()}</th>)}
        </tr>
      </thead>
      <tbody>
        {data.map((row) =>
          <tr key={row.ticker} className={`asset-class-${row.assetClass.toLowerCase()}`}>
            <td>{row.ticker}</td>
            <td className={`${row.price < 0 ? 'negative-price' : 'positive-price'}`}>{row.price}</td>
            <td>{row.assetClass}</td>
          </tr>)}
      </tbody>
    </table>
  )
}

Table.propTypes = {
  cols: PropTypes.arrayOf(PropTypes.string).isRequired,
  data: PropTypes.array.isRequired
};

export default Table;