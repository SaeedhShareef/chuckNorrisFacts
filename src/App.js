import React, { Component } from "react";
import axios from "axios";
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';

import Button from 'react-bootstrap/Button';
class App extends Component {
  state = {
    quote: "",
  };

  getDrink = () => {
    axios
      .get("https://www.thecocktaildb.com/api/json/v1/1/random.php")
      .then((res) => {
        console.log("response", res);
        let ingredientArray = [];
        if(res.data.drinks[0].strIngredient1 != null){
          ingredientArray.push(res.data.drinks[0].strIngredient1)
        } 
        if(res.data.drinks[0].strIngredient2 != null){
          ingredientArray.push(res.data.drinks[0].strIngredient2)
        } 
        if(res.data.drinks[0].strIngredient3 != null){
          ingredientArray.push(res.data.drinks[0].strIngredient3)
        } 
        if(res.data.drinks[0].strIngredient4 != null){
          ingredientArray.push(res.data.drinks[0].strIngredient4)
        } 
        if(res.data.drinks[0].strIngredient5 != null){
          ingredientArray.push(res.data.drinks[0].strIngredient5)
        } 
        if(res.data.drinks[0].strIngredient6 != null){
          ingredientArray.push(res.data.drinks[0].strIngredient6)
        } 
        if(res.data.drinks[0].strIngredient7 != null){
          ingredientArray.push(res.data.drinks[0].strIngredient7)
        } 
        if(res.data.drinks[0].strIngredient8 != null){
          ingredientArray.push(res.data.drinks[0].strIngredient8)
        } 
        if(res.data.drinks[0].strIngredient9 != null){
          ingredientArray.push(res.data.drinks[0].strIngredient9)
        } 
        if(res.data.drinks[0].strIngredient10 != null){
          ingredientArray.push(res.data.drinks[0].strIngredient10)
        } 
        if(res.data.drinks[0].strIngredient11 != null){
          ingredientArray.push(res.data.drinks[0].strIngredient11)
        } 
        if(res.data.drinks[0].strIngredient12 != null){
          ingredientArray.push(res.data.drinks[0].strIngredient12)
        } 
        if(res.data.drinks[0].strIngredient13 != null){
          ingredientArray.push(res.data.drinks[0].strIngredient13)
        } 
        if(res.data.drinks[0].strIngredient14 != null){
          ingredientArray.push(res.data.drinks[0].strIngredient14)
        } 
        if(res.data.drinks[0].strIngredient15 != null){
          ingredientArray.push(res.data.drinks[0].strIngredient15 )
        } 

        const filteredList = ingredientArray.map((items) => {
          return <li> {items} </li>
        })

        this.setState({
          drinkName: res.data.drinks[0].strDrink,
          drinkImage: res.data.drinks[0].strDrinkThumb + "/preview",
          drinkInstructions: res.data.drinks[0].strInstructions,
          drinkIngredients: filteredList,
          clickedButton: true
        });
      });
      console.log(this.state.clickedButton);
  };
  render() {
    return (
    
      <div className="container ">
        <div>
        <h1 className="header">Random Cocktail Generator</h1>
        <Button variant="primary" className="drinkButton" style={{marginLeft: '45%'}} onClick={this.getDrink}>Let's grab a drink</Button>
        </div>
       
        <div className="drinkCards">
     
        {this.state.clickedButton !== false}
        <Row xs={1} md={1} lg={1} xl={3}>
        <Card style={{ width: '16rem', marginBottom: '20px', marginLeft: 'auto', marginRight: 'auto' }}>
      <Card.Img variant="top" src={this.state.drinkImage} />
      <Card.Body>
        <Card.Title style={{marginLeft: 'auto', marginRight: 'auto'}} >{this.state.drinkName}</Card.Title>
      </Card.Body>
    </Card>
    <Card style={{ width: '16rem',marginBottom: '20px', marginLeft: 'auto', marginRight: 'auto' }}>
      <Card.Title style={{marginLeft: 'auto', marginRight: 'auto'}} >Ingredients</Card.Title>
      <Card.Body>
        {this.state.drinkIngredients}
        </Card.Body>
    </Card>
    <Card style={{ width: '16rem', marginBottom: '20px', marginLeft: 'auto', marginRight: 'auto' }}>
      <Card.Title  style={{marginLeft: 'auto', marginRight: 'auto'}}>Instructions</Card.Title>
      <Card.Body>{this.state.drinkInstructions}</Card.Body>
    </Card>
    </Row>
      </div>
      </div>
    );
  }
}
export default App;
