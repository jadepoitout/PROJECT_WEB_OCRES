import './Widget1.css';
import React from 'react';


class Widget1 extends React.Component {

    constructor() {
        super();
        this.state = {
            items: []
        };
    }

    componentDidMount() {
        fetch('https://world.openfoodfacts.org/api/v0/product/3240931540498.json')
            .then((response) => response.json())
            // .then((data) => console.log(data.product))
            .then((food) => this.setState({ items: food.product }))
    }


    render() {
    return (
        <div className="widget1">
            <h3> Apport du dernier repas </h3>

                    <p>  Nutrition par personne:<h2 className='neon'>  {this.state.items.nutrition_data_per}</h2> </p>
                    <p>  Grade de nutrition : {this.state.items.nutriscore_grade} </p>
                    <p> Additifs: {this.state.items.additives_n} </p>
        </div>


    );
    }
}

export default Widget1;