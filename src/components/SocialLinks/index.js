import React from 'react';
import IconButton from "../IconButton";
import socialLinks from "../../Constants/socialLinks";
import clsx from "clsx";


const SocialLinks = ({className}) => {
  return (
    <div className={clsx("flex gap-2 text-yellow", className)}>
      {
        socialLinks.map(sl => <a href={sl.link} rel="noopener noreferrer" key={sl.name} target="_blank" >
          <IconButton className="bg-yellow" aria-label={sl.name} contained>
            {sl.icon}
          </IconButton>
        </a>)
      }
    </div>
  );
};

export default SocialLinks;
