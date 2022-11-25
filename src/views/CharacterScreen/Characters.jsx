import CategoriesGrid from '../../components/ProductsGrid/CategoriesGrid'
import useCharacters from '../../hooks/useCharacters'

const Characters = () => {
  const { loading, error, chatacters, setChatacters } = useCharacters()
  return <CategoriesGrid characters={chatacters} />
}

export default Characters
