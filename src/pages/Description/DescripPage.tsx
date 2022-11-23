import React, { useState } from "react";
import "./descripPage.scss";
import avatarMan from "../../assets/images/avatar-man.png";
import avatarWoman from "../../assets/images/avatar-woman.png";
import { useDispatch, useSelector } from "react-redux";
import { selectPersonList } from "store/personList/selectors";
import { useCookies } from "react-cookie";
import { AppDispatch, PersonListProps } from "types/appTypes";
import EditArea from "components/UI/EditArea/EditArea";
import EditBtn from "components/UI/EditBtn/EditBtn";
import { editPersonParams } from "utils/helpers/helpers";
import { editPersonMainCharacters } from "store/personList/actions";
const DescripPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [cookies] = useCookies(["choosedPerson"]);
  const gettedPersonList = useSelector(selectPersonList);
  const gettedPersonInfo = gettedPersonList.filter(
    (el) => el.id === Number(cookies.choosedPerson)
  );
  const [personInfo, setPersonInfo] =
    useState<PersonListProps[]>(gettedPersonInfo);
  const [isEditCharactersOpen, setIsEditCharactersOpen] = useState(false);
  const [editPersonalCharacters, setEditPersonalCharacters] = useState({
    name: gettedPersonInfo[0].name,
    age: gettedPersonInfo[0].age,
    job: gettedPersonInfo[0].job,
    location: gettedPersonInfo[0].location,
    gender: gettedPersonInfo[0].gender,
  });

  const editPersonalParams = (info: PersonListProps) => {
    setPersonInfo(editPersonParams(gettedPersonList, info));
    dispatch(
      editPersonMainCharacters(editPersonParams(gettedPersonList, info))
    );
    setIsEditCharactersOpen(false);
  };
  return (
    <main className="descripContainer">
      <div className="container__descripPage">
        <div className="descripPage__photo">
          <img
            src={
              editPersonalCharacters.gender === "woman"
                ? avatarWoman
                : avatarMan
            }
            alt="personal_photo"
          />
        </div>
        <div className="descripPage__personalDescrip">
          <div className="personalDescrip__characters">
            <ul>
              <li>
                Name:{" "}
                {isEditCharactersOpen ? (
                  <input
                    className="characters__editRange"
                    type="text"
                    value={editPersonalCharacters.name}
                    onChange={(e) =>
                      setEditPersonalCharacters({
                        ...editPersonalCharacters,
                        name: e.target.value,
                      })
                    }
                  />
                ) : (
                  editPersonalCharacters.name
                )}{" "}
              </li>
              <li>
                Age:{" "}
                {isEditCharactersOpen ? (
                  <input
                    className="characters__editRange"
                    type="text"
                    value={editPersonalCharacters.age}
                    onChange={(e) =>
                      setEditPersonalCharacters({
                        ...editPersonalCharacters,
                        age: Number(e.target.value),
                      })
                    }
                  />
                ) : (
                  editPersonalCharacters.age
                )}{" "}
              </li>
              <li>
                Job:{" "}
                {isEditCharactersOpen ? (
                  <input
                    className="characters__editRange"
                    type="text"
                    value={editPersonalCharacters.job}
                    onChange={(e) =>
                      setEditPersonalCharacters({
                        ...editPersonalCharacters,
                        job: e.target.value,
                      })
                    }
                  />
                ) : (
                  editPersonalCharacters.job
                )}{" "}
              </li>
              <li>
                Gender:{" "}
                {isEditCharactersOpen ? (
                  <input
                    className="characters__editRange"
                    type="text"
                    value={editPersonalCharacters.gender}
                    onChange={(e) =>
                      setEditPersonalCharacters({
                        ...editPersonalCharacters,
                        gender: e.target.value,
                      })
                    }
                  />
                ) : (
                  editPersonalCharacters.gender
                )}{" "}
              </li>
              <li>
                Location:{" "}
                {isEditCharactersOpen ? (
                  <input
                    className="characters__editRange"
                    type="text"
                    value={editPersonalCharacters.location}
                    onChange={(e) =>
                      setEditPersonalCharacters({
                        ...editPersonalCharacters,
                        location: e.target.value,
                      })
                    }
                  />
                ) : (
                  editPersonalCharacters.location
                )}{" "}
              </li>
            </ul>
            {isEditCharactersOpen ? (
              <div className="characters__controlBtns">
                <button
                  className="activeBtns__controlBtn"
                  onClick={() =>
                    editPersonalParams({
                      ...editPersonalCharacters,
                      id: personInfo[0].id,
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
          <EditArea text={"History of person"} />
          <EditArea text={"Some text"} />
        </div>
      </div>
    </main>
  );
};
export default DescripPage;
