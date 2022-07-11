import * as React from 'react'

const SvgContent = (props) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='1em'
    height='1em'
    viewBox='0 0 16 10'
    {...props}
  >
    <path
      d='M13.75 1A.25.25 0 0 0 14 .75v-.5a.25.25 0 0 0-.25-.25H.25A.25.25 0 0 0 0 .25v.5C0 .888.112 1 .25 1h13.5zm2 4.5a.25.25 0 0 0 .25-.25v-.5a.25.25 0 0 0-.25-.25H2.25a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h13.5zm-2 4.5a.25.25 0 0 0 .25-.25v-.5a.25.25 0 0 0-.25-.25H.25a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h13.5z'
      fill='#FFF'
      fillRule='nonzero'
    />
  </svg>
)

export default SvgContent
