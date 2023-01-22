// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
// import required modules
import { Pagination, Navigation } from 'swiper'
import { arrayHowToPlay } from '../../data/carouselHowToPlay'
import { useContext } from 'react'
import { LanguageContext } from '../../context/LanguageContext'

const CarouselHowToPlay = () => {
  const { text, language } = useContext(LanguageContext)

  const recommended = () => {
    return (
      <span className=' py-[0.10rem] px-2 text-center font-medium text-white rounded'>
        recommended
      </span>
    )
  }

  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className='mySwiper'
    >
      {arrayHowToPlay.map((data, i) => {
        return (
          <SwiperSlide key={data.id}>
            <div className='relative w-full flex flex-col items-start justify-center gap-5 '>
              <article className=' p-5 flex items-center justify-center h-full w-full'>
                <div className='w-full'>
                  <div className='flex items-center gap-1'>
                    <span className=' px-3 py-1 text-gray-200 bg-gray-600 rounded'>
                      {data.id}
                    </span>
                    <h2 className='font-medium text-gray-600'>
                      {data.title[language]}
                    </h2>
                  </div>
                  <div className='flex flex-col'>
                    <span>{data.subtitle[language]}</span>
                    <ul className='list-disc pl-5'>
                      {data.step1 ? (
                        <>
                          <li>{data.step1[language]}</li>
                        </>
                      ) : (
                        ''
                      )}
                      {data.step2 && data.step3 ? (
                        <>
                          <li>{data.step2[language]}</li>
                          <li>{data.step3[language]}</li>
                        </>
                      ) : (
                        ''
                      )}
                    </ul>
                  </div>
                  <div className='flex items-center justify-center w-full  mt-2'>
                    <img
                      src={data.img[language]}
                      alt='Login'
                      className='rounded opacity-90 max-h-[570px] outline outline-4 outline-slate-100'
                    />
                  </div>
                </div>
              </article>
            </div>
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}

export default CarouselHowToPlay
