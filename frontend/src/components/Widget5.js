import './Widget1.css';
import React from 'react';


class Widget5 extends React.Component {

    constructor() {
        super();
        this.state = {
            items: []
        };
    }
    
    /*Appel de l'API qu'on rentre dans un tableau d'objet*/
    componentDidMount() {
        fetch('https://data.iledefrance.fr/api/records/1.0/search/?dataset=recensement-des-equipements-sportifs&q=&rows=10&facet=famille&refine.utilisateurs=Individuel(s)%20%2F%20Famille(s)')
            .then((response) => response.json())
             //.then((data) => console.log(data.records))
            .then((food) => this.setState({ items: food.records[0].fields }))
    }

    /*Affichage des données*/
    render() {
        return (
            <div className="widget1">
    
    <h3> Dernière activité externe </h3>

<h2 className='neon'>  {this.state.items.famille} - {this.state.items.insnom}</h2>
<p>  Localisation: {this.state.items.deplib} {this.state.items.cominsee} </p>
           </div>
    
    
        );
        }
    }
    
    export default Widget5;