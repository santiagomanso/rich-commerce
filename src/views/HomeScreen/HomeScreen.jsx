import Carousel from '../../components/carousel/Carousel'
import CategoriesGrid from '../../components/ProductsGrid/CategoriesGrid'
import useProducts from '../../hooks/useProducts'

const HomeScreen = () => {
  const { loading, error, products, setProducts } = useProducts()

  return (
    <>
      <Carousel />
      <CategoriesGrid products={products} />
    </>
  )
}

export default HomeScreen
