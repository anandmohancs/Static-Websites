import { useEffect, useState } from 'react';
import IconifyIcon from './wrappers/IconifyIcon';
import { Link } from 'react-router-dom';

const Switcher = () => {
  const colorClasses = ['color1', 'color2', 'color3', 'color4', 'color5', 'color6'];
  const colors = ['primary', 'info','warning','orange', 'purple', 'success'];

  const [open, setOpen] = useState(false);
  const [color, setColor] = useState('primary');

  useEffect(() => {
    document.body.setAttribute('data-color', color);
  }, [color]);

  const handleColorChange = (selectedColor: string) => {
    setColor(selectedColor);
  };

  return (
    <div id="style-switcher" style={open ? { left: '0' } : {}}>
      <div>
        <h3 className="fw-medium mb-0">Select Your Choice</h3>
        <hr className="hr-dashed my-3" />
        <ul className="pattern">
          {colors.map((color, idx) => (
            <li key={idx}>
              <Link
                to=""
                className={`color-block ${colorClasses[idx]}`} 
                onClick={(e) => {
                  e.preventDefault(); 
                  handleColorChange(color);
                }}
             />
            </li>
          ))}
        </ul>
      </div>
      <div className="bottom">
        <Link
          to=""
          onClick={() => setOpen(!open)}
          className="settings rounded-end"
        >
          <IconifyIcon icon="la:paint-brush" className="fs-22" />
        </Link>
      </div>
    </div>
  );
};

export default Switcher;
