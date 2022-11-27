import Character from '../Character/Character'

const CharactersGrid = ({ characters }) => {
  return (
    <>
      <h2 className='mt-14 text-xl font-semibold text-gray-600'>
        Select your billionaire
      </h2>
      <div className='mt-5 w-full grid grid-cols-3 gap-x-20 gap-y-10'>
        {characters.length > 0
          ? characters.map((character) => (
              <Character character={character} key={character.rank} />
            ))
          : ''}
      </div>
    </>
  )
}

export default CharactersGrid
