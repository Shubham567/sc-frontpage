import React, {useEffect, useRef} from 'react';
import PropTypes from 'prop-types';

const iconSize = 100;

const items = [
  {name: "Step 1", heading: "Login to SkillCounty.com",  icon: "A"},
  {name: "Step 2", heading: "Create a test for any job role",  icon: "A"},
  {name: "Step 3", heading: "Invite candidates",  icon: "A"},
  {name: "Step 4", heading: "Candidates take test",  icon: "A"},
  {name: "Step 5", heading: "Review Test Report",  icon: "A"},
  {name: "Step 6", heading: "Shortlist Candidates",  icon: "A"},
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
      ctx.strokeStyle = 'rgba(89,89,89,0.72)';

      ctx.beginPath();
      ctx.lineWidth = 2;
      ctx.setLineDash([10, 6, ]);
      linedItems.forEach((li) => {
        const liPos = li.getBoundingClientRect();
        console.log(liPos,parentPos);
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
    <div ref={parentRef} className="flex flex-wrap gap-4 mt-6 items-stretch align-top">
       <canvas ref={canvasRef} className="absolute -z-10"/>
      {
        items.map(item => <div className="flex flex-col justify-center items-center w-40" key={item.name}>
          <div className="flex bg-gray rounded-full linedItem" style={{width: iconSize, height: iconSize}}>
            <div>

            </div>
          </div>
          <div className="flex text-secondary">{item.name}</div>
          <div className="flex text-sm text-gray-dark text-center">{item.heading}</div>
        </div>)
      }
    </div>
  );
};

LinedItemsSteps.propTypes = {

};

export default LinedItemsSteps;
