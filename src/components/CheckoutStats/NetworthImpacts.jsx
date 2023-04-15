import { useContext } from 'react'
import { LanguageContext } from '../../context/LanguageContext'

const NetworthImpacts = ({
  name,
  getPlayerNetworth,
  getTotals,
  getBudgetTotal,
}) => {
  const { text, language } = useContext(LanguageContext)
  return (
    <>
      <h2 className='mt-5 font-semibold text-gray-800 uppercase'>
        {text.networthImpacts}
      </h2>
      <div className='flex flex-col gap-y-3 divide-y-2 divide-gray-400 bg-white dark:bg-gray-700 lg:dark:bg-gray-700/50 p-4 rounded'>
        <span className='flex justify-between'>
          <span>{text.player}</span>
          <span className='font-semibold'>{name}</span>
        </span>
        <span className='flex justify-between'>
          <span>{text.networth}</span>
          <span>$ {getPlayerNetworth().toLocaleString()}</span>
        </span>
        <span className='flex justify-between'>
          <span>{text.cartCost}</span>
          <span>$ {getTotals().toLocaleString()}</span>
        </span>
        <span className='flex items-center justify-between text-xl font-semibold'>
          <span className='flex flex-col'>
            <span>{text.cartIsNetworth1}</span>
            <span>{text.cartIsNetworth2}</span>
          </span>
          <span>{getBudgetTotal(getPlayerNetworth())}%</span>
        </span>
      </div>
    </>
  )
}

export default NetworthImpacts
