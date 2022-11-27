const Character = ({ character }) => {
  //hard-code NEW characters?

  const moneyDigits = (budget) => {
    let money = character.estWorthPrev.toString().split('.').sort().pop()

    console.log('money sliced: ', money.slice(0, 3))
    return money.slice(0, 4)
  }

  console.log(moneyDigits())

  return (
    <div
      className={`hover:-translate-y-2 hover:scale-105 duration-500 flex flex-col justify-start rounded-lg shadow-md cursor-pointer`}
      key={character.rank}
    >
      <div className='rounded-t-lg group overflow-hidden relative'>
        <img
          className='group-hover:scale-[1.07] duration-[1s] bg-black/60 object-fill w-full h-full'
          alt='imagen'
          src={character.squareImage}
        />
        <p
          className={`blur-0 text-center rotate-[30deg] absolute top-2 -right-7 text-amber-500 bg-yellow-200
          px-16 py-[0.10rem] text-xl font-semibold shadow-lg
        `}
        >
          #{character.rank}
        </p>
      </div>
      <div className='bg-white/20  flex flex-col justify-evenly px-2 py-3'>
        <div className='flex justify-between items-center '>
          <h2 className='text-gray-700 text-xl font-semibold'>
            {character.personName}
          </h2>

          <span className='text-xl text-green-700 bg-green-100 px-2 py-1 rounded-md'>
            $ {moneyDigits()} Billions
          </span>
        </div>
        <p className='text-gray-500 font-medium'>{character.bios[0]}</p>
      </div>
    </div>
  )
}

export default Character
