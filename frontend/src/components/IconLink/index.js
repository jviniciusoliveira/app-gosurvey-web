import React from 'react';
import { Link } from 'react-router-dom';

const IconLink = ({ icon: Icon, to, ...rest }) => {
  return (
    <Link
      to={to}
      {...rest}
      className="MuiButtonBase-root MuiIconButton-root MuiIconButton-colorInherit"
    >
      <span className="MuiIconButton-label">
        <Icon />
      </span>
      <span className="MuiTouchRipple-root"></span>
    </Link>
  );
};

export default IconLink;
