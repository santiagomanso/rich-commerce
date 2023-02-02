// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import { useContext } from 'react'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper'
import { useNavigate } from 'react-router-dom'
import { carouselData, Elon } from '../../data/carouselData'

import { UserContext } from '../../context/AuthContext'
import { PlayerContext } from '../../context/PlayerContext'
import { RedirectContext } from '../../context/RedirectContext'
import { LanguageContext } from '../../context/LanguageContext'

const Carousel = () => {
  const { user } = useContext(UserContext)
  const { language } = useContext(LanguageContext)
  const { setPlayer, setAttemptedPlayer } = useContext(PlayerContext)
  const { setPath } = useContext(RedirectContext)
  const navigate = useNavigate()

  const handleClick = (actionLeft, actionRight) => {
    switch (actionLeft.type || actionRight.type) {
      case 'redirect': {
        if (!user) {
          setPath(actionLeft.path) //if there is no user, set global path to later redirect after login
        }
        navigate(actionLeft.path)
        break
      }

      case 'character': {
        if (!user) {
          setAttemptedPlayer(Elon)
          navigate('/login')
        } else {
          setPlayer(Elon)
        }
        break
      }

      default:
        break
    }
  }

  return (
    <div className='relative shadow-lg lg:mt-0'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className='mySwiper h-[300px] md:h-[30vh] lg:h-[350px]  z-0'
      >
        {carouselData.map((data, i) => {
          return (
            <SwiperSlide key={data.id} className={data.slideOptions}>
              <div className='relative w-full flex flex-col items-start justify-center gap-5'>
                <div className='pl-10 md:px-12 flex flex-col gap-5 z-10 '>
                  <h2 className='font-bold'>{data.title[language]}</h2>
                  <p className='w-2/3'>{data.subtitle[language]}</p>
                  <div className='w-5/6 lg:w-[600px]  lg:mt-5  gap-x-2 md:gap-x-5 flex justify-start'>
                    <button
                      onClick={() => handleClick(data.actionLeft)}
                      className='w-full lg:w-[250px]   bg-gradient-to-br from-slate-500 to-neutral-800 rounded-md  text-white'
                    >
                      {data.buttonLeft[language]}
                    </button>
                    {data.buttonRight ? (
                      <button
                        onClick={() => handleClick(data.actionRight)}
                        className='w-full lg:w-[250px]   bg-gradient-to-br from-indigo-500 to-purple-500 rounded-md  text-white'
                      >
                        {data.buttonRight[language]}
                      </button>
                    ) : (
                      ''
                    )}
                  </div>
                </div>
                <img
                  src={data.img1}
                  alt={data.img1}
                  className={data.imgOptions1}
                />
                <img
                  src={data.img2}
                  alt={data.img2}
                  className={data.imgOptions2}
                />
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}

export default Carousel
