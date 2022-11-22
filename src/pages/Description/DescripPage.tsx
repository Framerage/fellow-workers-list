import React, { useState } from "react";
import "./descripPage.scss";
import avatarMan from "../../assets/images/avatar-man.png";
import avatarWoman from "../../assets/images/avatar-woman.png";
import { useSelector } from "react-redux";
import { selectPersonList } from "store/personList/selectors";
import { useCookies } from "react-cookie";
import { PersonListProps } from "types/appTypes";
import EditArea from "components/UI/EditArea/EditArea";
import EditBtn from "components/UI/EditBtn/EditBtn";
import CharacterPoint from "components/UI/CharacterPoint/CharacterPoint";
const DescripPage = () => {
  const [cookies] = useCookies(["choosedPerson"]);
  const gettedPersonInfo = useSelector(selectPersonList).filter(
    (el) => el.id === Number(cookies.choosedPerson)
  );
  const [personInfo, setPersonInfo] =
    useState<PersonListProps[]>(gettedPersonInfo);
  const [isEditCharactersOpen, setIsEditCharactersOpen] = useState(false);
  return (
    <main className="descripContainer">
      <div className="container__descripPage">
        <div className="descripPage__photo">
          <img
            src={personInfo[0].gender === "woman" ? avatarWoman : avatarMan}
            alt="personal_photo"
          />
        </div>
        <div className="descripPage__personalDescrip">
          <div className="personalDescrip__characters">
            <ul>
              <CharacterPoint
                paramName={"Name"}
                param={personInfo[0].name}
                condition={isEditCharactersOpen}
              />
              <CharacterPoint
                paramName={"Age"}
                param={personInfo[0].age}
                condition={isEditCharactersOpen}
              />
              <CharacterPoint
                paramName={"Gender"}
                param={personInfo[0].gender}
                condition={isEditCharactersOpen}
              />
              <CharacterPoint
                paramName={"Location"}
                param={personInfo[0].location}
                condition={isEditCharactersOpen}
              />
              <CharacterPoint
                paramName={"Job"}
                param={personInfo[0].job}
                condition={isEditCharactersOpen}
              />
            </ul>
            {isEditCharactersOpen ? (
              <div className="characters__controlBtns">
                <button className="activeBtns__controlBtn">OK</button>
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
          <EditArea text={"History of person"} />
          <EditArea text={"Some text"} />
        </div>
      </div>
    </main>
  );
};
export default DescripPage;
