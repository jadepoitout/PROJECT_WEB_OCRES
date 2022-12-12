import './Widget1.css';
import React from 'react';


class Widget1 extends React.Component {

    constructor() {
        super();
        this.state = {
            items: []
        };
    }

    /*Appel de l'API qu'on rentre dans un tableau d'objet*/
    componentDidMount() {
        fetch('https://world.openfoodfacts.org/api/v0/product/3038359005800.json')
            .then((response) => response.json())
           //  .then((data) => console.log(data.product))
            .then((food) => this.setState({ items: food.product }))
    }

    /*Affichage des données*/
    render() {
    return (
        <div className="widget1">
            <h3> Apport du dernier repas </h3>
            <img id="photo"src={this.state.items.image_front_url} />
                    <p>  Nutrition par personne:<p className='neon'>  {this.state.items.nutrition_data_per}</p> </p>
                    <p>  Grade de nutrition : {this.state.items.nutriscore_grade} </p>
                    
        </div>


    );
    }
}

export default Widget1;