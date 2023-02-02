import CharactersGrid from '../../components/grids/CharactersGrid'
import useCharacters from '../../hooks/useCharacters'
import SkeletonGrid from '../../components/grids/SkeletonGrid'
import { useContext } from 'react'
import { LanguageContext } from '../../context/LanguageContext'

const CharactersScreen = () => {
  const { characters, loading, error, setCharacters } = useCharacters()
  const { text } = useContext(LanguageContext)
  return (
    <main className='animate__animated animate__fadeIn'>
      <h1 className='px-2 lg:px-0 mt-14 font-semibold text-gray-600'>
        {text.characterScreenH1}
      </h1>
      {loading ? <SkeletonGrid /> : <CharactersGrid characters={characters} />}
    </main>
  )
}

export default CharactersScreen
