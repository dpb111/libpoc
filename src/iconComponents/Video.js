import * as React from 'react'

const SvgVideo = (props) => (
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
        id='video_svg__a'
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
      <circle id='video_svg__b' cx={50} cy={50} r={50} />
    </defs>
    <g transform='translate(20 20)' fill='none' fillRule='evenodd'>
      <use fill='#000' filter='url(#video_svg__a)' xlinkHref='#video_svg__b' />
      <use fill='#FFF' xlinkHref='#video_svg__b' />
      <circle cx={50} cy={50} r={50} fill='#3381FF' opacity={0.2} />
      <path
        fill='#EFEFEF'
        d='M39.32 43.908h23.586v20.579H39.32zm23.586 7.641 8.69-5.22v15.737l-8.69-4.014z'
        opacity={0.6}
      />
      <path
        fill='#3381FF'
        fillRule='nonzero'
        d='M60.077 65.697c1.733 0 3.14-1.265 3.14-2.825v-3.535l6.643 4.132c.345.236.733.337 1.103.337 1.006 0 1.946-.769 1.946-1.862v-15.19c.006-1.094-.934-1.863-1.94-1.863-.376 0-.758.107-1.103.337l-6.65 4.132v-3.535c0-1.56-1.406-2.825-3.14-2.825H41.141c-1.734 0-3.14 1.265-3.14 2.825v17.047c0 1.56 1.406 2.825 3.14 2.825h18.936zm0-1.891H41.141c-.649 0-1.2-.426-1.2-.934V45.825c0-.508.551-.934 1.2-.934h18.936c.648 0 1.2.426 1.2.934v17.047c0 .508-.552.934-1.2.934zm10.898-1.862-.073-.077-7.686-4.776v-5.49l7.76-4.818v15.161z'
      />
      <path
        fill='#3381FF'
        fillRule='nonzero'
        d='M29.563 52C28.7 52 28 51.366 28 50.583V36.416c0-.782.7-1.416 1.563-1.416h21.875c.863 0 1.563.634 1.563 1.416v4.766h-6.25v-4.637h-12.5v13.91h1.562V52h-6.25zm18.75-12.364h3.125v-3.09h-3.125v3.09zm-18.75 0h3.125v-3.09h-3.125v3.09zm0 6.182h3.125v-4.636h-3.125v4.636zm0 4.637h3.125v-3.091h-3.125v3.09z'
      />
    </g>
  </svg>
)

export default SvgVideo
