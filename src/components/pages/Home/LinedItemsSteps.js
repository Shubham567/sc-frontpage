import React, {useEffect, useRef} from 'react';
import PropTypes from 'prop-types';

import {BsFillPersonCheckFill, BsFillPersonPlusFill , BsNewspaper, BsFillFileEarmarkBarGraphFill, BsFillPatchCheckFill} from 'react-icons/bs';
import {AiFillFolderAdd} from 'react-icons/ai';

const iconSize = 100;

const items = [
  {name: "Step 1", heading: "Login to SkillCounty.com",  icon: BsFillPersonCheckFill},
  {name: "Step 2", heading: "Create a test for any job role",  icon: AiFillFolderAdd},
  {name: "Step 3", heading: "Invite candidates",  icon: BsFillPersonPlusFill},
  {name: "Step 4", heading: "Candidates take test",  icon: BsNewspaper},
  {name: "Step 5", heading: "Review Test Report",  icon: BsFillFileEarmarkBarGraphFill},
  {name: "Step 6", heading: "Shortlist Candidates",  icon: BsFillPatchCheckFill},
]

const LinedItemsSteps = props => {
  const canvasRef = useRef();
  const parentRef = useRef();

  useEffect(() => {

    const halfIconSize = iconSize / 2;
    const ro = new ResizeObserver(() => {
      const parentPos = parentRef.current.getBoundingClientRect();
      canvasRef.current.width = parentPos.width;
      canvasRef.current.height = parentPos.height;
      const ctx = canvasRef.current.getContext("2d");
      ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);

      const linedItems = document.querySelectorAll(".linedItem");
      ctx.strokeStyle = 'rgb(215,215,215)';

      ctx.beginPath();
      ctx.lineWidth = 2;
      ctx.setLineDash([10, 6, ]);
      linedItems.forEach((li) => {
        const liPos = li.getBoundingClientRect();
        ctx.lineTo(liPos.left-parentPos.left + halfIconSize, liPos.top - parentPos.top + halfIconSize);
      })
      ctx.stroke();
    })

    ro.observe(parentRef.current);

    return () => {
      ro.disconnect();
    }



  }, [])

  return (
    <div ref={parentRef} className="flex flex-wrap gap-4 mt-6 justify-center">
       <canvas ref={canvasRef} className="absolute -z-10"/>
      {
        items.map(Item => <div className="flex flex-col justify-center self-stretch items-center w-40" key={Item.name}>
          <div className="flex bg-white outline-offset-1 border border-gray justify-center items-center rounded-full linedItem" style={{width: iconSize, height: iconSize}}>
            <div className="text-4xl text-primary">
              <Item.icon />
            </div>
          </div>
          <div className="flex text-secondary">{Item.name}</div>
          <div className="flex text-sm text-gray-dark text-center">{Item.heading}</div>
        </div>)
      }
    </div>
  );
};

LinedItemsSteps.propTypes = {

};

export default LinedItemsSteps;
