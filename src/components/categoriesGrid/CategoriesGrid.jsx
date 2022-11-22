//fix grid img messing up layout

const CategoriesGrid = () => {
  return (
    <>
      <h2 className='mt-14 text-xl font-semibold text-gray-600'>
        Our Categories of luxury assets
      </h2>
      <div className='mt-5 w-full grid grid-cols-3 gap-x-20 gap-y-10'>
        <div className='col-span-2 flex flex-col justify-start rounded-lg shadow-md  '>
          <div className='rounded-t-lg group overflow-hidden relative'>
            <img
              className='group-hover:scale-125 duration-[2s] bg-black/60 object-cover w-full h-[230px]'
              alt='imagen'
              src='http://www.dmitryshulgin.com/wp-content/uploads/2014/12/USS-Gerald-R.-Ford-CVN-78-9.jpg'
            />
            <div className='text-center rotate-[30deg] absolute top-2 -right-7 text-red-500 bg-red-200 px-14 py-[0.10rem] text-lg font-semibold '>
              +16
            </div>
          </div>
          <div className='bg-white/20 h-[70px] flex flex-col justify-evenly items-center itemsc'>
            <h2 className='text-gray-700 text-xl font-semibold'>
              Aircraft Carriers
            </h2>
            <p className='text-gray-500 font-medium'>
              Bombers - Fighters ready to wreak havok on your enemy (+16) tax
              free!
            </p>
          </div>
        </div>
        <div className='flex flex-col justify-start rounded-lg shadow-md  '>
          <div className='rounded-t-lg group overflow-hidden'>
            <img
              className='group-hover:scale-125 duration-[2s] bg-black/60 object-cover w-full h-[230px]'
              alt='imagen'
              src='https://techcrunch.com/wp-content/uploads/2020/07/boom-supersonic.jpeg?w=1390&crop=1'
            />
          </div>
          <div className='bg-white/20 h-[70px] flex flex-col justify-evenly items-center itemsc'>
            <h2 className='text-gray-700 text-xl font-semibold'>
              Exclusive Private Jets
            </h2>
            <p className='text-gray-500 font-medium'>
              Fast and supersonic where you need to be
            </p>
          </div>
        </div>
        <div className='flex flex-col justify-start rounded-lg shadow-md  '>
          <div className='rounded-t-lg group overflow-hidden'>
            <img
              className='group-hover:scale-125 duration-[2s] bg-black/60 object-cover w-full h-[230px]'
              alt='imagen'
              src='https://cdn.luxe.digital/media/20220718163630/best-luxury-car-brands-bugatti-2022-luxe-digital-780x520.jpg.webp'
            />
          </div>
          <div className='bg-white/20 h-[70px] flex flex-col justify-evenly items-center itemsc'>
            <h2 className='text-gray-700 text-xl font-semibold'>Superb Cars</h2>
            <p className='text-gray-500 font-medium'>
              Arrive with the style of a top 1% of the population
            </p>
          </div>
        </div>
        <div className='flex flex-col justify-start rounded-lg shadow-md  '>
          <div className='rounded-t-lg group overflow-hidden'>
            <img
              className='group-hover:scale-125 duration-[2s] bg-black/60 object-cover w-full h-[230px]'
              alt='imagen'
              src='https://www.luxurypulse.com/img/pictures/5abb50877b9a4g%2835%29.jpeg'
            />
          </div>
          <div className='bg-white/20 h-[70px] flex flex-col justify-evenly items-center itemsc'>
            <h2 className='text-gray-700 text-xl font-semibold'>Mansions</h2>
            <p className='text-gray-500 font-medium'>
              Nothing below $50million will yeld this Status Quo
            </p>
          </div>
        </div>
        <div className='row-span-2 flex flex-col justify-start rounded-lg shadow-md  '>
          <div className='rounded-t-lg group overflow-hidden h-full'>
            <img
              className='group-hover:scale-125 duration-[2s] bg-black/60 object-cover w-full h-full'
              alt='imagen'
              src='https://thumbor.forbes.com/thumbor/1500x0/smart/filters:format(jpeg)/https%3A%2F%2Fimages.forbes.com%2FBillies22%2Flanding-1500px.gif'
            />
          </div>
          <div className='bg-white/20 h-[70px] flex flex-col justify-evenly items-center itemsc'>
            <h2 className='text-gray-700 text-xl font-semibold'>
              Concerts - Talks
            </h2>
            <p className='text-gray-500 font-medium'>
              For your new Private Island you just bought
            </p>
          </div>
        </div>
        <div className='col-span-2 flex flex-col justify-start rounded-lg shadow-md  '>
          <div className='rounded-t-lg group overflow-hidden h-full relative'>
            <img
              className='group-hover:scale-125 duration-[2s] bg-black/60 object-cover w-full h-full'
              alt='imagen'
              src='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/d609be3b-97e9-4aa0-a393-87018020eacb-f10-1589992779.jpg'
            />
            <div className='text-center rotate-[30deg] absolute top-2 -right-7 text-amber-500 bg-yellow-200 px-14 py-[0.10rem] text-lg font-semibold '>
              NEW
            </div>
          </div>
          <div className='bg-white/20 h-[70px] flex flex-col justify-evenly items-center itemsc'>
            <h2 className='text-gray-700 text-xl font-semibold'>
              Private Islands
            </h2>
            <p className='text-gray-500 font-medium'>
              Exclusive and casted away from everyone else
            </p>
          </div>
        </div>
        <div className='row-span-2 flex flex-col justify-start rounded-lg shadow-md  '>
          <div className='rounded-t-lg group overflow-hidden h-full'>
            <img
              className='group-hover:scale-125 duration-[2s] bg-black/60 object-cover w-full h-full'
              alt='imagen'
              src='https://image.yachtcharterfleet.com/w1277/h618/qh/ca/m2/kc483acad/vessel/resource/80985/charter-eclipse-yacht.jpg'
            />
          </div>
          <div className='bg-white/20 h-[70px] flex flex-col justify-evenly items-center itemsc'>
            <h2 className='text-gray-700 text-xl font-semibold'>Yatchs</h2>
            <p className='text-gray-500 font-medium'>
              Explore The oceans the right way
            </p>
          </div>
        </div>
        <div className=' flex flex-col justify-start rounded-lg shadow-md  '>
          <div className='rounded-t-lg group overflow-hidden h-full'>
            <img
              className='group-hover:scale-125 duration-[2s] bg-black/60 object-cover w-full h-full'
              alt='imagen'
              src='https://assets.gocity.com/files/groot_london/files/styles/attraction_banner_dskt/public/shutterstock_662910385.jpg'
            />
          </div>
          <div className='bg-white/20 h-[70px] flex flex-col justify-evenly items-center itemsc'>
            <h2 className='text-gray-700 text-xl font-semibold'>Real State</h2>
            <p className='text-gray-500 font-medium'>
              The best and biggest money can buy
            </p>
          </div>
        </div>
        <div className='flex flex-col justify-start rounded-lg shadow-md  '>
          <div className='rounded-t-lg group overflow-hidden h-full'>
            <img
              className='group-hover:scale-125 duration-[2s] bg-black/60 object-cover w-full h-full'
              alt='imagen'
              src='https://img.welt.de/img/out-of-home/reise/mobile201798754/5851623987-ci23x11-w1136/125460056-jpg.jpg'
            />
          </div>
          <div className='bg-white/20 h-[70px] flex flex-col justify-evenly items-center itemsc'>
            <h2 className='text-gray-700 text-xl font-semibold'>
              Cruise Ships
            </h2>
            <p className='text-gray-500 font-medium'>
              Party with all your friends
            </p>
          </div>
        </div>
        <div className='col-span-2 row-span-1 flex flex-col justify-start rounded-lg shadow-md  '>
          <div className='rounded-t-lg group overflow-hidden h-full relative'>
            <img
              className='group-hover:scale-125 duration-[2s] bg-black/60 object-cover w-full h-full'
              alt='imagen'
              src='https://media.defense.gov/2003/Sep/22/2000597310/1200/1200/0/030922-F-0000J-888.JPG'
            />
            <div className='text-center rotate-[30deg] absolute top-2 -right-7 text-red-500 bg-red-200 px-14 py-[0.10rem] text-lg font-semibold '>
              +16
            </div>
          </div>
          <div className='bg-white/20 h-[70px] flex flex-col justify-evenly items-center itemsc'>
            <h2 className='text-gray-700 text-xl font-semibold'>
              Military Jets
            </h2>
            <p className='text-gray-500 font-medium'>
              Air-air / air-land we got em all
            </p>
          </div>
        </div>
        <div className='col-span-2 flex flex-col justify-start rounded-lg shadow-md  '>
          <div className='rounded-t-lg group overflow-hidden h-full'>
            <img
              className='group-hover:scale-125 duration-[2s] bg-black/60 object-cover w-full h-full'
              alt='imagen'
              src='https://www.universetoday.com/wp-content/uploads/2019/03/bfr-2018-spaceship-and-booster-sep-spacex-crop-1541704939-2000x1200.jpg'
            />
          </div>
          <div className='bg-white/20 h-[70px] flex flex-col justify-evenly items-center itemsc'>
            <h2 className='text-gray-700 text-xl font-semibold'>
              Space Rockets
            </h2>
            <p className='text-gray-500 font-medium'>
              If you feel a bit tired of this planet
            </p>
          </div>
        </div>
        <div className='row-span-2 flex flex-col justify-start rounded-lg shadow-md  '>
          <div className='rounded-t-lg group overflow-hidden h-full relative'>
            <img
              className='group-hover:scale-125 duration-[2s] bg-black/60 object-cover w-full h-full'
              alt='imagen'
              src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/%D0%A0%D1%8B%D1%81%D0%B0%D0%BA_%D0%B2_%D0%BC%D0%B5%D0%BC%D0%BE%D1%80%D0%B8%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE%D0%BC_%D0%BA%D0%BE%D0%BC%D0%BF%D0%BB%D0%B5%D0%BA%D1%81%D0%B5-%D0%BC%D1%83%D0%B7%D0%B5%D0%B5_%D0%A1%D0%B0%D0%BB%D1%8E%D1%82%2C_%D0%9F%D0%BE%D0%B1%D0%B5%D0%B4%D0%B0.JPG/1280px-%D0%A0%D1%8B%D1%81%D0%B0%D0%BA_%D0%B2_%D0%BC%D0%B5%D0%BC%D0%BE%D1%80%D0%B8%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE%D0%BC_%D0%BA%D0%BE%D0%BC%D0%BF%D0%BB%D0%B5%D0%BA%D1%81%D0%B5-%D0%BC%D1%83%D0%B7%D0%B5%D0%B5_%D0%A1%D0%B0%D0%BB%D1%8E%D1%82%2C_%D0%9F%D0%BE%D0%B1%D0%B5%D0%B4%D0%B0.JPG'
            />
            <div className='text-center rotate-[30deg] absolute top-2 -right-7 text-red-500 bg-red-200 px-14 py-[0.10rem] text-lg font-semibold '>
              +16
            </div>
          </div>

          <div className='bg-white/20 h-[70px] flex flex-col justify-evenly items-center itemsc'>
            <h2 className='text-gray-700 text-xl font-semibold'>ICBM's</h2>
            <p className='text-gray-500 font-medium'>
              Obliterate your foes with the latest nuke!
            </p>
          </div>
        </div>
        <div className='col-span-2 flex flex-col justify-start rounded-lg shadow-md  '>
          <div className='rounded-t-lg group overflow-hidden relative'>
            <img
              className='group-hover:scale-125 duration-[2s] bg-black/60 object-cover w-full h-[230px]'
              alt='imagen'
              src='https://www.musco.com/wp-content/uploads/2019/03/wimbledon1200x600-1024x512.jpg'
            />
            <div className='text-center rotate-[30deg] absolute top-2 -right-7 text-amber-500 bg-yellow-200 px-14 py-[0.10rem] text-lg font-semibold '>
              NEW
            </div>
          </div>
          <div className='bg-white/20 h-[70px] flex flex-col justify-evenly items-center itemsc'>
            <h2 className='text-gray-700 text-xl font-semibold'>
              Tennis - Futbol Clubs
            </h2>
            <p className='text-gray-500 font-medium'>
              Wimbledon? Chicago bulls? we got them.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default CategoriesGrid
