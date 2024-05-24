import { useEffect, useRef, useState } from "react";
import svg from "../../assets/icons.svg";
import {
  DropdownContainer,
  DropdownHeader,
  DropdownIcon,
  DropdownList,
  DropdownListContainer,
} from "./AsideFilterStyles";

const Dropdown = ({ options, selectedOption, setSelectedOption }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const handleSelectOption = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <DropdownContainer ref={dropdownRef}>
      <DropdownHeader onClick={() => setIsOpen(!isOpen)}>
        <DropdownIcon>
          <use href={`${svg}#icon-map-pin`}></use>
        </DropdownIcon>
        {selectedOption || "Choose city"}
      </DropdownHeader>
      {isOpen && (
        <DropdownListContainer>
          <DropdownList>
            {options.map((option) => (
              <li key={option} onClick={() => handleSelectOption(option)}>
                {option}
              </li>
            ))}
          </DropdownList>
        </DropdownListContainer>
      )}
    </DropdownContainer>
  );
};

export default Dropdown;
