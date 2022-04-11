import React from 'react';
import PropTypes from 'prop-types';

const TopNav = props => {
  return (
    <nav className="w-100">
      <div className="w-100  flex justify-between align-center">
        <div className="flex gap-x-1">
          <div className="tracking-widest text-xl text-red-500">SkillCounty</div>
        </div>
        <div className="flex gap-x-1">
          <div>
            Campus Placement
          </div>
          <div>Pricing</div>
          <div>Solutions</div>
        </div>
        <div className="flex gap-x-1 justify-end">
          <div>Login</div>
          <div>Signup</div>
        </div>
      </div>
    </nav>
  );
};

TopNav.propTypes = {

};

export default TopNav;
