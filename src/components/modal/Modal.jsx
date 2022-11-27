// 25.11.2022 future feature display character / product full data on this modal

import ReactDom from 'react-dom'

export default function Modal({ character }) {
  return ReactDom.createPortal(
    <>
      <div className='fixed top-0 left-0 bottom-0 right-0 bg-black/10' />
      <div
        className='bg-gradient-to-br from-gray-300 to-slate-600 fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] w-screen h-full lg:h-[80%] lg:w-[80vw] select-none text-white rounded-md
      p-5'
      >
        {character.personName}
      </div>
    </>,
    document.getElementById('portal')
  )
}
