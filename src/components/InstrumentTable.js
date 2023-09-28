import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { TableColumns } from './TableColumns';
import TableBody from './TableBody';
import SortBy from './SortBy';
import { sortByAssetClass, sortByString, sortByNumber } from '../helper'

function IntrumentTable({ data }) {

  const [tableData, setTableData] = useState(sortByString(data, 'ticker'))

  const cols = ['Ticker', 'Price', "Asset Class"]

  const handleSortBy = (selectedOption) => {
    let result = []
    switch (selectedOption) {
      case 'Asset Class':
        const values = ['Equities', 'Macro', 'Credit']
        result = sortByAssetClass(data, values)
        break;
      case 'Ticker':
        result = sortByString(data, 'ticker')
        break;
      case 'Price':
        result = sortByNumber(data, 'price', true)
        break;
    }

    setTableData([...result])
  }

  return (
    <div className='instrument-table-container'>
      <h1>Financial Intruments</h1>
      <SortBy options={['Ticker', 'Price', 'Asset Class']} defaultSelected='Ticker' onChange={handleSortBy} />
      <table className='instrument-table'>
        <TableColumns cols={cols} />
        <TableBody tableData={tableData} />
      </table>
    </div>
  )
}

IntrumentTable.propTypes = {
  data: PropTypes.array.isRequired
};

export default IntrumentTable;