import React, {useState} from "react";
import {View} from "./View";
type ControllerEditExtraCharactersProps = {
  closeEditArea: Function;
  text: string;
  textName: string;
  sentChanges: Function;
  changeParam: Function;
};
const Controller: React.FC<ControllerEditExtraCharactersProps> = ({
  text,
  textName,
  closeEditArea,
  sentChanges,
  changeParam,
}) => {
  const [specDescrip, setSpecDescrip] = useState(text);

  const changeChoosedParam = (text: any) => {
    setSpecDescrip(text);
    changeParam(text);
  };
  const onSentParams = () => {
    sentChanges();
    closeEditArea();
  };
  const onCloseEdit = () => {
    closeEditArea();
    setSpecDescrip("");
  };
  return (
    <View
      changeChoosedParam={changeChoosedParam}
      onCloseEdit={onCloseEdit}
      onSentParams={onSentParams}
      textName={textName}
      specDescrip={specDescrip}
    />
  );
};
export default Controller;
