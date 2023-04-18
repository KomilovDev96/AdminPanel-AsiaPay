import React from "react";
import { Select } from "antd";
import SelectCustomStryled from "./Style";
import { LangueDatra } from "./Select.props";
const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};

const SelectCustumsAntd = () => (
  <SelectCustomStryled>
    <Select
      defaultValue="uzb"
      style={{ width: 120 }}
      onChange={handleChange}
      options={LangueDatra}
    ></Select>
  </SelectCustomStryled>
);

export default SelectCustumsAntd;
