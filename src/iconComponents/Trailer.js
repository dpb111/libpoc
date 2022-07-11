import * as React from 'react'

const SvgTrailer = (props) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    xmlnsXlink='http://www.w3.org/1999/xlink'
    width='1em'
    height='1em'
    viewBox='0 0 140 140'
    {...props}
  >
    <defs>
      <filter
        id='trailer_svg__a'
        width='160%'
        height='160%'
        x='-30%'
        y='-30%'
        filterUnits='objectBoundingBox'
      >
        <feOffset in='SourceAlpha' result='shadowOffsetOuter1' />
        <feGaussianBlur
          in='shadowOffsetOuter1'
          result='shadowBlurOuter1'
          stdDeviation={10}
        />
        <feColorMatrix
          in='shadowBlurOuter1'
          values='0 0 0 0 0.2 0 0 0 0 0.501960784 0 0 0 0 1 0 0 0 0.15 0'
        />
      </filter>
      <circle id='trailer_svg__b' cx={50} cy={50} r={50} />
    </defs>
    <g transform='translate(20 20)' fill='none' fillRule='evenodd'>
      <use
        fill='#000'
        filter='url(#trailer_svg__a)'
        xlinkHref='#trailer_svg__b'
      />
      <use fill='#FFF' xlinkHref='#trailer_svg__b' />
      <circle cx={50} cy={50} r={50} fill='#3381FF' opacity={0.2} />
      <g transform='translate(26 33)'>
        <rect
          width={46}
          height={32}
          x={1}
          y={1}
          fill='#FFF'
          fillOpacity={0.6}
          stroke='#3381FF'
          strokeWidth={2}
          rx={4}
        />
        <path
          stroke='#3381FF'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={3}
          d='M10.5 24v5'
        />
        <path
          stroke='#3381FF'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M1.578 26.5h35.844'
        />
        <path
          fill='#3381FF'
          fillRule='nonzero'
          d='M24 20.531a6.78 6.78 0 0 0 6.781-6.781A6.78 6.78 0 0 0 24 6.969a6.78 6.78 0 0 0-6.781 6.781A6.78 6.78 0 0 0 24 20.531zm0-1.312a5.468 5.468 0 0 1-5.469-5.469A5.468 5.468 0 0 1 24 8.281a5.468 5.468 0 0 1 5.469 5.469A5.468 5.468 0 0 1 24 19.219zm-1.649-2.051 4.813-2.762a.658.658 0 0 0 0-1.148l-4.813-2.926a.657.657 0 0 0-.976.574v5.688c0 .503.541.815.976.574z'
        />
      </g>
    </g>
  </svg>
)

export default SvgTrailer
