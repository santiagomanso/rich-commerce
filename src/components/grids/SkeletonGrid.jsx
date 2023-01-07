import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const SkeletonGrid = () => {
  const skeletonData = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10'>
      {skeletonData.map((item, i) => (
        <div
          key={i}
          className='text-center border-2 border-gray-200 rounded-2xl'
        >
          <Skeleton circle width={450} height={450} />
          <Skeleton
            count={2}
            style={{ marginTop: '15px', padding: '10px', display: 'flex' }}
          />
        </div>
      ))}
    </div>
  )
}

export default SkeletonGrid
