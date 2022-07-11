import * as React from 'react'

const SvgClock = (props) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='1em'
    height='1em'
    viewBox='0 0 11 11'
    {...props}
  >
    <path
      d='M5.328 10.656A5.327 5.327 0 1 0 5.328 0a5.327 5.327 0 1 0 0 10.656zm0-.687a4.64 4.64 0 1 1 .001-9.28 4.64 4.64 0 0 1-.001 9.279zm1.803-2.8.176-.242a.257.257 0 0 0-.056-.361L5.736 5.463V2.32a.26.26 0 0 0-.257-.258h-.301a.26.26 0 0 0-.258.258v3.43c0 .08.039.158.105.208L6.77 7.225a.258.258 0 0 0 .36-.056z'
      fill='#8F8F8F'
      fillRule='nonzero'
    />
  </svg>
)

export default SvgClock
