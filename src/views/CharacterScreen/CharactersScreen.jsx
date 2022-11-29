import CharactersGrid from '../../components/grids/CharactersGrid'
import useCharacters from '../../hooks/useCharacters'
import SkeletonGrid from '../../components/grids/SkeletonGrid'

const CharactersScreen = () => {
  const { characters, loading, error, setCharacters } = useCharacters()
  return (
    <main>
      <h1 className='mt-14 text-xl font-semibold text-gray-600'>
        Select your billionaire
      </h1>
      {loading ? <SkeletonGrid /> : <CharactersGrid characters={characters} />}
    </main>
  )
}

export default CharactersScreen
