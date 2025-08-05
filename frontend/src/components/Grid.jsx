import React from 'react'
import StatCards from './StatCards'

const Grid = () => {
  return (
     <div className="px-4 grid gap-3 grid-cols-12">
      <StatCards />
      {/* <ActivityGraph /> */}
      {/* <UsageRadar /> */}
      {/* <RecentTransactions /> */}
    </div>
  )
}

export default Grid