import React from 'react';
import PropTypes from 'prop-types';

const TopNav = props => {
  return (
    <nav className="w-100">
      <div className="w-100  flex justify-between align-center text-white">
        <div className="flex gap-x-1">
          <div className="tracking-wide text-xl">SkillCounty</div>
        </div>
        <div className="flex gap-x-5">
          <div>
            Campus Placement
          </div>
          <div>Pricing</div>
          <div>Solutions</div>
        </div>
        <div className="flex gap-x-5 justify-end">
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
