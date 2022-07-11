import * as React from 'react'

const SvgResizeArrow = (props) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='1em'
    height='1em'
    viewBox='0 0 14 6'
    {...props}
  >
    <path
      d='m11.061 5.904 2.675-2.675a.323.323 0 0 0 0-.458L11.061.096a.324.324 0 0 0-.553.229v1.919H3.324V.324A.324.324 0 0 0 2.77.096L.095 2.77a.323.323 0 0 0 0 .458L2.77 5.904c.204.205.554.06.554-.229V3.756h7.184v1.92c0 .288.349.433.553.228z'
      fill='#292929'
      fillRule='nonzero'
    />
  </svg>
)

export default SvgResizeArrow
