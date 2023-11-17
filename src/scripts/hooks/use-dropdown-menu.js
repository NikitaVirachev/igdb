import { useState } from 'react';

const useDropdownMenu = function () {
  const [isDrop, setIsDrop] = useState(false);

  const toggleDropdownMenu = function () {
    setIsDrop((prev) => !prev);
  };

  return { isDrop, toggleDropdownMenu };
};

export default useDropdownMenu;
