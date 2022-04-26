import Button from "./index";
import clsx from "clsx";

const CallToActionBtn = ({children,className,...props}) => {
  return <Button className={clsx( "text-xl", className)} {...props}>
    {children}
  </Button>
}

export default CallToActionBtn;
