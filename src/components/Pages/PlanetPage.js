import React, {Component} from 'react';
import {PlanetList} from "../SwComponents/ItemLists";

import Row from "../Row/Row";
import PlanetDetails from "../SwComponents/PlanetDetails";

export default class PeoplePage extends Component {

    // когда пользоватль выбирает новую планету, она устанавливается в state,
    // затем она попадает в PlanetDetails  и компонент обновляется
    state = {
        selectedItem: null
    };

    onItemSelected = ( selectedItem ) => {
        this.setState({ selectedItem });
    };
    render() {
        const { selectedItem } = this.state;
        return (
            <Row
                left={ <PlanetList onItemSelected={ this.onItemSelected }/> }
                right={ <PlanetDetails itemId={selectedItem}/> }/>
        );
    }
}

