import * as React from "react"

const InfoDetails = (props) => (
  <svg
    width={25}
    height={24}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect x={0.106} y={0.001} width={24} height={24} rx={12}  />
    <path
      d="M12.12 8.556a1.76 1.76 0 0 1-1.297-.524 1.76 1.76 0 0 1-.523-1.296c0-.515.174-.947.523-1.296a1.76 1.76 0 0 1 1.296-.523c.499 0 .922.174 1.271.523.35.35.524.781.524 1.296s-.175.947-.524 1.296a1.73 1.73 0 0 1-1.27.524Zm1.395 1.82v8.708h-2.841v-8.709h2.84Z"
      fill={"#8D8D8D"}
    />
  </svg>
)

export default InfoDetails;
