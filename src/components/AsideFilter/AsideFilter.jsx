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
const AsideFilter = () => {
  return (
    <AsStick>
      <AsideContainer>
        <FormLocation>
          <label>Location</label>
          <input></input>
          <svg>
            <use href={`${svg}#icon-map-pin`}></use>
          </svg>
        </FormLocation>

        <TitlePage>Filters</TitlePage>

        <TitleList>Vehicle equipment</TitleList>
        <FormFilter>
          <label>
            <input type="checkbox" name="answer" value="AC" />
            <CheckboxWrap>
              <svg>
                <use href={`${svg}#icon-ac`} />
              </svg>
              <span>AC</span>
            </CheckboxWrap>
          </label>
          <label>
            <input type="checkbox" name="answer" value="automatic" />
            <CheckboxWrap>
              <svg>
                <use href={`${svg}#icon-ac`} />
              </svg>
              <span>Automatic</span>
            </CheckboxWrap>
          </label>
          <label>
            <input type="checkbox" name="answer" value="kitchen" />
            <CheckboxWrap>
              <svg>
                <use href={`${svg}#icon-kitchen`} />
              </svg>
              <span>Kitchen</span>
            </CheckboxWrap>
          </label>
          <label>
            <input type="checkbox" name="answer" value="tv" />
            <CheckboxWrap>
              <svg>
                <use href={`${svg}#icon-tv`} />
              </svg>
              <span>TV</span>
            </CheckboxWrap>
          </label>
          <label>
            <input type="checkbox" name="answer" value="shower" />
            <CheckboxWrap>
              <svg>
                <use href={`${svg}#icon-shower`} />
              </svg>
              <span>Shower/WC</span>
            </CheckboxWrap>
          </label>
        </FormFilter>

        <TitleList>Vehicle type</TitleList>

        <FormFilterRadio>
          <label>
            <input type="radio" name="type" value="van" />
            <RadioWrap>
              <svg>
                <use href={`${svg}#icon-camper`} />
              </svg>
              <span>Van</span>
            </RadioWrap>
          </label>
          <label>
            <input type="radio" name="type" value="FullyIntegrated" />
            <RadioWrap>
              <svg>
                <use href={`${svg}#icon-camper2`} />
              </svg>
              <span>Fully Integrated</span>
            </RadioWrap>
          </label>
          <label>
            <input type="radio" name="type" value="alcove" />
            <RadioWrap>
              <svg>
                <use href={`${svg}#icon-camper3`} />
              </svg>
              <span>Alcove</span>
            </RadioWrap>
          </label>
        </FormFilterRadio>
        <Button>Search</Button>
      </AsideContainer>
    </AsStick>
  );
};

export default AsideFilter;
