import * as React from 'react'

function SvgDragIndicator(props) {
  return (
    <svg
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <g clipPath='url(#clip0)'>
        <path
          d='M7.625 8.375C6.85156 8.375 6.25 9.01953 6.25 9.75C6.25 10.5234 6.85156 11.125 7.625 11.125C8.35547 11.125 9 10.5234 9 9.75C9 9.01953 8.35547 8.375 7.625 8.375ZM6.25 4.59375C6.25 5.36719 6.85156 5.96875 7.625 5.96875C8.35547 5.96875 9 5.36719 9 4.59375C9 3.86328 8.35547 3.21875 7.625 3.21875C6.85156 3.21875 6.25 3.86328 6.25 4.59375ZM6.25 14.9062C6.25 15.6797 6.85156 16.2812 7.625 16.2812C8.35547 16.2812 9 15.6797 9 14.9062C9 14.1758 8.35547 13.5312 7.625 13.5312C6.85156 13.5312 6.25 14.1758 6.25 14.9062Z'
          fill='#8F8F8F'
        />
        <path
          d='M12.125 8.375C11.3516 8.375 10.75 9.01953 10.75 9.75C10.75 10.5234 11.3516 11.125 12.125 11.125C12.8555 11.125 13.5 10.5234 13.5 9.75C13.5 9.01953 12.8555 8.375 12.125 8.375ZM10.75 4.59375C10.75 5.36719 11.3516 5.96875 12.125 5.96875C12.8555 5.96875 13.5 5.36719 13.5 4.59375C13.5 3.86328 12.8555 3.21875 12.125 3.21875C11.3516 3.21875 10.75 3.86328 10.75 4.59375ZM10.75 14.9062C10.75 15.6797 11.3516 16.2812 12.125 16.2812C12.8555 16.2812 13.5 15.6797 13.5 14.9062C13.5 14.1758 12.8555 13.5312 12.125 13.5312C11.3516 13.5312 10.75 14.1758 10.75 14.9062Z'
          fill='#8F8F8F'
        />
      </g>
      <defs>
        <clipPath id='clip0'>
          <rect width='20' height='20' fill='white' />
        </clipPath>
      </defs>
    </svg>
  )
}

export default SvgDragIndicator