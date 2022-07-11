import * as React from 'react'

const SvgFix = (props) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='1em'
    height='1em'
    viewBox='0 0 14 14'
    {...props}
  >
    <g fill='#292929' fillRule='nonzero'>
      <path d='M7 .5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13zm0 1a5.5 5.5 0 1 1 0 11 5.5 5.5 0 1 1 0-11z' />
      <path d='m5.54 10.62 5.856-5.856a.233.233 0 0 0 0-.331l-.552-.553a.235.235 0 0 0-.331 0L5.375 9.018 3.487 7.13a.235.235 0 0 0-.331 0l-.553.552a.236.236 0 0 0 0 .332L5.21 10.62c.092.091.24.091.332 0z' />
    </g>
  </svg>
)

export default SvgFix
