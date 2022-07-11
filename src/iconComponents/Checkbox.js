import * as React from 'react'

const SvgCheckbox = (props) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='1em'
    height='1em'
    viewBox='0 0 13 18'
    {...props}
  >
    <path
      d='M10.937 15.375c.725 0 1.313-.588 1.313-1.312V4.438c0-.725-.588-1.313-1.313-1.313H1.312C.588 3.125 0 3.713 0 4.438v9.625c0 .724.588 1.312 1.312 1.312h9.625zm-.164-1.312H1.477a.166.166 0 0 1-.165-.165V4.602c0-.09.074-.164.165-.164h9.296c.09 0 .164.073.164.164v9.296c0 .09-.073.165-.164.165z'
      fill='#8F8F8F'
      fillRule='nonzero'
    />
  </svg>
)

export default SvgCheckbox
