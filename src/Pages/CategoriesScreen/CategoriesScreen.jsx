import CategoriesGrid from '../../components/grids/CategoriesGrid'
import useCategories from '../../hooks/useCategories'

const CategoriesScreen = () => {
  const { loading, error, categories, setCategories } = useCategories()
  return (
    <section className='animate__animated animate__fadeIn'>
      <CategoriesGrid categories={categories} />
    </section>
  )
}

export default CategoriesScreen
