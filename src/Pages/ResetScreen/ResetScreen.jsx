import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../context/AuthContext'
import { LanguageContext } from '../../context/LanguageContext'

const ResetScreen = () => {
  const { text } = useContext(LanguageContext)

  //states to handle form
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')

  //animation state
  const [animation, setAnimation] = useState('animate__fadeIn')
  const [active, setActive] = useState(false)

  const navigate = useNavigate()

  //extract create user fn from context
  const { createUser, resetPassword } = useContext(UserContext)

  const handleSubmit = async (e, email) => {
    e.preventDefault()
    if (email.length > 1) {
      resetPassword(email)
      reset()
    } else {
      console.log('error no email')
    }
  }

  const reset = () => {
    setEmail(' ')
    setActive(true)

    setTimeout(() => {
      setActive(false) //reset animation
      navigate('/login')
    }, 5000)
  }

  const redirectTo = (link) => {
    setAnimation('animate__fadeOut')
    setTimeout(() => {
      navigate(link)
    }, 700)
  }

  return (
    <section
      className={` animate__animated ${animation} h-[87%]  flex items-center justify-center md:px-10`}
    >
      <span
        className={`absolute  duration-700 top-4 lg:top-32 left-[25%] lg:left-[42%] ${
          active ? ' opacity-100 animate-bounce' : 'opacity-0'
        }   bg-green-300/60 text-green-900 outline outline-2 outline-emerald-500 p-4  rounded-md`}
      >
        {text.checkEmail}
      </span>
      <div
        className='h-full w-full max-w-xl md:h-auto  md:min-w-auto bg-gradient-to-br     
      from-indigo-500/20   dark:from-black/50
         via-gray-100/90   dark:via-slate-800/80
          to-gray-300/80   dark:to-black/50 flex rounded-2xl  md:p-5 shadow-lg items-stretch '
      >
        {/* form container */}
        <div className='w-full px-5 md:px-10 flex flex-col justify-center -translate-y-32 md:-translate-y-0'>
          <h2 className='font-bold text-2xl text-indigo-900/80 select-none'>
            {text.resetPassword}
          </h2>

          <span className='mt-2 text-gray-500'>{text.resetSubtitle}</span>
          <form className='flex flex-col gap-4 mt-5'>
            <label className='flex flex-col relative'>
              <span className=' capitalize'>
                {text.email}
                <span className='hidden md:inline text-red-500 font-bold'>
                  {error ? error : ''}
                </span>
              </span>
              <span className='md:hidden text-red-500 font-bold'>
                {error ? error : ''}
              </span>
              <input
                onClick={() => setError(null)}
                onChange={(e) => setEmail(e.target.value)}
                className={` ${
                  error && error.length > 1 ? '' : ''
                } p-2 mb-2 rounded-lg  focus:border-blue-500  transition duration-200`}
                type='email'
                value={email}
                placeholder={text.email}
                name='email'
              />
            </label>

            <button
              className='select-none mt-7 w-full shadow-md bg-gradient-to-br from-indigo-500/90 to-purple-500/80 text-white rounded-lg py-2 flex justify-center items-center gap-2 border font-semibold hover:scale-105 duration-300'
              onClick={(e) => {
                handleSubmit(e, email)
              }}
            >
              <i className='fa-solid fa-key'></i>
              <span className=''>{text.sendInstructions}</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ResetScreen
