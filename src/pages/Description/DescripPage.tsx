import React, {useCallback, useState} from "react";
import "./descripPage.scss";
import avatarMan from "../../assets/images/avatar-man.png";
import avatarWoman from "../../assets/images/avatar-woman.png";
import {useDispatch, useSelector} from "react-redux";
import {selectPersonList} from "store/personList/selectors";
import {useCookies} from "react-cookie";
import {AppDispatch, PersonListProps} from "types/appTypes";
import EditBtn from "components/UI/EditBtn/EditBtn";
import {editPersonParams} from "utils/helpers/helpers";
import CharacterPoint from "components/UI/CharacterPoint/CharacterPoint";
import {editPersonCharacters} from "store/personList/actions";
import ExtraCharactersField from "components/UI/ExtraCharactersField";

const DescripPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [cookies] = useCookies(["choosedPerson"]);
  const gettedPersonList = useSelector(selectPersonList);

  const getPersonInfo = useCallback(() => {
    if (gettedPersonList) {
      return gettedPersonList.filter(
        el => el.id === Number(cookies.choosedPerson),
      )[0];
    }
    // setEditCharacters(personInfo);
  }, [gettedPersonList]);

  // TODO: add function to useState ( personInfo)
  // TODO: разобраться с прокидыванием пропсов, двухстороннее связывание
  const [personInfo, setPersonInfo] = useState<PersonListProps | any>(
    getPersonInfo(),
  );
  const [isEditCharactersOpen, setIsEditCharactersOpen] = useState(false);
  // const [editCharacters, setEditCharacters] = useState(personInfo);
  const [descripEntries] = useState(Object.entries(personInfo));
  // console.log(descripEntries);
  const characterValues = descripEntries.filter(
    el => !["history", "comments", "id"].includes(el[0]),
  );
  const extraCharacterValues = descripEntries.filter(el =>
    ["history", "comments"].includes(el[0]),
  );

  const editPersonalParams = (info: PersonListProps) => {
    setPersonInfo(editPersonParams(gettedPersonList, info));
    dispatch(editPersonCharacters(editPersonParams(gettedPersonList, info)));
    setIsEditCharactersOpen(false);
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
          <div className="personalDescrip__characters">
            <ul>
              {characterValues.map(characterName => (
                <CharacterPoint
                  key={characterName[0]}
                  page="descrip"
                  param={characterName[1]}
                  paramName={characterName[0]}
                  onChange={(text: string) =>
                    setPersonInfo({
                      ...personInfo,
                      [characterName[0]]: text,
                    })
                  }
                  isEditActive={isEditCharactersOpen}
                />
              ))}
            </ul>
            {isEditCharactersOpen ? (
              <div className="characters__controlBtns">
                <button
                  className="activeBtns__controlBtn"
                  onClick={() =>
                    editPersonalParams({
                      ...personInfo,
                      id: personInfo.id,
                    })
                  }
                >
                  OK
                </button>
                <button
                  className="activeBtns__controlBtn"
                  onClick={() => setIsEditCharactersOpen(false)}
                >
                  X
                </button>
              </div>
            ) : (
              <EditBtn onClick={() => setIsEditCharactersOpen(true)} />
            )}
          </div>
          {extraCharacterValues.map(param => (
            <ExtraCharactersField
              key={param[0]}
              textName={param[0]}
              text={String(param[1])}
              changeParam={(text: string) => {
                console.log(text, " text");
                setPersonInfo({
                  ...personInfo,
                  [param[0]]: text,
                });
              }}
              sentChanges={() =>
                editPersonalParams({
                  ...personInfo,
                  id: personInfo.id,
                })
              }
            />
          ))}
        </div>
      </div>
    </main>
  );
};
export default DescripPage;
