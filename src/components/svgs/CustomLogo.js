import * as React from "react"

const CustomLogo = (props) => (
  <svg
    width={30}
    height={30}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M22.2 13.5c.15-.45.3-.9.3-1.5 0-3.3-2.7-6-6-6-2.25 0-4.35 1.35-5.25 3.3-.45-.15-1.05-.3-1.5-.3C7.65 9 6 10.65 6 12.75c0 .3 0 .6.15.75-2.7.45-4.65 2.55-4.65 5.25C1.5 21.6 3.9 24 6.75 24H12v-4.5H7.5l6.75-6.75L21 19.5h-4.5V24h5.25C24.6 24 27 21.6 27 18.75c0-2.7-2.1-4.95-4.8-5.25Z"
      fill="#522C78"
    />
  </svg>
)

export default CustomLogo
