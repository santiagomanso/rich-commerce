const NetworthImpacts = ({
  name,
  getPlayerNetworth,
  getTotals,
  getBudgetTotal,
}) => {
  return (
    <>
      {' '}
      <h2 className='mt-8 font-semibold text-gray-800'>NETWORTH IMPACTS</h2>
      <div className='flex flex-col gap-y-3 divide-y-2 divide-gray-400 bg-white dark:bg-gray-700/50 p-4 rounded'>
        <span className='flex justify-between'>
          <span>Player</span>
          <span className='font-semibold'>{name}</span>
        </span>
        <span className='flex justify-between'>
          <span>Networth</span>
          <span>${getPlayerNetworth()}</span>
        </span>
        <span className='flex justify-between'>
          <span>Cart cost</span>
          <span>{getTotals()} $</span>
        </span>
        <span className='flex items-center justify-between text-xl font-semibold'>
          <span className='flex flex-col'>
            <span>Cart represents %</span> <span>of networth</span>
          </span>
          <span>{getBudgetTotal(getPlayerNetworth())}%</span>
        </span>
      </div>
    </>
  )
}

export default NetworthImpacts
