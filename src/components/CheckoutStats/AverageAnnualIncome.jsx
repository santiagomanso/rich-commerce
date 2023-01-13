import CountryDropdown from '../CountryDropdown/CountryDropdown'

const AverageAnnualIncome = ({
  setAnnualIncome,
  annualIncome,
  getTotals,
  getBudgetTotal,
  getYearsToCart,
}) => {
  return (
    <>
      <div className='flex gap-1 items-baseline'>
        <h2 className='mt-8 font-semibold text-gray-800'>
          AVERAGE ANNUAL INCOME
        </h2>
      </div>
      <div className='flex flex-col gap-y-3 divide-y-2 divide-gray-400 bg-white dark:bg-gray-700/50 p-4 rounded'>
        <span className='flex justify-between'>
          <span>Country</span>
          {/* check themeSwitcher component props false */}
          <CountryDropdown
            setAnnualIncome={setAnnualIncome}
            names
            ulOptions='w-56'
            liOptions='p-2'
            imgOptions='w-7 h-7'
            imgOptions2='w-10 h-10'
          />
        </span>

        <span className='flex justify-between'>
          <span>Annual Income per capita</span>
          <span>${annualIncome}</span>
        </span>
        <span className='flex justify-between'>
          <span>Cart cost</span>
          <span>{getTotals()} $</span>
        </span>
        <span className='flex justify-between'>
          <span>Cart is % of annual income</span>
          <span>{getBudgetTotal(annualIncome)}%</span>
        </span>
        <span className='flex items-center justify-between text-xl font-semibold'>
          <span className='flex flex-col'>
            <span>Years avg. worker</span>
            <span>needs to afford cart</span>
          </span>
          <span>{getYearsToCart(annualIncome)} years</span>
        </span>
      </div>
    </>
  )
}

export default AverageAnnualIncome
