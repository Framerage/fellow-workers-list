import React, { useState } from "react";
import "./home.scss";
import avatarMan from "../../assets/images/avatar-man.png";
const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <main className="container">
      <div className="container__header">Fellow workers list</div>
      <div className="container__cards">
        <div className="personCard">
          <div className="personCard__avatar">
            <img src={avatarMan} alt="ava-man" />
            <span>Black Ronald Street</span>
          </div>
          <div className="personCard__descrip">
            <div>
              <span>Descrip</span>
              <div
                className={
                  isMenuOpen ? "descrip__active vision" : "descrip__active"
                }
                role="presentation"
                onClick={() => setIsMenuOpen(true)}
              >
                ...
              </div>
              <div
                className={
                  isMenuOpen
                    ? "descrip__activeBtns"
                    : "descrip__activeBtns vision"
                }
              >
                <div>1</div>
                <div onClick={() => setIsMenuOpen(false)}>x</div>
              </div>
            </div>
            <ul>
              <li>age: 27</li>
              <li>job: front-end</li>
              <li>city: Moscow</li>
              <li>drive: none</li>
            </ul>
          </div>
        </div>
        <div className="personCard">
          <div className="personCard__avatar">
            <img src={avatarMan} alt="ava-man" />
            <span>Black Ronald Street</span>
          </div>
          <div className="personCard__descrip">
            {" "}
            <span>Descrip</span>
            <ul>
              <li>age: 27</li>
              <li>job: front-end</li>
              <li>city: Moscow</li>
              <li>drive: none</li>
            </ul>
          </div>
        </div>
        <div className="personCard">
          <div className="personCard__avatar">
            <img src={avatarMan} alt="ava-man" />
            <span>Black Ronald Streetsdfsdfsdfsdfsdfsdf</span>
          </div>
          <div className="personCard__descrip">
            {" "}
            <span>Descrip</span>
            <ul>
              <li>age: 27</li>
              <li>job: front-end</li>
              <li>city: Moscow</li>
              <li>drive: none</li>
            </ul>
          </div>
        </div>
        <div className="personCard">
          <div className="personCard__avatar">
            <img src={avatarMan} alt="ava-man" />
            <span>Black Ronald Streetsdfsdfsdfsdfsdfsdf</span>
          </div>
          <div className="personCard__descrip">
            <span>Descrip</span>
            <ul>
              <li>age: 27</li>
              <li>job: front-end</li>
              <li>city: Moscow</li>
              <li>drive: none</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};
export default Home;
