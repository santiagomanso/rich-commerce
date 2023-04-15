import CountryDropdown from '../dropdown/CountryDropdown'
import { useContext } from 'react'
import { LanguageContext } from '../../context/LanguageContext'

const AverageAnnualIncome = ({
  setAnnualIncome,
  annualIncome,
  getTotals,
  getBudgetTotal,
  getYearsToCart,
}) => {
  const { text, language } = useContext(LanguageContext)
  return (
    <>
      <div className='flex gap-1 items-baseline'>
        <h2 className='mt-5 font-semibold text-gray-800 uppercase'>
          {text.averageAnnualIncome}
        </h2>
      </div>
      <div className='flex flex-col gap-y-3 divide-y-2 divide-gray-400 bg-white dark:bg-gray-700 lg:dark:bg-gray-700/50 p-4 rounded'>
        <span className='flex justify-between'>
          <span>{text.country}</span>
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
          <span>{text.annualIncomePerCapita}</span>
          <span>${annualIncome}</span>
        </span>
        <span className='flex justify-between'>
          <span>{text.cartCost}</span>
          <span>${getTotals().toLocaleString()}</span>
        </span>
        <span className='flex justify-between'>
          <span>{text.cartIsAnnualIncome}</span>
          <span>{getBudgetTotal(annualIncome).toLocaleString()}%</span>
        </span>
        <span className='flex items-center justify-between text-xl font-semibold'>
          <span className='flex flex-col text-base md:text-xl'>
            <span>{text.yearsAvg1}</span>
            <span>{text.yearsAvg2}</span>
          </span>
          <span className='text-base md:text-xl'>
            {getYearsToCart(annualIncome).toLocaleString()} {text.years}
          </span>
        </span>
      </div>
    </>
  )
}

export default AverageAnnualIncome
