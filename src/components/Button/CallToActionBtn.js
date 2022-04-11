import Button from "./index";
import clsx from "clsx";

const CallToActionBtn = ({children,className,...props}) => {
  return <Button className={clsx( "text-xl text-purple" , className)} {...props}>
    {children}
  </Button>
}

export default CallToActionBtn;
