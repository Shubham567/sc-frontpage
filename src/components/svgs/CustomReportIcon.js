import * as React from "react"

const CustomReportIcon = (props) => (
  <svg
    width={98}
    height={108}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <mask id="a" fill="#fff">
      <rect width={98} height={108} rx={9} />
    </mask>
    <rect
      width={98}
      height={108}
      rx={9}
      stroke="#C4C4C4"
      strokeWidth={20}
      mask="url(#a)"
    />
    <circle cx={35} cy={24} r={6} fill="#34A853" />
    <path d="M21 35a5 5 0 0 1 5-5h18a5 5 0 0 1 5 5v8H21v-8Z" fill="#34A853" />
    <path fill="#C4C4C4" d="M21 54h55v6H21zM53 36h23v6H53zM53 27h23v6H53z" />
    <path fill="#8C8C8C" d="M53 18h23v6H53z" />
    <path fill="#C4C4C4" d="M21 65h55v6H21zM21 76h55v6H21zM21 87h55v6H21z" />
    <path stroke="#8C8C8C" d="M21 47.5h55" />
  </svg>
)

export default CustomReportIcon
