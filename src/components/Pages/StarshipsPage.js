import React from 'react';
import {StarshipList} from "../SwComponents/ItemLists";

import { withRouter } from "react-router";

const StarshipsPage = ({ history }) => {

    // id корабля будет закодирован в url страницы


    return <StarshipList onItemSelected={( id ) => history.push(id)}/>
        //переходим на отдельную страницу


};

export default withRouter(StarshipsPage);

// Если спользуется Route  с компонентном, то react  не передает объекты match, local, history
// для этого используется HOC withRouter из react-router-dom