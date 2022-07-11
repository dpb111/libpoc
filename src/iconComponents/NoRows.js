import * as React from 'react'

const SvgNoRows = (props) => (
  <svg
    width='1em'
    height='1em'
    viewBox='0 0 50 36'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <rect
      x={0.5}
      y={0.5}
      width={49}
      height={35}
      rx={3.5}
      fill='#fff'
      fillOpacity={0.3}
    />
    <g className='no-rows_svg__row' fill='#3380FF'>
      <rect x={4} y={11} width={6} height={4} rx={1} />
      <rect x={27} y={12} width={9} height={1} rx={0.5} />
      <rect x={38} y={12} width={6} height={1} rx={0.5} />
      <rect x={14} y={11} width={11} height={1} rx={0.5} />
      <rect x={14} y={14} width={5} height={1} rx={0.5} />
    </g>
    <g className='no-rows_svg__row' fill='#3380FF'>
      <rect x={4} y={19} width={6} height={4} rx={1} />
      <rect x={27} y={20} width={9} height={1} rx={0.5} />
      <rect x={38} y={20} width={6} height={1} rx={0.5} />
      <rect x={14} y={19} width={11} height={1} rx={0.5} />
      <rect x={14} y={22} width={5} height={1} rx={0.5} />
    </g>
    <g className='no-rows_svg__row' fill='#3380FF'>
      <rect x={4} y={27} width={6} height={4} rx={1} />
      <rect x={27} y={28} width={9} height={1} rx={0.5} />
      <rect x={38} y={28} width={6} height={1} rx={0.5} />
      <rect x={14} y={27} width={11} height={1} rx={0.5} />
      <rect x={14} y={30} width={5} height={1} rx={0.5} />
    </g>
    <rect x={6} y={3} width={38} height={2} rx={1} fill='#3380FF' />
  </svg>
)

export default SvgNoRows
