import DropdownButton from "react-bootstrap/DropdownButton";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getColorData,
  getManufacturerData,
  getCarData,
} from "../store/car-actions";
import { useHistory } from "react-router-dom";

const LeftNav = () => {
  const dispatch = useDispatch();
  const [locationKeys, setLocationKeys] = useState([]);
  const history = useHistory();
  const carColorsData = useSelector((state) => state.cars.colors);
  const manufacturersData = useSelector((state) => state.cars.manufacturers);
  const pageNumber = useSelector((state) => state.cars.page);

  const [selectedCarColor, setSelectedCarColor] = useState(
    history.location ?.search ?.split("&")[0] ?.split("=")[1] || ""
  );
  const [selectedManufacturer, setSelectedManufacturer] = useState(
    history.location ?.search ?.split("&")[1] ?.split("=")[1] || ""
  );

  useEffect(() => {
    dispatch(getColorData());
    dispatch(getManufacturerData());
  }, []);

  let manufacturers = [];
  if (
    manufacturersData &&
    manufacturersData.manufacturers &&
    manufacturersData.manufacturers.length
  ) {
    manufacturers = manufacturersData.manufacturers.map((value, idx) => {
      let dropDownItem = '';
      if (idx == 0) {
        dropDownItem = (
          <Dropdown.Item eventKey={idx} key={idx + "manufacturer"}>
            All manufacturers
        </Dropdown.Item>
        )
      }
      return (
        <>
          {dropDownItem}
          <Dropdown.Item eventKey={value.name} key={value.name}>
            {value.name}
          </Dropdown.Item>
        </>
      );
    });
  }

  let carColors = [];
  if (carColorsData && carColorsData.colors && carColorsData.colors.length) {
    carColors = carColorsData.colors.map((value, idx) => {
      let dropDownItem = '';
      if (idx == 0) {
        dropDownItem = (
          <Dropdown.Item eventKey={idx} key={idx + "color"}>
            All car colors
        </Dropdown.Item>
        )
      }
      return (
        <>
          {dropDownItem}
          <Dropdown.Item eventKey={value} key={value}>
            {value}
          </Dropdown.Item>
        </>
      );
    });
  }

  const handleCarsSelect = (data) => {
    if (data === "0") {
      setSelectedCarColor("");
    } else {
      setSelectedCarColor(data);
    }

  };

  const handleManufacturerSelect = (data) => {
    if (data === "0") {
      setSelectedManufacturer("");
    } else {
      setSelectedManufacturer(data);
    }

  };

  const filtercars = (isFromHistory) => {
    if (isFromHistory !== true) {
      const url = `/Cars?color=${selectedCarColor}&manufacturer=${selectedManufacturer}`;
      history.push(url);
    }

    dispatch(getCarData(selectedManufacturer, selectedCarColor, pageNumber));
  };

  return (
    <div className="filters">
      <div>
        <span>Color</span>
        <DropdownButton
          key="color"
          id="colorFilter"
          drop="down"
          data-testid="colorFilterId"
          title={selectedCarColor || "All car colors"}
          className="dropdown"
          onSelect={handleCarsSelect}
        >
          {carColors}
        </DropdownButton>
      </div>

      <div>
        <span>Manufacturer</span>
        <DropdownButton
          key="manufacturer"
          id="manufacturerFilter"
          drop="down"
          className="dropdown"
          data-testid="manufacturerFilterId"
          title={selectedManufacturer || "All manufacturers"}
          onSelect={handleManufacturerSelect}
        >
          {manufacturers}
        </DropdownButton>
      </div>
      <div>
        <Button className="filter" id="filter-button" onClick={filtercars}>
          Filter
        </Button>
      </div>
    </div>
  );
};
export default LeftNav;
