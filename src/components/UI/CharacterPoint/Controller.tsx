import React, {useEffect, useState} from "react";
import {View} from "./View";
type ControlCharacterPointProps = {
  param: any;
  isEditActive: boolean;
  paramName: string;
  page: string;
  onChange: (text: string) => void;
};
const Controller: React.FC<ControlCharacterPointProps> = ({
  param,
  isEditActive,
  paramName,
  page,
  onChange,
}) => {
  const [paramsValue, setParamsValue] = useState(param);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (param !== paramsValue) {
        onChange(paramsValue);
      }
    }, 3500);
    return () => clearTimeout(timer);
  }, [paramsValue]);

  return (
    <View
      param={param}
      isEditActive={isEditActive}
      paramName={paramName}
      page={page}
      onChange={onChange}
      paramsValue={paramsValue}
      setParamsValue={setParamsValue}
    />
  );
};
export default Controller;
