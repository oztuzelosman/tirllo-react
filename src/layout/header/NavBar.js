//STYLES
import "./NavBar.css";
//SVGS
import { ReactComponent as SearchIcon } from "../../img/search.svg";
import { ReactComponent as Bookmark } from "../../img/bookmarks.svg";
import { ReactComponent as Bubbles } from "../../img/bubbles.svg";

export default function NavBar() {
  return (
    <div className="header">

      {/*  LOGO */}
      <img
        src={require("../../img/logo.png")}
        alt="Trillo Logo"
        className="logo"
      />

      {/* SEARCHBAR */}
      <form className="search">
        <input
          type="text"
          className="search__input"
          placeholder="Search Hotels"
        />
        <button className="search__button">
          <SearchIcon className="search__icon" />
        </button>
      </form>

      {/*  USERNAV */}
      <div className="user-nav">
        <div className="user-nav__icon-box">
          <Bookmark className="user-nav__icon" />
          <span className="user-nav__notification">7</span>
        </div>
        <div className="user-nav__icon-box">
          <Bubbles className="user-nav__icon" />
          <span className="user-nav__notification">13</span>
        </div>
        <div className="user-nav__user">
          <img
            src={require("../../img/osman.jpeg")}
            alt=""
            className="user-nav__user-photo"
          />
          <span className="user-nav__user-name">Osman</span>
        </div>
      </div>
    </div>
  );
}
