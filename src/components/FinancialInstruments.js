import React, { useState } from 'react'
import PropTypes from 'prop-types';
import SortBy from './SortBy';
import { sortByAssetClass, sortByString, sortByNumber } from '../helpers/helper'
import Table from './Table';

function FinancialInstruments({ data }) {

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
      default:
        result = []
    }

    setTableData([...result])
  }

  return (
    <div className='instrument-table-container'>
      <h1>Financial Instruments</h1>
      <SortBy options={['Ticker', 'Price', 'Asset Class']} defaultSelected='Ticker' onChange={handleSortBy} />
      {tableData && <Table cols={cols} data={tableData} />}
    </div>
  )
}

FinancialInstruments.propTypes = {
  data: PropTypes.array.isRequired
};

export default FinancialInstruments;