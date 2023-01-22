import { useContext } from 'react'
import CarouselHowToPlay from '../../components/carousel/CarouselHowToPlay'
import { LanguageContext } from '../../context/LanguageContext'

const HowToPlayScreen = () => {
  const { text } = useContext(LanguageContext)
  return (
    <main className='lg:h-[78.8%] shadow-2xl bg-gradient-to-br from-slate-300/50 via-slate-600/10 to-gray-800/5 rounded-md flex animate__animated animate__fadeIn dark:from-slate-800/50 dark:to-purple-800/10'>
      <section className='hidden lg:block w-2/5 h-full p-0 m-0 group '>
        <article className='flex justify-center items-center h-4/5 '>
          <div className='flex flex-col items-center gap-y-7'>
            <h1 className='font-medium text-5xl text-gray-600'>
              {text.howToPlay}
            </h1>
            <i className='fa-solid fa-person-chalkboard text-7xl text-gray-600 group-hover:scale-110 group-hover:-rotate-3 duration-300'></i>
            <span className='text-gray-600 text-lg'>
              {text.howToPlayInstructions}
            </span>
          </div>
        </article>
      </section>
      <section className='bg w-full lg:w-2/3 h-full p-0 m-0'>
        <CarouselHowToPlay />
      </section>
    </main>
  )
}

export default HowToPlayScreen
