import React from "react";
import voyageLogo from "@/assets/logo-voyage.svg";
import voyageText from "@/assets/slave-text.svg";
import SearchIcon from "@mui/icons-material/Search";
import voyageIcon from "@/assets/voyage-cycle.svg";
import peopleIcon from "@/assets/people-cycle.svg";
import documentIcon from "@/assets/documents.svg";
import resourceIcon from "@/assets/resources.svg";
import { Search, SearchIconWrapper, StyledInputBase } from "@/styleMUI";
import MenuButtonHomePage from "@/components/Home/Menu";
import { Link } from "react-router-dom";
import "@/style/homepage.scss";

const HomePage: React.FC = () => {
  return (
    <div id="home-voyagepage-container">
      <div className="menu-home-page">
        <MenuButtonHomePage />
      </div>
      <div className="home-voyagepage-content">
        <div className="header-logo-slave-voyages">
          <div className="voyageLogo-img">
            <img src={voyageLogo} />
          </div>
          <div className="voyage-text-box">
            <div>
              <img src={voyageText} alt="voyageText" />
            </div>
            <div className="voyage-description">
              Explore the origins and forced relocations of more than 12 million
              Enslaved Africans across the world
            </div>
          </div>
        </div>
        <div className="voyages-search-box">
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder=""
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
        </div>
        <div className="voyages-people-places">
          <div className="voyage-page-box">
            <div className="voyages-people-places-title">Voyoages</div>
            <Link to="/voyages">
              <img src={voyageIcon} alt="voyages" />
            </Link>
            <div className="voyages-people-places-subtitle">
              Search by vessel
            </div>
          </div>
          <div className="people-page-box">
            <div className="voyages-people-places-title">People</div>
            <Link to="/past">
              <img src={peopleIcon} alt="voyages" />
            </Link>
            <div className="voyages-people-places-subtitle">Find a person</div>
          </div>
          <div className="place-page-box">
            <div className="voyages-people-places-title">Documents</div>
            <Link to="/places">
              <img src={documentIcon} alt="voyages" width={129} />
            </Link>
            <div className="voyages-people-places-subtitle">
              Read Primary Sources
            </div>
          </div>
          <div className="place-page-box">
            <div className="voyages-people-places-title">Writing</div>
            <Link to="/places">
              <img src={resourceIcon} alt="voyages" width={129} />
            </Link>
            <div className="voyages-people-places-subtitle">
              Lesson Plans, Essays, and More
            </div>
          </div>
        </div>
        <div className="document-resources-container">
          <div className="about-project">
            <div className="about-project-btn">About the Project</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
