import { useEffect, useRef } from 'react'
import ReactDom from 'react-dom'

const ModalCheckout = ({ active, setActive, children }) => {
  const menuRef = useRef()
  useEffect(() => {
    const detectKeyDown = (e) => {
      if (e.key === 'Escape') {
        setActive(false)
      }
    }
    document.documentElement.addEventListener('keydown', detectKeyDown)

    return () => {
      document.removeEventListener('keydown', detectKeyDown)
    }
    // console.log('dataType', dataType)
    //eslint-disable-next-line
  }, [])

  if (!active) return ''
  else {
    return ReactDom.createPortal(
      <>
        <div
          className='absolute top-0 left-0 bottom-0 right-0 bg-gradient-to-br from-black/95 via-black/95 to-slate-900/95'
          onClick={() => setActive(!active)}
        />
        <div className='z-10 absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] w-screen h-full lg:h-[80vh] lg:w-[50vw] overflow-auto rounded-md'>
          <div ref={menuRef}>{children}</div>
        </div>
      </>,
      document.getElementById('portal'),
    )
  }
}

export default ModalCheckout
