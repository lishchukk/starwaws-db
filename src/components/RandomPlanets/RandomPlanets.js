import React, {Component} from 'react';
import './RandomPlanets.css'

import SwapiService from "../../servicies/SwapiService";
import Spinner from "../Spinner/Spinner";
import ErrorIndicator from "../ErrorIndicator/ErrorIndicator";



export default class RandomPlanets extends Component {
    swapiService = new SwapiService() ;

    static defaultProps ={
        updateInterval: 10000
    };

    state = {
        planet: {},
        loading: true
    };

    onPlanetLoaded = (planet) => {
        this.setState({
            planet,
            loading: false,
            error: false
        });
    };

    onError = (error) => {
        this.setState({
            error: true,
            loading: false
        });
    };

    updatePlanet = () => {
        const id = Math.floor(Math.random()*25) + 2;
        this.swapiService.getPlanet(id)
            .then(this.onPlanetLoaded)
            .catch(this.onError);
    };

    componentDidMount() {
        const { updateInterval } = this.props;

        this.updatePlanet();
        this.interval =  setInterval(this.updatePlanet, updateInterval);

    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }


    render() {
        const { planet, loading, error } = this.state;

        const hasData = !(loading || error);

        const errorMessage = error ? <ErrorIndicator/> : null;
        const spinner = loading ? <Spinner /> : null; // null  внутри jsx разметки игнорируется
        const content = hasData ? <PlanetView planet={planet}/> : null;

        return (
            <div className="random-planet jumbotron rounded">
                {errorMessage}
                {spinner}
                {content}
            </div>
        );
    }
};



const PlanetView = ({ planet }) => {

    const { id, name, population,
        rotationPeriod, diameter } = planet;

    return (
        <React.Fragment>
            <img className="planet-image"
                 src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}  alt='planet'/>
            <div>
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <span className="term">Population</span>
                        <span>{population}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Rotation Period</span>
                        <span>{rotationPeriod}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Diameter</span>
                        <span>{diameter}</span>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    );
};