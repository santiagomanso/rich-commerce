import Carousel from '../../components/carousel/Carousel'
import ProductsGrid from '../../components/grids/ProductsGrid'
import useProducts from '../../hooks/useProducts'

const HomeScreen = () => {
  const { loading, error, products, setProducts } = useProducts()

  return (
    <main>
      <section>
        <Carousel />
      </section>
      <section>
        <ProductsGrid products={products} />
      </section>
    </main>
  )
}

export default HomeScreen
