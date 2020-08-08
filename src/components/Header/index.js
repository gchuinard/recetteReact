import React from 'react';

import './styles.sass';
import {content} from 'src/data/content'; 

function Header() {
  // return React.createElement('div', 'TODO: implémenter le header');
  return <div id="app-header">
    <h1>{content.title}</h1>
    <span>Auteur : {content.author}</span>
  </div>;
}

export default Header;
