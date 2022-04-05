import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import Signin from '../Signin';
import Login from '../Login'

function Nav(props) {
  const {
    pages = [],
    setCurrentPage,
    currentPage,
  } = props;

  useEffect(() => {
    document.title = capitalizeFirstLetter(currentPage.name);
  }, [currentPage]);

  return (    
      <nav>
        <ul className="flex-row">
          {pages.map((Page) => (
            <li
              className={`mx-5 ${
                currentPage.name === Page.name && 'navActive'
                }`}
              key={Page.name}
            >
              <span
                onClick={() => setCurrentPage(Page)}
              >
                {capitalizeFirstLetter(Page.name)}
              </span>
            </li>
          ))}
          <li> <Signin /> </li>
          <li> < Login /> </li>
        </ul>
      </nav>
  );
}

export default Nav;