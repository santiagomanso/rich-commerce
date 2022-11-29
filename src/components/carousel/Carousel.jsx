import bugatti from '../../assets/bugatti.png'
import salvator from '../../assets/salvator.png'
import money1 from '../../assets/money1.png'
import money2 from '../../assets/money2.png'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper'
import { useNavigate } from 'react-router-dom'

const Carousel = () => {
  const navigate = useNavigate()

  const handleNavigate = (url) => {
    navigate(url)
  }

  return (
    <div className='relative'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 6500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className='mySwiper h-[45vh] md:h-[50vh] z-0'
      >
        <SwiperSlide className='select-none rounded flex bg-gradient-to-tl from-slate-500 via-gray-400 to-gray-300'>
          <div className='relative w-full flex flex-col items-start justify-center gap-5'>
            <div className='px-12 flex flex-col gap-5 z-10'>
              <h2 className='text-8xl font-bold'>Billionaire E-Commerce</h2>
              <p className='text-3xl w-2/3'>
                Simulate the wealth of the top Forbes human beings and buy the
                most expensive items that you can think of.
              </p>
              <div className='w-1/3  flex justify-start space-x-10'>
                <button
                  onClick={() => handleNavigate('/characters')}
                  className='w-[250px] py-2 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-md text-xl text-white'
                >
                  Choose player
                </button>
                <button className='w-[250px] py-3 bg-gradient-to-br from-slate-500 to-neutral-800 rounded-md text-xl text-white'>
                  More
                </button>
              </div>
            </div>
            <img
              src={money1}
              alt={money1}
              className='absolute left-0 opacity-10'
            />
            <img
              src={money2}
              alt={money2}
              className='absolute right-0 opacity-80'
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className='select-none rounded flex bg-gradient-to-br from-slate-500 via-gray-400 to-gray-300'>
          <div className='relative w-full flex flex-col items-start justify-center gap-5 px-24'>
            <h2 className='text-8xl font-bold'>Bugatti La Voiture Noire</h2>
            <p className='text-3xl  w-1/2'>
              With a price tag of $13.4 million, the one-off Bugatti La Voiture
              Noire is officially the most expensive new Bugatti ever made.
            </p>
            <div className='w-1/3  flex justify-start space-x-10'>
              <button className='w-[250px] py-2 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-md text-xl text-white'>
                Add to cart
              </button>
              <button className='w-[250px] py-3 bg-gradient-to-br from-slate-500 to-neutral-800 rounded-md text-xl text-white'>
                Explore more cars
              </button>
            </div>
            <img
              src={bugatti}
              alt='bugatti'
              className='absolute bottom-0 right-[10%] w-[55%]'
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className='select-none rounded flex bg-gradient-to-tl from-slate-500 via-gray-400 to-gray-300'>
          <div className='relative w-full flex flex-col items-start justify-center gap-5 px-24'>
            <h2 className='text-8xl font-bold'>Elon Musk</h2>
            <p className='text-3xl'>Introducing new playable character</p>
            <div className='w-1/3  flex justify-start space-x-10'>
              <button className='w-[250px] py-2 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-md text-xl text-white'>
                Play as Elon NOW!
              </button>
              <button className='w-[250px] py-3 bg-gradient-to-br from-slate-500 to-neutral-800 rounded-md text-xl text-white'>
                Check Networth
              </button>
            </div>

            <img
              src='https://microcapdaily.com/wp-content/uploads/2022/04/Elon-Musk-PNG-Pic-Background-1068x828.png'
              alt='elon'
              className='absolute bottom-0 right-[15%] w-[46%]'
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className='select-none rounded flex bg-gradient-to-br from-slate-500 via-gray-400 to-gray-300'>
          <div className='relative w-full flex flex-col items-start justify-center gap-5 px-24'>
            <h2 className='text-8xl font-bold'>Salvator Mundi</h2>
            <p className='text-3xl'>
              Salvator Mundi (Latin for ''Savior of the World'') is worth 430
              million USD.
            </p>
            <div className='w-1/3  flex justify-start space-x-10'>
              <button className='w-[250px] py-2 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-md text-xl text-white'>
                Add to cart
              </button>
              <button className='w-[250px] py-3 bg-gradient-to-br from-slate-500 to-neutral-800 rounded-md text-xl text-white'>
                More paintings
              </button>
            </div>
            <img
              src={salvator}
              alt='elon'
              className='absolute bottom-[2%] right-[10%] w-[25%]'
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Carousel
