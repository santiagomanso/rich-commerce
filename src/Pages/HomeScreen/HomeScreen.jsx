import Carousel from '../../components/carousel/Carousel'
import CategoriesGrid from '../../components/grids/CategoriesGrid'
import useCategories from '../../hooks/useCategories'

const HomeScreen = () => {
  const { loading, error, categories, setCategories } = useCategories()

  return (
    <main>
      <section className='animate__animated animate__fadeIn'>
        <Carousel />
      </section>
      <section className='animate__animated animate__fadeIn'>
        <CategoriesGrid categories={categories} />
      </section>
    </main>
  )
}

export default HomeScreen
