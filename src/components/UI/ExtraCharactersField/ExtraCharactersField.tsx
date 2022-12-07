import React, {useState} from "react";
import EditExtraCharacters from "../EditExtraCharacters/Controller";
import ExtraCharacters from "../ExtraCharacters";
type ExtraCharactersProps = {
  text: string;
  textName: string;
  sentChanges: Function;
  changeParam: Function;
};
const ExtraCharactersField = ({
  text,
  textName,
  changeParam,
  sentChanges,
}: ExtraCharactersProps) => {
  const [isDetailedEditOpen, setIsDetailedEditOpen] = useState(false);

  return (
    <>
      {isDetailedEditOpen ? (
        <EditExtraCharacters
          text={text}
          textName={textName}
          closeEditArea={() => setIsDetailedEditOpen(false)}
          sentChanges={sentChanges}
          changeParam={changeParam}
        />
      ) : (
        <ExtraCharacters
          text={text}
          textName={textName}
          openEditArea={() => setIsDetailedEditOpen(true)}
        />
      )}
    </>
  );
};
export default ExtraCharactersField;
