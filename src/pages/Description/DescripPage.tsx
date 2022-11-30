import React, {useState} from "react";
import "./descripPage.scss";
import avatarMan from "../../assets/images/avatar-man.png";
import avatarWoman from "../../assets/images/avatar-woman.png";
import {useDispatch, useSelector} from "react-redux";
import {selectPersonList} from "store/personList/selectors";
import {useCookies} from "react-cookie";
import {AppDispatch, PersonListProps} from "types/appTypes";
import {editPersonParams} from "utils/helpers/helpers";
import {editPersonCharacters} from "store/personList/actions";
import ExtraCharactersField from "components/UI/ExtraCharactersField";
import {EXTRA_CHARACTERS, MAIN_CHARACTERS} from "utils/constances/constances";
import MainCharacters from "components/UI/MainCharacters";

const DescripPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [cookies] = useCookies(["choosedPerson"]);
  const gettedPersonList = useSelector(selectPersonList);

  // TODO: add function to useState ( personInfo)
  const [personInfo, setPersonInfo] = useState<PersonListProps | any>(
    gettedPersonList.find(el => el.id === cookies.choosedPerson),
  );
  const [isEditCharactersOpen, setIsEditCharactersOpen] = useState(false);
  const [descripEntries, setDescripEntries] = useState(() =>
    Object.entries(personInfo),
  );
  const [characterValues, setCharacterValues] = useState(() =>
    descripEntries.filter(el => MAIN_CHARACTERS.includes(el[0])),
  );
  const [extraCharacterValues, setExtraCharacterValues] = useState(() =>
    descripEntries.filter(el => EXTRA_CHARACTERS.includes(el[0])),
  );

  const editPersonalParams = (info: PersonListProps) => {
    setDescripEntries(Object.entries(info));
    setCharacterValues(
      Object.entries(info).filter(el => MAIN_CHARACTERS.includes(el[0])),
    );
    setExtraCharacterValues(
      Object.entries(info).filter(el => EXTRA_CHARACTERS.includes(el[0])),
    );
    setPersonInfo(
      editPersonParams(gettedPersonList, info).find(
        el => el.id === cookies.choosedPerson,
      ),
    );
    dispatch(editPersonCharacters(editPersonParams(gettedPersonList, info)));
  };

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
            closeEdition={() => setIsEditCharactersOpen(false)}
            personInfo={personInfo}
            setPersonInfo={setPersonInfo}
            editPersonalParams={() => editPersonalParams(personInfo)}
            isEditCharactersOpen={isEditCharactersOpen}
            openEdition={() => setIsEditCharactersOpen(true)}
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
export default DescripPage;
