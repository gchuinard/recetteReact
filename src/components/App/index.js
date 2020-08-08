/**
 * Import
 */
import React from 'react';

/**
 * Local import
 */
// Composants enfants éventuels

// Styles et assets
import './app.sass';

// Composants enfants éventuels
// import Header from '../Header';
import Header from 'src/components/Header';
import Ingredients from 'src/components/Ingredients';
import Steps from 'src/components/Steps';


/**
 * Code
 */
function  Recipe()
{
  return (<div id="app"><div id="content">
    <Header />
    <Ingredients />
    <Steps />
  </div>
  </div>);

}

/**
 * Export
 */
export default Recipe;
