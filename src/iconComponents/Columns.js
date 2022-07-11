import * as React from 'react'

const SvgColumns = (props) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='1em'
    height='1em'
    viewBox='0 0 12 12'
    {...props}
  >
    <g transform='translate(0 .857)' fill='#8F8F8F' fillRule='evenodd'>
      <rect width={3} height={10.286} rx={1} />
      <rect width={4} height={10.286} x={4} rx={1} />
      <rect width={3} height={10.286} x={9} rx={1} />
    </g>
  </svg>
)

export default SvgColumns
