import CharactersGrid from '../../components/grids/CharactersGrid'
import useCharacters from '../../hooks/useCharacters'

const CharactersScreen = () => {
  const { characters, loading, error, setCharacters } = useCharacters()
  return (
    <main>
      <CharactersGrid characters={characters} />
    </main>
  )
}

export default CharactersScreen
