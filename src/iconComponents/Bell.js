import * as React from 'react'

const SvgBell = (props) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='1em'
    height='1em'
    viewBox='0 0 13 15'
    {...props}
  >
    <path
      d='M11.372 12.125a.876.876 0 0 0 .878-.875.857.857 0 0 0-.235-.594c-.529-.567-1.517-1.421-1.517-4.218 0-2.125-1.49-3.826-3.499-4.243v-.57a.874.874 0 1 0-1.748 0v.57c-2.01.417-3.499 2.118-3.499 4.243 0 2.797-.988 3.65-1.517 4.218A.858.858 0 0 0 0 11.25a.876.876 0 0 0 .878.875h10.494zM6.125 14.75A1.75 1.75 0 0 0 7.875 13h-3.5c0 .967.784 1.75 1.75 1.75z'
      fill='#FFF'
      fillRule='nonzero'
    />
  </svg>
)

export default SvgBell
