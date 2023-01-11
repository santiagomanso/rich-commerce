import Character from '../Character/Character'

const CharactersGrid = ({ characters }) => {
  return (
    <div className='animate__animated animate__fadeIn mt-5 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10'>
      {characters.length > 0
        ? characters.map((character) => (
            <Character character={character} key={character.rank} />
          ))
        : ''}
    </div>
  )
}

export default CharactersGrid
