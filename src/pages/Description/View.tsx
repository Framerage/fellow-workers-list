import React from "react";
import "./descripPage.scss";
import avatarWoman from "../../assets/images/avatar-woman.png";
import avatarMan from "../../assets/images/avatar-man.png";
import MainCharacters from "components/UI/MainCharacters";
import ExtraCharactersField from "components/UI/ExtraCharactersField";
import {PersonListProps} from "types/appTypes";
type DecripViewProps = {
  personInfo: PersonListProps;
  isEditCharactersOpen: boolean;
  characterValues: [string, any][];
  extraCharacterValues: [string, any][];
  editPersonalParams: (info: PersonListProps) => void;
  setPersonInfo: Function;
  onOpenEdition: () => void;
  onCloseEdition: () => void;
};
export const View: React.FC<DecripViewProps> = ({
  personInfo,
  isEditCharactersOpen,
  characterValues,
  extraCharacterValues,
  editPersonalParams,
  setPersonInfo,
  onOpenEdition,
  onCloseEdition,
}) => {
  return (
    <main className="descripContainer">
      <div className="container__descripPage">
        <div className="descripPage__photo">
          <img
            src={personInfo.gender === "woman" ? avatarWoman : avatarMan}
            alt="personal_photo"
          />
        </div>
        <div className="descripPage__personalDescrip">
          <MainCharacters
            characterValues={characterValues}
            closeEdition={onCloseEdition}
            personInfo={personInfo}
            setPersonInfo={setPersonInfo}
            editPersonalParams={() => editPersonalParams(personInfo)}
            isEditCharactersOpen={isEditCharactersOpen}
            openEdition={onOpenEdition}
          />
          {extraCharacterValues.map(param => (
            <ExtraCharactersField
              key={param[0]}
              textName={param[0]}
              text={String(param[1])}
              changeParam={(text: string) => {
                setPersonInfo({
                  ...personInfo,
                  [param[0]]: text,
                });
              }}
              sentChanges={() => editPersonalParams(personInfo)}
            />
          ))}
        </div>
      </div>
    </main>
  );
};
