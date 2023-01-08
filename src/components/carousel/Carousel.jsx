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

import { UserAuth } from '../../context/AuthContext'
import { PlayerContext } from '../../context/PlayerContext'

const Carousel = () => {
  const { user } = UserAuth()
  const { setPlayer } = useContext(PlayerContext)
  const navigate = useNavigate()

  const handleClick = (actionLeft, actionRight) => {
    switch (actionLeft.type || actionRight.type) {
      case 'redirect': {
        navigate(actionLeft.path)
        break
      }

      case 'character': {
        if (!user) {
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
    <div className='relative  lg:mt-0'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        // autoplay={{
        //   delay: 6500,
        //   disableOnInteraction: false,
        // }}
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
                  <h2 className='font-bold'>{data.title}</h2>
                  <p className='w-2/3'>{data.subtitle}</p>
                  <div className='w-5/6 md:w-full lg:mt-5 lg:w-1/3 gap-x-2 md:gap-x-10 flex justify-start'>
                    <button
                      onClick={() => handleClick(data.actionLeft)}
                      className='w-full md:w-[200px] lg:w-[600px] bg-gradient-to-br from-slate-500 to-neutral-800 rounded-md  text-white'
                    >
                      {data.buttonLeft}
                    </button>
                    <button
                      onClick={() => handleClick(data.actionRight)}
                      className='w-full md:w-[200px] lg:w-[600px] bg-gradient-to-br from-indigo-500 to-purple-500 rounded-md  text-white'
                    >
                      {data.buttonRight}
                    </button>
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
