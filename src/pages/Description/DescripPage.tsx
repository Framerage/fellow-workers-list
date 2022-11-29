import React, {useCallback, useState} from "react";
import "./descripPage.scss";
import avatarMan from "../../assets/images/avatar-man.png";
import avatarWoman from "../../assets/images/avatar-woman.png";
import {useDispatch, useSelector} from "react-redux";
import {selectPersonList} from "store/personList/selectors";
import {useCookies} from "react-cookie";
import {AppDispatch, PersonListProps} from "types/appTypes";
import EditArea from "components/UI/EditArea/EditArea";
import EditBtn from "components/UI/EditBtn/EditBtn";
import {editPersonParams} from "utils/helpers/helpers";
import CharacterPoint from "components/UI/CharacterPoint/CharacterPoint";
import {editPersonCharacters} from "store/personList/actions";

const DescripPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [cookies] = useCookies(["choosedPerson"]);
  const gettedPersonList = useSelector(selectPersonList);
  // const gettedPersonInfo = gettedPersonList.find(
  //   el => el.id === Number(cookies.choosedPerson),
  // );
  const getPersonInfo = useCallback(() => {
    if (!!gettedPersonList === true) {
      return gettedPersonList.filter(
        el => el.id === Number(cookies.choosedPerson),
      )[0];
    }
    // else {
    //   return
    // {
    //     name: "",
    //     age: "",
    //     id: 0,
    //     location: "",
    //     job: "",
    //     gender: "",
    //     history: "",
    //     comment: "",
    //   }
    // }
  }, [gettedPersonList]);

  // console.log("1");
  // TODO: add function to useState ( personInfo)
  const [personInfo, setPersonInfo] = useState<PersonListProps | any>(
    getPersonInfo(),
    // ||    {
    //   name: "",
    //   age: "",
    //   id: 0,
    //   location: "",
    //   job: "",
    //   gender: "",
    //   history: "",
    //   comment: "",
    // },
  );
  const [isEditCharactersOpen, setIsEditCharactersOpen] = useState(false);
  const [editCharacters, setEditCharacters] = useState(personInfo);
  const descripEntries = Object.entries(editCharacters);
  const characterValues = descripEntries.filter(
    el => el[0] !== "history" && el[0] !== "comments" && el[0] !== "id",
  );
  const test = descripEntries.filter(
    el => !["history", "comments", "id"].includes(el[0]),
  );
  console.log(test);
  // ['1', '2','3'].includes(el[0])
  const extraCharacterValues = descripEntries.filter(
    el => el[0] === "history" || el[0] === "comments",
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
            src={editCharacters.gender === "woman" ? avatarWoman : avatarMan}
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
                    setEditCharacters({
                      ...editCharacters,
                      [characterName[0]]: text,
                    })
                  }
                  // editCharacters={editCharacters}
                  // setEditCharacters={setEditCharacters}
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
                      ...editCharacters,
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
            <EditArea
              key={param[0]}
              textName={param[0]}
              text={String(param[1])}
              editCharacters={editCharacters}
              setEditCharacters={setEditCharacters}
              sentChanges={() =>
                editPersonalParams({
                  ...editCharacters,
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
