import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { applyFilters } from "../../redux/adverts/advertsSlice";
import { selectAdverts } from "../../redux/adverts/selectors";
import Dropdown from "./Dropdown.jsx";
import {
  AsideContainer,
  FormLocation,
  TitlePage,
  TitleList,
  Button,
  FormFilter,
  CheckboxWrap,
  FormFilterRadio,
  RadioWrap,
  AsStick,
} from "./AsideFilterStyles";
import svg from "../../assets/icons.svg";


const iconMapping = {
  AC: "icon-ac",
  automatic: "icon-transm",
  kitchen: "icon-kitchen",
  TV: "icon-tv",
  shower: "icon-shower",
  van: "icon-camper",
  fullyIntegrated: "icon-camper2",
  alcove: "icon-camper3",
};

const displayNames = {
  AC: "AC",
  automatic: "Automatic",
  kitchen: "Kitchen",
  TV: "TV",
  shower: "Shower",
  van: "Van",
  fullyIntegrated: "Fully Integrated",
  alcove: "Alcove",
};

const AsideFilter = () => {
  const [location, setLocation] = useState("");
  const [cities, setCities] = useState([]);
  const [equipment, setEquipment] = useState([]);
  const [vehicleType, setVehicleType] = useState("");
  const adverts = useSelector(selectAdverts);
  const dispatch = useDispatch();

  useEffect(() => {
    const uniqueCities = [...new Set(adverts.map((advert) => advert.location))];
    setCities(uniqueCities);
  }, [adverts]);

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setEquipment([...equipment, value]);
    } else {
      setEquipment(equipment.filter((item) => item !== value));
    }
  };

  const handleRadioChange = (e) => {
    setVehicleType(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(applyFilters({ location, equipment, vehicleType }));
  };
  
  return (
    <AsStick>
      <AsideContainer>
        <FormLocation>
          <label htmlFor="city">Location</label>
          <Dropdown
            options={cities}
            selectedOption={location}
            setSelectedOption={setLocation}
          />
        </FormLocation>

        <TitlePage>Filters</TitlePage>

        <TitleList>Vehicle equipment</TitleList>
        <FormFilter>
          {["AC", "automatic", "kitchen", "TV", "shower"].map((item) => (
            <label key={item}>
              <input
                type="checkbox"
                value={item}
                onChange={handleCheckboxChange}
              />
              <CheckboxWrap>
                <svg>
                  <use href={`${svg}#${iconMapping[item]}`} />
                </svg>
                <span> {displayNames[item]}</span>
              </CheckboxWrap>
            </label>
          ))}
        </FormFilter>

        <TitleList>Vehicle type</TitleList>

        <FormFilterRadio>
          {["van", "fullyIntegrated", "alcove"].map((type) => (
            <label key={type}>
              <input
                type="radio"
                name="type"
                value={type}
                onChange={handleRadioChange}
              />
              <RadioWrap>
                <svg>
                  <use href={`${svg}#${iconMapping[type]}`} />
                </svg>
                <span>{displayNames[type]}</span>
              </RadioWrap>
            </label>
          ))}
        </FormFilterRadio>
        <Button onClick={handleSubmit}>Search</Button>
      </AsideContainer>
    </AsStick>
  );
};

export default AsideFilter;
