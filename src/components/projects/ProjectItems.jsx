import React from 'react';
import { HiOutlineArrowSmRight } from "react-icons/hi";

const ProjectItems = ({item}) => {
  return (
        <div className="project__card" key={item.id}>
            <img className="project__img" src={item.image} alt="" />
            <h3 className="project__title">{item.title}</h3>
            <p className="project__description">{item.description}</p> {/* Display description */}
            <div className="project__languages">
        {item.languages.map((lang, index) => (
          <img key={index} src={lang.logo} alt={lang.name} title={lang.name} className="project__language-logo" />
        ))}
      </div>
            <a href={item.url} className="project__button" target="_blank" rel="noopener noreferrer">
        Demo <HiOutlineArrowSmRight className="project__button-icon" />
      </a>
        </div>
    );
}

export default ProjectItems;