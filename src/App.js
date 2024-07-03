import React, { Component } from "react";
import axios from "axios";
import Chuck from "../src/Chuck_Norris_03.jpg";
import bar from "../src/Generic+Cocktails+-+Christian+Horan.jpg";
import Card from 'react-bootstrap/Card';

import Button from 'react-bootstrap/Button';
import { CardGroup } from "react-bootstrap";
class App extends Component {
  state = {
    quote: "",
  };

  getNewFact = () => {
    axios
      .get("https://www.thecocktaildb.com/api/json/v1/1/random.php")
      .then((res) => {
        console.log("response", res);
        let ingredientArray = [];
        let clickedButton = false;
        ingredientArray.push(
          res.data.drinks[0].strIngredient1 +
            "," +
            res.data.drinks[0].strIngredient2 +
            "," +
            res.data.drinks[0].strIngredient3 +
            "," +
            res.data.drinks[0].strIngredient4 +
            "," +
            res.data.drinks[0].strIngredient5 +
            "," +
            res.data.drinks[0].strIngredient6 +
            "," +
            res.data.drinks[0].strIngredient7 +
            "," +
            res.data.drinks[0].strIngredient8 +
            "," +
            res.data.drinks[0].strIngredient9 +
            "," +
            res.data.drinks[0].strIngredient10 +
            "," +
            res.data.drinks[0].strIngredient11 +
            "," +
            res.data.drinks[0].strIngredient12 +
            "," +
            res.data.drinks[0].strIngredient13 +
            "," +
            res.data.drinks[0].strIngredient14 +
            "," +
            res.data.drinks[0].strIngredient15 
        );
        console.log(ingredientArray);
        console.log(res.data.drinks[0].strDrink);
        this.setState({
          drinkName: res.data.drinks[0].strDrink,
          drinkImage: res.data.drinks[0].strDrinkThumb + "/preview",
          drinkInstructions: res.data.drinks[0].strInstructions,
          drinkIngredients: ingredientArray,
          clickedButton: true
        });
      });
  };
  render() {
    return (
    
      <div className="container left-align">
        <h1 className="output">Random Cocktail Generator</h1>
        <Button variant="primary" onClick={this.getNewFact}>Let's grab a drink</Button>

        {/* <p>{this.state.drinkName}</p> */}
        {/* <img src= alt='text' /> */}
        {/* <span>{this.state.ingredientArray}</span>
        <span>{this.state.drinkInstructions}</span> */}
        {/* <h1>Chuck Norris Facts</h1>
      <button onClick={ this.getNewFact}>CHUCK STUFF</button>
      <div class="answerBox">
      <p className="output">{this.state.quote}</p> */}
        {/* </div> */}
        <div>
          {this.state.clickedButton === true}
          <span className="drinkCards">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, officia esse. Rem!</span>
        <CardGroup  className="drinkCards">
        <Card >
      <Card.Img variant="top" src={this.state.drinkImage} />
      <Card.Body>
        <Card.Title className="cardTitle">{this.state.drinkName}</Card.Title>
      </Card.Body>
    </Card>
    <Card>
      <Card.Title>Ingredients</Card.Title>
      <Card.Body>{this.state.drinkIngredients}</Card.Body>
    </Card>
    <Card>
      <Card.Title>Instructions</Card.Title>
      <Card.Body>{this.state.drinkInstructions}</Card.Body>
    </Card>
    </CardGroup>
      </div>
      </div>
    );
  }
}
export default App;
