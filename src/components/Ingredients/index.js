import React from 'react';
import {ingredients_list} from 'src/data/content'; 

import './styles.sass';

let datas;
const nbr = 8;

function quantite(ingredients_list, nbr)
{
  ingredients_list.farine *= nbr;
  ingredients_list.beurre *= nbr;
  ingredients_list.lait *= nbr;
  ingredients_list.oeuf *= nbr;
  if (nbr % 2 === 0)
  {
    ingredients_list.sucre *= nbr / 2;
  }
  else
  {
    ingredients_list.sucre *= ((nbr / 2) - 0.5);
  }
  return (ingredients_list);
}

datas = quantite(ingredients_list, nbr);

const Ingredients = () => <div>
  <h2>Ingrédients</h2>
  <ul id="ingredients">
    <li>Farine : {datas.farine} g.</li>
    <li>Lait : {datas.lait} litre</li>
    <li>Sucre : {datas.sucre} c a s</li>
    <li>Beurre : {datas.beurre} g.</li>
    <li>Oeufs : {datas.oeuf}</li>
    <li>Sel : {datas.sel} pincée</li>
  </ul>
</div>;

/*
ingredients_list = quantite(ingredients_list, nbr);

const Ingredients = () => <div>
  <h2>Ingrédients</h2>
  <ul id="ingredients">
    <li>Farine : {ingredients_list.farine} g.</li>
    <li>Lait : {ingredients_list.lait} litre</li>
    <li>Sucre : {ingredients_list.sucre} c a s</li>
    <li>Beurre : {ingredients_list.beurre} g.</li>
    <li>Oeufs : {ingredients_list.oeuf}</li>
    <li>Sel : {ingredients_list.sel} pincée</li>
  </ul>
</div>;
*/
export default Ingredients;
