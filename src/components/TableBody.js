import React from 'react'
import PropTypes from 'prop-types';

function TableBody({ tableData }) {
  return (
    <tbody>
      {tableData.map((row) =>
        <tr key={row.ticker} className={`asset-class-${row.assetClass.toLowerCase()}`}>
          <td>{row.ticker}</td>
          <td className={`${row.price < 0 ? 'negative-price' : 'positive-price'}`}>{row.price}</td>
          <td>{row.assetClass}</td>
        </tr>)}
    </tbody>
  )
}

TableBody.propTypes = {
  tableData: PropTypes.array.isRequired
};

export default TableBody;