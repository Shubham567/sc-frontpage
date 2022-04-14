import * as React from "react"

const DragHandIcon = (props) => (
  <svg
    width="20px"
    height="20px"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M16 8.5v-.571c0-2.286 3-2.286 3 0M7 10.5l-2.004 2.672a2 2 0 0 0 .126 2.552l3.784 4.128c.378.413.912.648 1.473.648H15c2.4 0 4-1.5 4-4V7.929L7 10.5Z"
      stroke="#8C8C8C"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16 8.5V7.027c0-2.286-3-2.286-3 0M13 8.5V7.027 8.5Zm0-2v.527V6.5Z"
      stroke="#8C8C8C"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7 13.5v-7A1.5 1.5 0 0 1 8.5 5c.828 0 1.5.555 1.5 1.384V8.5m3 0V7.027c0-2.286 3-2.286 3 0V8.5h-3Zm-3 0v-2c0-2.286 3-2.286 3 0v2h-3Z"
      stroke="#8C8C8C"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default DragHandIcon;
