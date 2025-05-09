import type { MouseEventHandler } from 'react';

interface IconButtonProps {
  icon: string;
  handleClick?: MouseEventHandler;
}

const IconButton = ({ icon, handleClick }: IconButtonProps) => {
  return (
    <i className="material-icons" onClick={handleClick}>
      {icon}
    </i>
  );
};

export default IconButton;
