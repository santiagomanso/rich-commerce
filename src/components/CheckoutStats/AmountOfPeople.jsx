import { useContext, useEffect } from 'react'
import { LanguageContext } from '../../context/LanguageContext'
import { countryList } from '../../data/countriesData'
//utility function to get networth as a full integer (without .)
import { getPlayerNetworth } from '../../utils/getPlayerNetworth'

const AmountOfPeople = ({ player }) => {
  const neededPeople = (income) => {
    const result = Math.floor(getPlayerNetworth(player.estWorthPrev) / income)
    return result.toLocaleString()
  }

  const { text } = useContext(LanguageContext)
  return (
    <>
      <h2 className='mt-8 font-semibold text-gray-800'>
        {text.howManyPeople1} {player.personName} {text.howManyPeople2}
      </h2>
      <div className='flex flex-col gap-y-3 divide-y-2 divide-gray-400 bg-white dark:bg-gray-700 lg:dark:bg-gray-700/50 p-4 rounded'>
        <span className='flex justify-between'>
          <span>{text.germany}</span>
          <span>
            {neededPeople(countryList[0].averageNetworthPerCapita)}{' '}
            {text.persons}
          </span>
        </span>
        <span className='flex justify-between'>
          <span>{text.usa}</span>
          <span>
            {neededPeople(countryList[1].averageNetworthPerCapita)}{' '}
            {text.persons}
          </span>
        </span>
        <span className='flex justify-between'>
          <span>{text.spain}</span>
          <span>
            {neededPeople(countryList[3].averageNetworthPerCapita)}{' '}
            {text.persons}
          </span>
        </span>
        <span className='flex justify-between'>
          <span>{text.argentina}</span>
          <span>
            {neededPeople(countryList[2].averageNetworthPerCapita)}{' '}
            {text.persons}
          </span>
        </span>
        {/* <span className='flex justify-between items-center'>
          <span className='font-semibold'>All of the above combined</span>
          <span className='text-red-600 bg-red-100 px-3 py-1 rounded font-medium'>
            543.004.324 {text.persons}
          </span>
        </span> */}
      </div>
    </>
  )
}

export default AmountOfPeople
