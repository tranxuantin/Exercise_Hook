import { useEffect, useState } from "react";

const SelectCar = () => {
  let [selected, setSelected] = useState({ color: "Black", type: "Normal" });
  let [valueSelected, setValueSelected] = useState({
    colorOutput: "",
    typeOutput: "",
  });

  const handleChangeColor = (event) => {
    setSelected({ ...selected, color: `${event.target.value}` });
  };

  const handleChangeType = (event) => {
    setSelected({ ...selected, type: `${event.target.value}` });
  };

  useEffect(() => {
    setValueSelected({
      // ...valueSelected,
      colorOutput: `${selected.color}`,
      typeOutput: `${selected.type}`,
    });
  }, [selected]);

  return (
    <>
      <div className="useEffectCar">
        Select a car :
        <select className="selectType" onChange={handleChangeType}>
          <option>Normal</option>
          <option>Medium</option>
          <option>Super</option>
          <option>Luxury</option>
        </select>
      </div>

      <div className="useEffectCar">
        Select a color :
        <select className="selectColor" onChange={handleChangeColor}>
          <option>Black</option>
          <option>Pink</option>
          <option>Yellow</option>
          <option>Red</option>
        </select>
      </div>

      <h1 style={{ color: "black" }}>
        You selected a {valueSelected.colorOutput} - {valueSelected.typeOutput}{" "}
        car
      </h1>
    </>
  );
};

export default SelectCar;
