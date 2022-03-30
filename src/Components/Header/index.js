import React from 'react';
import coverImage from '../../assets/large/glacier.jpeg';

function Header(props) {

  return (
    <header className="flex-row space-between px-1">
      <h1>New World Water</h1>
      <img src={coverImage} alt="Glacier Water"></img>
      {props.children}
    </header>
  );
}

export default Header;